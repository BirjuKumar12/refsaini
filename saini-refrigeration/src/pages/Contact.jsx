import React from "react";

const Contact = () => {
        return (
                <div className="pt-20">
                        <section className="w-full bg-blue-100 text-black py-20">
                                <div className="container mx-auto px-4 text-center">
                                        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                                        <p className="text-lg max-w-2xl mx-auto opacity-90 leading-relaxed">
                                                We’re here to help with all your AC, Refrigerator, Washing Machine,
                                                and Cooler service needs. Contact us for quick assistance, expert
                                                support, and reliable solutions whenever you need us.
                                        </p>
                                </div>
                        </section>
                        <section
                                id="contact"
                                style={{
                                        padding: "60px 0",
                                        backgroundColor: "#ffffff",
                                        fontFamily: "'Montserrat', sans-serif",
                                        paddingTop: "150px"
                                }}
                        >
                                <div className="container" style={{ margin: "0 auto" }}>
                                        <div
                                                style={{
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                        justifyContent: "space-between",
                                                        gap: "30px",
                                                }}
                                        >
                                                {/* Left Side Image */}
                                                <div
                                                        style={{
                                                                flex: "1 1 45%",
                                                                minWidth: "300px",
                                                                animation: "fadeInLeft 1s ease forwards",
                                                        }}
                                                >
                                                        <img
                                                                src="/img/about-1.jpg"
                                                                alt="Contact Us"
                                                                style={{
                                                                        width: "100%",
                                                                        borderRadius: "20px",
                                                                        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                                                                        display: "block",
                                                                }}
                                                        />
                                                </div>

                                                {/* Right Side Form */}
                                                <div
                                                        style={{
                                                                flex: "1 1 50%",
                                                                minWidth: "300px",
                                                                animation: "fadeInRight 1s ease forwards",
                                                        }}
                                                >
                                                        <h2
                                                                style={{
                                                                        fontWeight: "700",
                                                                        color: "#0d6efd",
                                                                        marginBottom: "15px",
                                                                        fontSize: "2rem",
                                                                }}
                                                        >
                                                                Contact Us
                                                        </h2>
                                                        <p style={{ color: "#6c757d", marginBottom: "30px", fontSize: "1rem" }}>
                                                                Have questions or need our service? Fill out the form below, and our team will contact you shortly.
                                                        </p>

                                                        <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                                                                <input
                                                                        type="text"
                                                                        placeholder="Full Name"
                                                                        required
                                                                        style={{
                                                                                padding: "12px 15px",
                                                                                borderRadius: "12px",
                                                                                border: "1px solid #ced4da",
                                                                                fontSize: "1rem",
                                                                                outline: "none",
                                                                        }}
                                                                />
                                                                <input
                                                                        type="email"
                                                                        placeholder="Email Address"
                                                                        required
                                                                        style={{
                                                                                padding: "12px 15px",
                                                                                borderRadius: "12px",
                                                                                border: "1px solid #ced4da",
                                                                                fontSize: "1rem",
                                                                                outline: "none",
                                                                        }}
                                                                />
                                                                <input
                                                                        type="tel"
                                                                        placeholder="Phone Number"
                                                                        required
                                                                        style={{
                                                                                padding: "12px 15px",
                                                                                borderRadius: "12px",
                                                                                border: "1px solid #ced4da",
                                                                                fontSize: "1rem",
                                                                                outline: "none",
                                                                        }}
                                                                />
                                                                <textarea
                                                                        rows="4"
                                                                        placeholder="Your Message"
                                                                        required
                                                                        style={{
                                                                                padding: "12px 15px",
                                                                                borderRadius: "12px",
                                                                                border: "1px solid #ced4da",
                                                                                fontSize: "1rem",
                                                                                outline: "none",
                                                                                resize: "vertical",
                                                                        }}
                                                                ></textarea>
                                                                <button
                                                                        type="submit"
                                                                        style={{
                                                                                padding: "10px 30px",
                                                                                backgroundColor: "#0d6efd",
                                                                                color: "#fff",
                                                                                fontSize: "1rem",
                                                                                fontWeight: "600",
                                                                                border: "none",
                                                                                borderRadius: "50px",
                                                                                cursor: "pointer",
                                                                                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                                                                                transition: "background-color 0.3s ease",
                                                                        }}
                                                                        onMouseOver={(e) => (e.target.style.backgroundColor = "#0b5ed7")}
                                                                        onMouseOut={(e) => (e.target.style.backgroundColor = "#0d6efd")}
                                                                >
                                                                        Send Message
                                                                </button>
                                                        </form>
                                                </div>
                                        </div>
                                </div>

                                {/* Inline Keyframes for fade animations */}
                                <style>
                                        {`
      @keyframes fadeInLeft {
        0% { opacity: 0; transform: translateX(-30px); }
        100% { opacity: 1; transform: translateX(0); }
      }
      @keyframes fadeInRight {
        0% { opacity: 0; transform: translateX(30px); }
        100% { opacity: 1; transform: translateX(0); }
      }
    `}
                                </style>
                        </section>
                </div>

        );
};

export default Contact;
