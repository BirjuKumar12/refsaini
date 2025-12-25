import React from 'react';

const ShippingPolicy = () => {
    return (
        <>
            <style>{`
                html,body{overflow-x:hidden;}
            `}</style>

            {/* Header Section */}
            <header className="bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 text-black py-16 px-4 shadow-2xl mt-[75px]">
                <div className="container mx-auto max-w-5xl text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a4 4 0 004 4h4m-4-4a4 4 0 004-4"></path>
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Shipping Policy</h1>
                    <p className="text-xl text-gray-800 max-w-2xl mx-auto">Our shipping and delivery terms for Saini Refrigeration Services - please read carefully to ensure smooth delivery of your appliances.</p>
                    <p className="mt-4 text-sm text-gray-700">Last Updated: November 26, 2025</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto max-w-5xl px-4 py-12">

                {/* Section 1 */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 section-fade border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl flex-shrink-0">
                            <span className="text-2xl font-bold text-blue-600">1</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping Information</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p><strong>Saini Refrigeration Services</strong> offers delivery services for appliances and spare parts across selected locations in India.</p>
                                <p>Our shipping partners ensure timely and secure delivery of:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Refrigerators and freezers</li>
                                    <li>Air conditioning units</li>
                                    <li>Washing machines</li>
                                    <li>Water coolers</li>
                                    <li>Spare parts and accessories</li>
                                </ul>
                                <p className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                                    <strong className="text-blue-800">Important:</strong> All deliveries are subject to availability and prior confirmation.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2 */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 section-fade border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-xl flex-shrink-0">
                            <span className="text-2xl font-bold text-green-600">2</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Time</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>Delivery timelines vary depending on location and product availability:</p>
                                <div className="grid md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-green-800 mb-2">Metropolitan Areas</h4>
                                        <p>Standard delivery: 3-7 business days</p>
                                        <p>Express delivery: 1-3 business days (additional charges apply)</p>
                                    </div>
                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-orange-800 mb-2">Rural Areas</h4>
                                        <p>Standard delivery: 7-14 business days</p>
                                        <p>Additional transit time due to logistics</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 italic">
                                    Delivery times may vary based on order volume, product availability, and external factors.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3 */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 section-fade border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-3 rounded-xl flex-shrink-0">
                            <span className="text-2xl font-bold text-purple-600">3</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping Charges</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>Shipping charges are calculated based on:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Product weight and dimensions</li>
                                    <li>Delivery location (distance from service center)</li>
                                    <li>Urgency of delivery</li>
                                </ul>
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mt-4">
                                    <h4 className="font-semibold text-yellow-800 mb-2">Free Shipping</h4>
                                    <p>Available on all orders above ₹5000 within metropolitan areas.</p>
                                </div>
                                <p>Additional charges may apply for:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                                    <li>Installation and setup services</li>
                                    <li>Large appliances requiring special handling</li>
                                    <li>Express or emergency deliveries</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4 */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 section-fade border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-xl flex-shrink-0">
                            <span className="text-2xl font-bold text-orange-600">4</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Tracking</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>Stay informed about your delivery with our comprehensive tracking system:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong>Tracking Number:</strong> Provided via email/SMS once order is dispatched</li>
                                    <li><strong>Real-time Updates:</strong> Track your shipment through our website or partner portals</li>
                                    <li><strong>Customer Support:</strong> Contact our support team for assistance</li>
                                </ul>
                                <p className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded mt-4">
                                    <strong className="text-cyan-800">Pro Tip:</strong> Save your tracking number for quick reference. You can also track multiple orders from your account dashboard.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5 */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 section-fade border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-3 rounded-xl flex-shrink-0">
                            <span className="text-2xl font-bold text-pink-600">5</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Restrictions</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>We strive to deliver across India, but certain restrictions apply:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong>Geographic Coverage:</strong> Currently serving India only</li>
                                    <li><strong>Restricted Areas:</strong> Some remote locations may have extended delivery times</li>
                                    <li><strong>Product Restrictions:</strong> Certain large appliances may not be deliverable to elevators/ stairs-only locations</li>
                                </ul>
                                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mt-4">
                                    <p className="text-red-800"><strong>Note:</strong> Additional charges may apply for delivery to difficult-to-access locations or for special handling requirements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="bg-gradient-to-br from-gray-500 via-gray-300 to-gray-500 text-black rounded-2xl shadow-2xl p-8 md:p-12 section-fade">
                    <div className="text-center">
                        <div className="inline-block bg-white/10 p-4 rounded-full mb-4">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a4 4 0 004 4h4m-4-4a4 4 0 004-4"></path>
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Questions About Shipping?</h2>
                        <p className="text-xl mb-6 ">Contact our Delivery Team</p>
                        <div className="space-y-3 mb-6">
                            <p className="flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                                <span className="font-semibold">info@sainirefrigeration.in</span>
                            </p>
                            <p className="flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <span className="font-semibold">18008898529</span>
                            </p>
                            <p className="flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span className="font-semibold">123, Main Street, Your City, India</span>
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a className="px-8 py-3 bg-white text-red-600 font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                                Back to Home
                            </a>
                            <a className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/20 transition-all border-2 border-white/30">
                                Shipping Policy
                            </a>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
};

export default ShippingPolicy;
