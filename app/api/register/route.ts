import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
    try {
        const { name, email, password, image } = await request.json();

        if (!name || !email || !password) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("ecommerce");


        const existingUser = await db.collection("users").findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
        }


        const hashedPassword = await bcrypt.hash(password, 10);


        const newUser = {
            name,
            email,
            password: hashedPassword,
            image: image || "",
            createdAt: new Date(),
        };

        await db.collection("users").insertOne(newUser);

        return NextResponse.json({ success: true }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
    }
}