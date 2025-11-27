'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function AddProduct() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    const onSubmit = async (data: any) => {
        const res = await fetch('/api/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            toast.success('Product added successfully!');
            router.push('/dashboard/manage');
        }
    };

    return (
        <div className="max-w-2xl mx-auto py-10  bg-gray-900 my-20 rounded-xl px-10">
            <h1 className="text-3xl font-bold mb-8">Add New Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-2">Title</label>
                    <input {...register('title')} className="w-full border p-3 rounded-lg" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Price</label>
                    <input {...register('price')} type="number" className="w-full border p-3 rounded-lg" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Short Description</label>
                    <input {...register('shortDesc')} className="w-full border p-3 rounded-lg" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Full Description</label>
                    <textarea {...register('fullDesc')} className="w-full border p-3 rounded-lg h-32" required />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Image URL</label>
                    <input {...register('image')} className="w-full border p-3 rounded-lg" />
                </div>
                <button type="submit" className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-500 transition cursor-pointer">
                    Submit Product
                </button>
            </form>
        </div>
    );
}