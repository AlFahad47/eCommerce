import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const filterByOwner = searchParams.get('my');

        const client = await clientPromise;
        const db = client.db("ecommerce");

        let query = {};


        if (filterByOwner) {
            const session = await getServerSession(authOptions);
            if (!session || !session.user?.email) {
                return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
            }
            query = { ownerEmail: session.user.email };
        }

        const products = await db.collection("products")
            .find(query)
            .sort({ createdAt: -1 })
            .toArray();

        return NextResponse.json(products);
    } catch (e) {
        return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
    }
}


export async function POST(request: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session || !session.user?.email) {
            return NextResponse.json({ error: 'You must be logged in' }, { status: 401 });
        }

        const client = await clientPromise;
        const db = client.db("ecommerce");

        const body = await request.json();

        const newProduct = {
            ...body,
            price: Number(body.price),
            ownerEmail: session.user.email,
            createdAt: new Date(),
        };

        const result = await db.collection("products").insertOne(newProduct);

        return NextResponse.json({ _id: result.insertedId, ...newProduct }, { status: 201 });
    } catch (e) {
        return NextResponse.json({ error: 'Failed to create' }, { status: 500 });
    }
}