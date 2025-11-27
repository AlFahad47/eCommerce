import { Award, Users, Globe, ArrowRight, Heart, Leaf } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">


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
                        Style Delivered, Dreams Unleashed.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
                        "Perfect for fashion-forward sites—short, punchy, and promise-packed."


                    </p>
                </div>
            </section>


            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className=" ">
                    <div className="space-y-8">
                        <div>

                            <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                                Not just filling space.<br/>Creating a home.
                            </h3>
                        </div>
                        <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                            <p>
                                In a world of fast furniture and disposable trends, we chose to slow down. We believe that the objects you surround yourself with should tell a story—your story.
                            </p>
                            <p>
                                Every piece in our collection is selected for its integrity, durability, and timeless appeal. We don't chase fads; we chase "forever."
                            </p>
                        </div>


                    </div>


                </div>
            </section>


            <section className="bg-gray-700 py-24 ">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold mb-4">Why We Exist</h2>
                        <p className="text-white">Why We're Different: Heart, Hustle, Harmony</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="group p-8 bg-white rounded-2xl shadow-sm ">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-black ">
                                <Leaf size={28} />
                            </div>
                            <h4 className="text-xl text-black font-bold mb-3">Heart</h4>
                            <p className="text-gray-500">We give back—10% of profits to artisan communities worldwide, because great gear shouldn't come at the world's expense.</p>
                        </div>

                        <div className="group p-8 bg-white rounded-2xl shadow-sm ">
                            <div className="w-14 h-14 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 text-black ">
                                <Award size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-black mb-3">Hustle</h4>
                            <p className="text-gray-500">Zero inventory drama; we partner direct with 500+ brands for fresh drops weekly.
                                Harmony: Diverse voices at the helm, from queer creators to eco-warriors, ensuring our feed reflects your world.</p>
                        </div>

                        <div className="group p-8 bg-white rounded-2xl shadow-sm ">
                            <div className="w-14 h-14 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6 text-black ">
                                <Users size={28} />
                            </div>
                            <h4 className="text-xl font-bold text-black mb-3">Pro Tip</h4>
                            <p className="text-gray-500">Infuse this with your real backstory for authenticity—add founder quotes or timelines for extra oomph. Need a timeline graphic or team bios? Hit me up!</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}