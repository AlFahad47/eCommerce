'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';


const getProducts = async () => {
    const res = await fetch('/api/products');
    return res.json();
};

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    const filtered = products.filter((p: any) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">All Products</h1>
                <input
                    type="text"
                    placeholder="Search Products..."
                    className="w-full max-w-md px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((product: any) => (
                    <Link href={`/products/${product._id}`} key={product._id} className="group block">
                        <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 mb-4">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <h3 className="text-lg font-semibold">{product.title}</h3>
                        <p className="text-white text-sm">{product.shortDesc}</p>
                        <div className="flex justify-between items-center my-4">
                            <span className="font-medium text-lg">${product.price}</span>
                            <span className=" btn btn-primary">View Details</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}