'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ManageProducts() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const res = await fetch('/api/products?my=true');
        const data = await res.json();
        setProducts(data);
        console.log(data);
    };

    useEffect(() => { fetchProducts(); }, []);

    const handleDelete = async (id: number) => {
        console.log(id,"id");
        if(!confirm("Are you sure?")) return;
        await fetch(`/api/products/${id}`, { method: 'DELETE' });
        fetchProducts();
    };

    return (
        <div className="max-w-6xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-8">Manage Products</h1>
            <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
                <div className="w-full text-left border-collapse text-black">
                    <div className="bg-gray-50">
                    <div className="flex items-center justify-between font-bold ">
                        <div className="p-4  text-black">Products</div>
                        <div className="p-4 ">Price</div>
                        <div className="p-4  text-right">Actions</div>
                    </div>
                    </div>
                    <div className="">
                    {products.map((product: any) => (
                        <div key={product._id} className="flex flex-row justify-between hover:bg-gray-50">
                            <div className="p-4">
                                <div className="font-medium text-gray-900">{product.title}</div>
                                <div className="text-sm text-gray-500">{product.shortDesc}</div>
                            </div>
                            <div className="p-4">${product.price}</div>
                            <div className="p-4 flex  space-x-5 space-y-3  md:flex-row flex-col ">
                                <Link href={`/products/${product._id}`} className="btn btn-primary ">
                                    View
                                </Link>
                                <button onClick={() => handleDelete(product._id)} className="btn">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}