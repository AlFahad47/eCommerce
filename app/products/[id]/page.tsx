'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ShoppingBag, Loader2, Share2, Heart, Clock } from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';

type Product = {
    _id: string;
    title: string;
    shortDesc: string;
    fullDesc: string;
    price: number;
    category: string;
    image: string;
    createdAt: string;
};

export default function ProductDetailsPage() {
    const { id } = useParams();
    const router = useRouter();

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`/api/products/${id}`);

                if (!res.ok) {
                    if (res.status === 404) return setProduct(null);
                    throw new Error('Failed to load');
                }

                const data = await res.json();
                setProduct(data);
            } catch (error) {
                toast.error("Could not load product details.");
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        toast.success(`${product?.title} added to cart!`);
    };


    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="animate-spin h-8 w-8 text-gray-400" />
            </div>
        );
    }


    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-2xl font-bold mb-2">Product Not Found</h2>
                <p className="text-gray-500 mb-6">The item you are looking for might have been removed.</p>
                <Link href="/products" className="text-black  ">
                    Back to Collection
                </Link>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-white">



            <div className="max-w-7xl mx-auto px-4 pb-20 pt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 ">

                    {/* L Image */}
                    <div className="space-y-4">
                        <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-sm ">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* R Details */}
                    <div className="flex flex-col pt-4">
                        <div className="mb-2">

                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                            {product.title}
                        </h1>

                        <p className="text-xl text-gray-500 font-light mb-8">
                            {product.shortDesc}
                        </p>

                        <div className="text-3xl font-semibold mb-8 text-black">
                            Price: {product.price.toLocaleString()}
                        </div>

                        <div className="h-px bg-gray-100 w-full mb-8" />

                        {/* Description */}
                        <div className="prose prose-stone max-w-none text-gray-600 mb-10">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                            <p className="whitespace-pre-line leading-relaxed">
                                {product.fullDesc}
                            </p>
                        </div>

                        {/* Meta Info */}
                        <div className="flex items-center gap-6 text-sm text-gray-500 mb-10">
                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                <span>Listed {new Date(product.createdAt).toLocaleDateString()}</span>
                            </div>

                        </div>


                        <div className="mt-auto">
                            <button
                                onClick={handleAddToCart}
                                className="w-full bg-black text-white h-14 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 hover:bg-gray-900 transition active:scale-[0.99]"
                            >
                                <ShoppingBag size={20} />
                                Add to Cart
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}