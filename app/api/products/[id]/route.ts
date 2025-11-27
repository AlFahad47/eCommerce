import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';


type Props = {
    params: {
        id: string
    }
}

export async function GET(request: Request, { params }: Props) {
    try {
        const { id } = await params;
        const client = await clientPromise;
        const db = client.db("ecommerce");


        if (!ObjectId.isValid(id)) {
            return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
        }

        const product = await db.collection("products").findOne({
            _id: new ObjectId(id)
        });

        if (!product) {
            return NextResponse.json({ error: 'Not found' }, { status: 404 });
        }

        return NextResponse.json(product);
    } catch (e) {
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: Props) {
    try {
        const { id } = await params;
        console.log(id);
        const client = await clientPromise;
        const db = client.db("ecommerce");

        if (!ObjectId.isValid(id)) {
            return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
        }

        const result = await db.collection("products").deleteOne({
            _id: new ObjectId(id)
        });

        return NextResponse.json({ success: true, deletedCount: result.deletedCount });
    } catch (e) {
        return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
    }
}