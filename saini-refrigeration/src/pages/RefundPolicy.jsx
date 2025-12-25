import React from 'react';

const RefundPolicy = () => {
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
                    <p className="text-xl max-w-2xl mx-auto">Learn about our refund processes, cancellation terms, and warranty coverage for Saini Refrigeration Services.</p>
                    <p className="mt-4 text-sm">Last Updated: November 26, 2025</p>
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
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Eligible Services</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>Refunds may be applicable for specific categories of products and services:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Spare parts purchased online or through our website</li>
                                    <li>Defective or damaged products received</li>
                                    <li>Accessory items that do not meet specifications</li>
                                    <li>Prepaid service bookings (subject to cancellation terms)</li>
                                </ul>
                                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mt-4">
                                    <p className="text-red-800"><strong>Note:</strong> Service charges are typically non-refundable once work has been initiated or completed on appliances.</p>
                                </div>
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
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Request Process</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>To initiate a refund request, follow these simple steps:</p>
                                <ol className="list-decimal list-inside space-y-2 ml-4">
                                    <li>Fill out the refund request form on our website or contact customer support</li>
                                    <li>Provide purchase receipt, order number, and detailed reason for refund</li>
                                    <li>Submit photographic evidence if the issue is product-related</li>
                                    <li>Wait for our team's verification (typically within 2-3 business days)</li>
                                    <li>Once approved, refund will be processed within the specified timeline</li>
                                </ol>
                                <p className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mt-4">
                                    <strong className="text-blue-800">Tip:</strong> Include clear photos and detailed descriptions to expedite the verification process.
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
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Conditions</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>All refund requests must meet our eligibility criteria:</p>
                                <div className="grid md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-gray-800 mb-2">Approved for Refund</h4>
                                        <ul className="space-y-1 text-sm">
                                            <li>• Unused spare parts in original packaging</li>
                                            <li>• Defective products</li>
                                            <li>• Wrong items received</li>
                                            <li>• Damaged during transit</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-red-800 mb-2">Not Eligible for Refund</h4>
                                        <ul className="space-y-1 text-sm">
                                            <li>• Services already performed</li>
                                            <li>• Used or damaged parts</li>
                                            <li>• Products outside refund period</li>
                                            <li>• Missing original packaging/tags</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="mt-4">Refunds are credited to the original payment method within 7-10 business days after approval.</p>
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
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Policy</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>Service bookings can be cancelled according to our timeline-based policy:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong>More than 24 hours before:</strong> Full refund for service charges</li>
                                    <li><strong>12-24 hours before:</strong> 50% cancellation fee applied</li>
                                    <li><strong>Less than 12 hours before:</strong> No refund available</li>
                                    <li><strong>Same-day cancellation:</strong> No refund for emergency or stat calls</li>
                                </ul>
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mt-4">
                                    <p className="text-yellow-800"><strong>Exception:</strong> Emergency repairs may have different cancellation terms. Please check our customer service for details.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 5 */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 section-fade border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-3 rounded-xl flex-shrink-0">
                            <span className="text-2xl font-bold text-teal-600">5</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranty Coverage</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p><strong>Saini Refrigeration Services</strong> provides comprehensive warranty coverage:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong>Parts Warranty:</strong> 6-12 months on replacement parts depending on type</li>
                                    <li><strong>Labor Warranty:</strong> 30 days on service workmanship</li>
                                    <li><strong>Manufacturer Warranty:</strong> As per original equipment manufacturer</li>
                                    <li><strong>Extended Coverage:</strong> Available for additional paid protection</li>
                                </ul>
                                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mt-4">
                                    <p className="text-green-800"><strong>Free Repairs:</strong> All warranty repairs are performed at no additional cost to you. Only transportation charges may apply.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 6 */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 section-fade border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-rose-100 to-rose-200 p-3 rounded-xl flex-shrink-0">
                            <span className="text-2xl font-bold text-rose-600">6</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Processing Timeline</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>Typical processing times for refund requests:</p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                        <span><strong>Refund Review:</strong> 2-3 business days after submission</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span><strong>Processing:</strong> Up to 7 business days for approval</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                        <span><strong>Refund Credit:</strong> 3-7 business days after approval</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 italic mt-4">
                                    Total timeline: 12-17 business days from initial request to refund credit.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="bg-gradient-to-br from-gray-500 via-gray-300 to-gray-500 text-black  rounded-2xl shadow-2xl p-8 md:p-12 section-fade">
                    <div className="text-center">
                        <div className="inline-block bg-white/10 p-4 rounded-full mb-4">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Questions About Refunds?</h2>
                        <p className="text-xl mb-6 ">Contact our Refund Support Team</p>
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
                                Refund Policy
                            </a>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
};

export default RefundPolicy;
