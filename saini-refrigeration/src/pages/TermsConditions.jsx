import React from 'react';

const TermsConditions = () => {
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
                            <svg className="w-10 h-10 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
                    <p className="text-xl max-w-2xl mx-auto">Welcome to <span className="font-bold text-blue-600">Saini Refrigeration</span> - Please read our terms carefully before using our services</p>
                    <p className="mt-4 text-sm">Last Updated: November 26, 2025</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto max-w-5xl px-4 py-12">

                {/* Introduction */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 section-fade border border-gray-100">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="bg-gradient-to-br from-red-100 to-orange-100 p-3 rounded-xl">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Saini Refrigeration</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                These Terms and Conditions ("Terms") govern your use of the <span className="font-semibold text-blue-600">Saini Refrigeration</span> website and services. By accessing or using our platform, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 1 */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 section-fade border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl flex-shrink-0">
                            <span className="text-2xl font-bold text-blue-600">1</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>By creating an account, making a purchase, or browsing our website, you acknowledge that you have read, understood, and agree to comply with:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>These Terms and Conditions</li>
                                    <li>Our Privacy Policy</li>
                                    <li>Our Shipping & Delivery Policy</li>
                                    <li>Our Return & Refund Policy</li>
                                </ul>
                                <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                                    <strong className="text-yellow-800">Important:</strong> We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting.
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
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Eligibility</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>To use <span className="font-semibold text-blue-600">Saini Refrigeration</span>, you must:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Be at least 18 years of age or have parental/guardian consent</li>
                                    <li>Provide accurate and complete registration information</li>
                                    <li>Maintain the confidentiality of your account credentials</li>
                                    <li>Be responsible for all activities under your account</li>
                                    <li>Notify us immediately of any unauthorized use of your account</li>
                                </ul>
                                <p className="text-sm text-gray-600 italic">
                                    We reserve the right to suspend or terminate accounts that violate these Terms.
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
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Information & Pricing</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p><strong>Product Descriptions:</strong> We strive to provide accurate product information, including descriptions, images, specifications, and pricing. However:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Minor variations in color, size, or appearance may occur</li>
                                    <li>Prices are subject to change without prior notice</li>
                                    <li>We do not guarantee availability of all products</li>
                                    <li>Product images are for reference only</li>
                                </ul>
                                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mt-4">
                                    <p className="text-red-800"><strong>Disclaimer:</strong> Saini Refrigeration is not responsible for typographical errors or inaccuracies in product listings.</p>
                                </div>
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
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Orders & Payment</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p><strong>Order Placement:</strong></p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>All orders are subject to availability and acceptance</li>
                                    <li>We reserve the right to refuse or cancel any order</li>
                                    <li>Order confirmation does not guarantee product availability</li>
                                    <li>Payment must be completed before order processing</li>
                                </ul>
                                <p className="mt-4"><strong>Payment Methods:</strong></p>
                                <p>We accept secure payments through:</p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                                    <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-200">
                                        <p className="font-semibold text-sm">Credit/Debit Cards</p>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-200">
                                        <p className="font-semibold text-sm">UPI</p>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-200">
                                        <p className="font-semibold text-sm">Net Banking</p>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-lg text-center border border-gray-200">
                                        <p className="font-semibold text-sm">Wallets</p>
                                    </div>
                                </div>
                                <p className="bg-green-50 border-l-4 border-green-500 p-4 rounded mt-4">
                                    <strong className="text-green-800">Security:</strong> All transactions are encrypted and secure. We do not store your payment information.
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
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Shipping & Delivery</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li><strong>Free Shipping:</strong> Available on all orders above ₹500</li>
                                    <li><strong>Delivery Time:</strong> 5-7 business days (may vary by location)</li>
                                    <li><strong>Tracking:</strong> You will receive tracking information via email/SMS</li>
                                    <li><strong>Address Accuracy:</strong> You are responsible for providing correct delivery address</li>
                                    <li><strong>Failed Delivery:</strong> Re-delivery charges may apply for failed attempts</li>
                                </ul>
                                <p className="text-sm text-gray-600 italic">
                                    Delivery times are estimates and not guaranteed. Delays may occur due to unforeseen circumstances.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 6 */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 section-fade border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-3 rounded-xl flex-shrink-0">
                            <span className="text-2xl font-bold text-indigo-600">6</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Returns & Refunds</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p><strong>Return Policy:</strong></p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Products can be returned within <strong>7 days</strong> of delivery</li>
                                    <li>Item must be unused, in original condition with tags/packaging</li>
                                    <li>Proof of purchase (invoice) is mandatory</li>
                                    <li>Certain products (e.g., personal care items) are non-returnable</li>
                                </ul>
                                <p className="mt-4"><strong>Refund Process:</strong></p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Refunds are processed within 7-10 business days after inspection</li>
                                    <li>Refund will be credited to original payment method</li>
                                    <li>Shipping charges are non-refundable unless product is defective</li>
                                </ul>
                                <p className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mt-4">
                                    <strong className="text-blue-800">Note:</strong> Damaged or defective products will be replaced or refunded at no extra cost.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 7 */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 section-fade border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-red-100 to-red-200 p-3 rounded-xl flex-shrink-0">
                            <span className="text-2xl font-bold text-blue-600">7</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Conduct & Prohibited Activities</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>Users are <strong>prohibited</strong> from:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Using the website for illegal purposes</li>
                                    <li>Posting false, misleading, or fraudulent content</li>
                                    <li>Attempting to hack, disrupt, or damage the website</li>
                                    <li>Using automated bots or scripts</li>
                                    <li>Reselling products without authorization</li>
                                    <li>Violating intellectual property rights</li>
                                </ul>
                                <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded mt-4">
                                    <p className="text-red-800"><strong>Warning:</strong> Violation of these terms may result in account suspension, legal action, or both.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 8 */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 section-fade border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-3 rounded-xl flex-shrink-0">
                            <span className="text-2xl font-bold text-teal-600">8</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>All content on <span className="font-semibold text-blue-600">Saini Refrigeration</span> including but not limited to:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Logos, trademarks, and brand name</li>
                                    <li>Product images, descriptions, and graphics</li>
                                    <li>Website design and layout</li>
                                    <li>Text, code, and software</li>
                                </ul>
                                <p>...is owned by or licensed to Saini Refrigeration and protected by copyright, trademark, and other intellectual property laws.</p>
                                <p className="mt-4"><strong>Usage Restrictions:</strong> You may not copy, reproduce, distribute, or create derivative works without our written permission.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 9 */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 section-fade border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-3 rounded-xl flex-shrink-0">
                            <span className="text-2xl font-bold text-yellow-600">9</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p><strong>Saini Refrigeration</strong> shall not be liable for:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Indirect, incidental, or consequential damages</li>
                                    <li>Loss of profits, data, or business opportunities</li>
                                    <li>Delays or failures due to circumstances beyond our control</li>
                                    <li>Third-party payment gateway issues</li>
                                    <li>Misuse of products by customers</li>
                                </ul>
                                <p className="bg-gray-100 p-4 rounded mt-4 text-sm">
                                    Our maximum liability is limited to the amount paid for the specific product or service in question.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 10 */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 section-fade border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-3 rounded-xl flex-shrink-0">
                            <span className="text-2xl font-bold text-gray-700">10</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy & Data Protection</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>Your privacy is important to us. By using Saini Refrigeration, you agree to our collection and use of personal information as described in our <a href="/Privacy-Policy" className="text-blue-600 font-semibold hover:underline">Privacy Policy</a>.</p>
                                <p><strong>We collect:</strong></p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Name, email, phone number, and address</li>
                                    <li>Payment and transaction information</li>
                                    <li>Browsing behavior and preferences</li>
                                </ul>
                                <p><strong>We use your data to:</strong></p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Process orders and payments</li>
                                    <li>Send order updates and promotional offers</li>
                                    <li>Improve our services and user experience</li>
                                </ul>
                                <p className="text-sm text-green-700 bg-green-50 p-4 rounded mt-4">
                                    <strong>Security:</strong> We implement industry-standard security measures to protect your personal information.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 11 */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 section-fade border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 p-3 rounded-xl flex-shrink-0">
                            <span className="text-2xl font-bold text-cyan-600">11</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law & Dispute Resolution</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>These Terms are governed by the laws of <strong>India</strong>.</p>
                                <p><strong>Dispute Resolution:</strong></p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Any disputes will be subject to the exclusive jurisdiction of courts in Delhi, India</li>
                                    <li>We encourage amicable resolution through customer support before legal action</li>
                                    <li>Arbitration may be pursued if both parties agree</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 12 */}
                <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 section-fade border border-gray-100">
                    <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-rose-100 to-rose-200 p-3 rounded-xl flex-shrink-0">
                            <span className="text-2xl font-bold text-rose-600">12</span>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications to Terms</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p><strong>Saini Refrigeration</strong> reserves the right to update or modify these Terms at any time without prior notice.</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Changes will be effective immediately upon posting</li>
                                    <li>Continued use of our services constitutes acceptance of updated Terms</li>
                                    <li>We recommend reviewing this page periodically</li>
                                </ul>
                                <p className="text-sm text-gray-600 italic mt-4">
                                    Last Updated: November 26, 2025
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Questions About Privacy?</h2>
                        <p className="text-xl mb-6">Contact our Data Protection Team</p>
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
                            <a className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                                Back to Home
                            </a>
                            <a className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/20 transition-all border-2 border-white/30">
                                Terms & Conditions
                            </a>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
};

export default TermsConditions;
