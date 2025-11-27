import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import clientPromise from "@/lib/mongodb";


async function getLatestProducts() {
    try {
        const client = await clientPromise;
        const db = client.db("ecommerce");

        const products = await db.collection("products")
            .find({})
            .sort({createdAt: -1}) // Sort by newest
            .limit(3)                // Only get 3
            .toArray();


        return products.map(product => ({
            ...product,
            _id: product._id.toString(),
            createdAt: product.createdAt?.toString()
        }));
    } catch (error) {
        console.error("Failed to fetch latest products:", error);
        return [];
    }
}
export default async function Home() {

    const latestProducts = await getLatestProducts();
    const features = [{
        "title": "Lightning-Fast Delivery",
        "description": "Get your orders in 1-2 days with our premium shipping network. Track every step in real-time—no more guessing games. Plus, free returns if it's not love at first sight."
    },
        {
            "title": "Curated Collections for Every Vibe",
            "description": "Handpicked by style experts: from sustainable streetwear to luxury loungers. AI-powered recommendations that know you better than your best friend."
        },
        {
            "title": "Secure & Seamless Checkout",
            "description": "Pay your way—Apple Pay, crypto, or good old cards—with bank-level encryption. One-click ordering means more time shopping, less time typing."}


    ]




    return (
        <main className="min-h-screen">


            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center bg-stone-900 text-white overflow-hidden">

                <div className="absolute inset-0 opacity-30">
                    <img
                        src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2000"
                        alt="Studio Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 text-center max-w-4xl px-6 space-y-6">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                        Gear Up for Adventure, Right at Your Door
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
                        Premium Tech & Outdoors, Tailored to You
                    </p>
                    <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
                        Dive into innovation with cutting-edge gadgets, rugged gear, and must-have accessories. Lightning-fast delivery and insider tips to fuel your next big move.
                    </p>
                </div>
            </section>

            {/* 2. Features */}
            <section className="py-20 px-4 max-w-7xl mx-auto grid md:grid-cols-3 gap-4">
                {features.map((feature, i) => (
                    <div key={i} className="p-6 border border-gray-100 rounded-xl hover:scale-105">
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-500">{feature.description}</p>
                    </div>
                ))}
            </section>

            {/* top 3*/}
            <section className="py-20 max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-10">Latest Products</h2>
            {latestProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {latestProducts.map((product: any) => (
                        <Link href={`/products/${product._id}`} key={product._id} className="group block">
                            <div className="relative  overflow-hidden rounded-xl bg-gray-100 mb-5">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Price Tag Overlay */}
                                <div className="absolute bottom-4 left-4 bg-white/90 text-black  px-4 py-2 rounded-lg text-sm font-bold shadow-sm">
                                    ${product.price}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-1 group-hover:text-gray-600 transition-colors">
                                {product.title}
                            </h3>
                            <p className="text-gray-500 text-sm line-clamp-1 mb-2">
                                {product.shortDesc}
                            </p>
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    {product.category }
                  </span>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-gray-50 rounded-xl">
                    <p className="text-gray-500">No products found. Login and add some!</p>
                </div>
            )}
        </section>

            {/*slogan */}

            <section className="py-20 max-w-4xl mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-10">Style Delivered, Dreams Unleashed.</h2>
                <p className="text-2xl italic text-gray-700">"Perfect for fashion-forward sites—short, punchy, and promise-packed."</p>

            </section>


            <section className="py-20 bg-stone-50 px-4">
                <div className=" ">
                    <div className="flex lg:flex-row flex-col justify-between items-center lg:w-9/12 w-11/12 mx-auto mt-10 bg-gray-700 p-10 rounded-2xl relative z-10 -mb-10   border-white/30 border-3 shadow-lg lg:px-30">
                        <img
                            className="lg:max-h-[350px] md:max-h-[300px] max-h-[250px] mb-5 rounded-full"
                            src='/logo.jpg'
                            alt=""
                        />
                        <div className=" text-white/80">
                            <h2 className="font-bold lg:text-3xl md:text-3xl text-xl mb-2">
                                Subscribe for Newsletter
                            </h2>
                            <p className="text-[14px] lg:text-xl md:text-xl">
                                Join our mailing list to get quick updates...
                            </p>
                            <form
                                className="flex gap-3 mt-10 "
                                action=""

                            >
                                <input
                                    className="input text-white"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                                <button className="bg-gray-900 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </main>
    );
}