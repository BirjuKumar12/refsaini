import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./ProductCard"
import { latest, our, best, service } from "../components/Home.js"
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";
import { useAuth } from "../components/AuthContext";



function Home() {
        const { addToCart, cart, removeFromCart } = useCart();
        const { user } = useAuth();
        const navigate = useNavigate();

        const handleBuyNow = (item, e) => {
                if (e) e.preventDefault();
                if (!user) {
                        alert("Please login first to buy items!");
                        navigate('/login');
                        return;
                }
                const isInCart = cart.some((cartItem) => cartItem.name === item.name);
                if (!isInCart) {
                        addToCart(item);
                }
                navigate('/checkout');
        };

        const renderCard = (item) => {
                const isInCart = cart.some((cartItem) => cartItem.name === item.name);
                return (
                        <div
                                key={item.id}
                                style={{
                                        flex: "1 1 calc(25% - 20px)",
                                        minWidth: "250px",
                                        backgroundColor: "#ffffff",
                                        justifyItems: "center",
                                        textAlign: "center",
                                        borderRadius: "12px",
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
                                        transition: "transform 0.3s, box-shadow 0.3s",
                                }}
                                onMouseEnter={(e) => {
                                        e.currentTarget.style.border = "1px solid cyan";
                                        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";
                                }}
                                onMouseLeave={(e) => {
                                        e.currentTarget.style.border = "0";
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.05)";
                                }}
                        >
                                {/* Product Image */}
                                <Link
                                        to={`/${item.name}`}
                                        style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                height: "230px",
                                                padding: "15px",
                                        }}
                                >
                                        <img
                                                src={item.img}
                                                alt={item.name}
                                                style={{
                                                        maxHeight: "100%",
                                                        maxWidth: "100%",
                                                        objectFit: "contain",
                                                        borderTopLeftRadius: "12px",
                                                        borderTopRightRadius: "12px",
                                                }}
                                        />
                                </Link>

                                {/* Product Details */}
                                <div className="flex flex-col items-center justify-center" style={{ padding: "15px" }}>
                                        <Link
                                                to={`/${item.name}`}
                                                style={{
                                                        fontWeight: "600",
                                                        color: "#212529",
                                                        marginBottom: "8px",
                                                        fontFamily: "'Montserrat', sans-serif",
                                                }}
                                        >
                                                {item.name}
                                        </Link>
                                        <p
                                                style={{
                                                        color: "#6c757d",
                                                        fontSize: "14px",
                                                        marginBottom: "10px",
                                                        fontFamily: "'Montserrat', sans-serif",
                                                }}
                                        >
                                                {item.price}
                                        </p>
                                        <div className="w-fit flex flex-row items-center justify-center" style={{ padding: "10px 0 15px 0" }}>
                                                {item.star >= 1 && <img src="/img/Star.webp" alt="" style={{ width: "20px" }} />}
                                                {item.star >= 2 && <img src="/img/Star.webp" alt="" style={{ width: "20px" }} />}
                                                {item.star >= 3 && <img src="/img/Star.webp" alt="" style={{ width: "20px" }} />}
                                                {item.star >= 4 && <img src="/img/Star.webp" alt="" style={{ width: "20px" }} />}
                                                {item.star >= 5 && <img src="/img/Star.webp" alt="" style={{ width: "20px" }} />}
                                        </div>
                                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '10px' }}>
                                                <button
                                                        onClick={() => (isInCart ? removeFromCart(item.name) : addToCart(item))}
                                                        style={{
                                                                backgroundColor: isInCart ? "#28a745" : "#0d6efd",
                                                                color: "#ffffff",
                                                                border: "none",
                                                                padding: "8px 14px",
                                                                borderRadius: "50px",
                                                                fontSize: "13px",
                                                                cursor: "pointer",
                                                                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                                                                opacity: isInCart ? 0.8 : 1,
                                                        }}
                                                >
                                                        {isInCart ? "✅ Added" : "🛒 Add to Cart"}
                                                </button>
                                                <button
                                                        onClick={(e) => handleBuyNow(item, e)}
                                                        style={{
                                                                backgroundColor: "#ffda1f",
                                                                color: "#212529",
                                                                border: "none",
                                                                padding: "8px 18px",
                                                                borderRadius: "50px",
                                                                fontSize: "13px",
                                                                fontWeight: "600",
                                                                cursor: "pointer",
                                                                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                                                        }}
                                                        onMouseEnter={(e) => e.target.style.backgroundColor = "#ffc107"}
                                                        onMouseLeave={(e) => e.target.style.backgroundColor = "#ffda1f"}
                                                >
                                                        ⚡ Buy Now
                                                </button>
                                        </div>
                                </div>
                        </div>
                );
        };


        useEffect(() => {
                // Auto-start carousel after component mounts
                setTimeout(() => {
                        const el = document.getElementById("header-carousel");
                        if (el && window.bootstrap) {
                                new window.bootstrap.Carousel(el, {
                                        interval: 5000,   // ⏳ slower 5-sec scroll
                                        ride: "carousel",
                                        pause: false,
                                        wrap: true
                                });
                        }
                }, 300);
        }, []);

        return (
                <div className="pt-[75px] ">
                        <main>

                                <section id="carousel" style={{ marginTop: "10px" }}>
                                        <div className="container-fluid p-0">
                                                <div
                                                        id="header-carousel"
                                                        className="carousel slide carousel-fade"
                                                        data-bs-ride="carousel"
                                                        data-bs-interval="5000"  // ⏳ slower scroll
                                                >

                                                        {/* ✓ Slide Indicators (Dots) */}
                                                        <div className="carousel-indicators">
                                                                <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="0" className="active"></button>
                                                                <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="1"></button>
                                                                <button type="button" data-bs-target="#header-carousel" data-bs-slide-to="2"></button>
                                                        </div>

                                                        <div className="carousel-inner">

                                                                {/* Slide 1 */}
                                                                <div className="carousel-item active">

                                                                        <img
                                                                                src="/img/slider/1.png"
                                                                                className="d-block w-100"
                                                                                alt="Slide 1"
                                                                                style={{
                                                                                        width: "100vw",
                                                                                        objectFit: "cover",
                                                                                        //                                             marginTop: "-20px",
                                                                                        marginBottom: "-260px",
                                                                                        height: "fit-content",
                                                                                        overflow: "clip"
                                                                                }}
                                                                        />

                                                                </div>

                                                                {/* Slide 2 */}
                                                                <div className="carousel-item">
                                                                        <img
                                                                                src="/img/slider/2.png"
                                                                                className="d-block w-100"
                                                                                alt="Slide 2"
                                                                                style={{
                                                                                        width: "100vw",
                                                                                        objectFit: "cover",
                                                                                        //                                             marginTop: "-20px",
                                                                                        marginBottom: "-185px",
                                                                                        overflow: "clip"
                                                                                }}
                                                                        />
                                                                </div>
                                                                ``
                                                                {/* Slide 3 */}
                                                                <div className="carousel-item">
                                                                        <img
                                                                                src="/img/slider/3.png"
                                                                                className="d-block w-100"
                                                                                alt="Slide 3"
                                                                                style={{
                                                                                        width: "100vw",
                                                                                        objectFit: "cover",
                                                                                        //                                             marginTop: "-20px",
                                                                                        marginBottom: "-140px",
                                                                                        overflow: "clip"
                                                                                }}
                                                                        />
                                                                </div>

                                                        </div>

                                                        {/* Controls */}
                                                        <button
                                                                className="carousel-control-prev"
                                                                type="button"
                                                                data-bs-target="#header-carousel"
                                                                data-bs-slide="prev"
                                                        >
                                                                <span className="carousel-control-prev-icon"></span>
                                                        </button>

                                                        <button
                                                                className="carousel-control-next"
                                                                type="button"
                                                                data-bs-target="#header-carousel"
                                                                data-bs-slide="next"
                                                        >
                                                                <span className="carousel-control-next-icon"></span>
                                                        </button>
                                                </div>
                                        </div>
                                </section>

                        </main>
                        {/* ✅ About Section end */}

                        {/* Products Section start */}

                        {/* ✅ Latest Products Section */}
                        <section
                                id="latest-products"
                                style={{
                                        backgroundColor: "#f8f9fa",
                                        padding: "60px 0",
                                }}
                        >
                                <div className="container" style={{ margin: "0 auto" }}>
                                        {/* Section Title */}
                                        <div
                                                style={{
                                                        textAlign: "center",
                                                        marginBottom: "40px",
                                                }}
                                        >
                                                <h2
                                                        style={{
                                                                fontWeight: "700",
                                                                color: "#0d6efd",
                                                                fontSize: "2rem",
                                                                marginBottom: "10px",
                                                                fontFamily: "'Montserrat', sans-serif",
                                                        }}
                                                >
                                                        Latest Products
                                                </h2>
                                                <p
                                                        style={{
                                                                color: "#6c757d",
                                                                fontSize: "1rem",
                                                                fontFamily: "'Montserrat', sans-serif",
                                                                margin: 0,
                                                        }}
                                                >
                                                        Check out our newly arrived appliances
                                                </p>
                                        </div>

                                        {/* Product Grid */}
                                        <div
                                                style={{
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                        justifyContent: "space-between",
                                                        gap: "20px",
                                                }}
                                        >

                                                {latest.map(renderCard)}
                                        </div>
                                </div>
                        </section>



                        {/* Products Section end */}

                        {/* ✅ our services Section */}

                        {/* ✅ Products Section */}

                        <section
                                id="products"
                                style={{
                                        backgroundColor: "#f8f9fa",
                                        padding: "60px 0"
                                }}
                        >
                                <div className="container" style={{ margin: "0 auto" }}>
                                        <div style={{ textAlign: "center", marginBottom: "40px" }}>
                                                <h2
                                                        style={{
                                                                fontWeight: "700",
                                                                color: "#0d6efd",
                                                                marginBottom: "10px",
                                                                fontSize: "2rem",
                                                        }}
                                                >
                                                        Our Products
                                                </h2>
                                                <p style={{ color: "#6c757d", fontSize: "1rem" }}>
                                                        High-quality appliances designed for your comfort and lifestyle
                                                </p>
                                        </div>

                                        <div
                                                style={{
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                        justifyContent: "space-between",
                                                        gap: "20px",
                                                }}
                                        >
                                                {our.map(renderCard)}
                                        </div>
                                </div>
                        </section>


                        {/* valued products  start*/}

                        <section
                                id="latest-products"
                                style={{
                                        backgroundColor: "#f8f9fa",
                                        padding: "60px 0",
                                }}
                        >
                                <div className="container" style={{ margin: "0 auto" }}>
                                        {/* Section Title */}
                                        <div
                                                style={{
                                                        textAlign: "center",
                                                        marginBottom: "40px",
                                                }}
                                        >
                                                <h2
                                                        style={{
                                                                fontWeight: "700",
                                                                color: "#0d6efd",
                                                                fontSize: "2rem",
                                                                marginBottom: "10px",
                                                                fontFamily: "'Montserrat', sans-serif",
                                                        }}
                                                >
                                                        Best Valued Products
                                                </h2>
                                                <p
                                                        style={{
                                                                color: "#6c757d",
                                                                fontSize: "1rem",
                                                                fontFamily: "'Montserrat', sans-serif",
                                                                margin: 0,
                                                        }}
                                                >
                                                        Valued Products – Quality You Trust, Value You Deserve.
                                                </p>
                                        </div>

                                        {/* Product Grid */}
                                        <div
                                                style={{
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                        justifyContent: "space-between",
                                                        gap: "20px",
                                                }}
                                        >
                                                {best.map(renderCard)}
                                        </div>
                                </div>
                        </section>

                        {/* valued products  end*/}



                        <section
                                id="how-works"
                                style={{
                                        backgroundColor: "#ffffff",
                                        padding: "60px 0",
                                }}
                        >
                                <div className="container">
                                        <div
                                                style={{
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                        justifyContent: "center",
                                                        textAlign: "center",
                                                        marginBottom: "30px",
                                                }}
                                        >
                                                <div style={{ width: "100%" }}>
                                                        <h2
                                                                className="fw-bold text-primary"
                                                                style={{
                                                                        fontFamily: "'Montserrat', sans-serif",
                                                                        // color: "red",
                                                                        fontWeight: "700",
                                                                        fontSize: "40px",
                                                                        marginBottom: "10px",
                                                                }}
                                                        >
                                                                Our Services
                                                        </h2>
                                                        <p
                                                                className="text-muted"
                                                                style={{
                                                                        fontFamily: "'Montserrat', sans-serif",
                                                                        fontSize: "18px",
                                                                        color: "black",
                                                                        margin: "0",
                                                                }}
                                                        >
                                                                We are dedicated to keeping your home cool, comfortable with our reliable installation, repair, and maintenance solutions.
                                                        </p>
                                                </div>
                                        </div>

                                        <div
                                                style={{
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                        justifyContent: "space-between",
                                                        textAlign: "center",
                                                        gap: "20px",
                                                }}
                                        >
                                                {service.map(renderCard)}
                                        </div>
                                </div>
                        </section>




                        <section
                                id="how-works"
                                style={{
                                        backgroundColor: "#ffffff",
                                        padding: "60px 0",
                                }}
                        >
                                <div className="container" style={{ margin: "0 auto" }}>
                                        {/* Section Heading */}
                                        <div
                                                style={{
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                        justifyContent: "center",
                                                        textAlign: "center",
                                                        marginBottom: "40px",
                                                }}
                                        >
                                                <div style={{ width: "100%" }}>
                                                        <h2
                                                                style={{
                                                                        fontFamily: "'Montserrat', sans-serif",
                                                                        fontWeight: "700",
                                                                        fontSize: "40px",
                                                                        color: "#0d6efd",
                                                                        marginBottom: "10px",
                                                                }}
                                                        >
                                                                How it works
                                                        </h2>
                                                        <p
                                                                style={{
                                                                        fontFamily: "'Montserrat', sans-serif",
                                                                        fontSize: "18px",
                                                                        color: "#555555",
                                                                        margin: "0",
                                                                }}
                                                        >
                                                                Connect with us on your phone for easier access to our services!
                                                        </p>
                                                </div>
                                        </div>

                                        {/* Cards Section */}
                                        <div
                                                style={{
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                        justifyContent: "space-between",
                                                        textAlign: "center",
                                                        gap: "20px",
                                                }}
                                        >
                                                {[
                                                        {
                                                                icon: "/img/search us.png",
                                                                title: "SIGN UP",
                                                                text: "You can book and track service requests by signing up on our app, following a simple process. So, download our app today.",
                                                        },
                                                        {
                                                                icon: "/img/Book us.png",
                                                                title: "BOOK US",
                                                                text: "Concerned about certain things? Just make a call to us and receive consultation on your queries and our services.",
                                                        },
                                                        {
                                                                icon: "/img/repair us.png",
                                                                title: "EXPECT US",
                                                                text: "Once your service request is confirmed, our team will update you on the time and date of the technician's arrival, and you can get your space repaired and refreshed ASAP.",
                                                        },
                                                        {
                                                                icon: "/img/expert us.webp",
                                                                title: "BECOME A MEMBER",
                                                                text: "Are you in regular need of maintenance services? Become a member and get uninterrupted service at your doorsteps with just one call.",
                                                        },
                                                ].map((item, i) => (
                                                        <div
                                                                key={i}
                                                                style={{
                                                                        flex: "1 1 calc(25% - 20px)",
                                                                        minWidth: "200px",
                                                                        backgroundColor: "#f9f9f9",
                                                                        padding: "20px 15px",
                                                                        borderRadius: "12px",
                                                                        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                                                                        transition: "transform 0.3s, box-shadow 0.3s",
                                                                }}
                                                                onMouseEnter={(e) => {
                                                                        e.currentTarget.style.border = "1px solid cyan"
                                                                        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.15)";
                                                                }}
                                                                onMouseLeave={(e) => {
                                                                        e.currentTarget.style.border = "0"
                                                                        e.currentTarget.style.transform = "translateY(0)";
                                                                        e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.08)";
                                                                }}
                                                        >
                                                                <div
                                                                        style={{
                                                                                display: "flex",
                                                                                justifyContent: "center",
                                                                                alignItems: "center",
                                                                                marginBottom: "15px",
                                                                        }}
                                                                >
                                                                        <img
                                                                                src={item.icon}
                                                                                alt={item.title}
                                                                                style={{
                                                                                        height: "40px",
                                                                                        width: "auto",
                                                                                        objectFit: "contain",
                                                                                }}
                                                                        />
                                                                </div>

                                                                <div
                                                                        style={{
                                                                                fontFamily: "'Montserrat', sans-serif",
                                                                                fontWeight: "600",
                                                                                color: "#333333",
                                                                                fontSize: "18px",
                                                                                marginBottom: "6px",
                                                                        }}
                                                                >
                                                                        {item.title}
                                                                </div>

                                                                <p
                                                                        style={{
                                                                                fontFamily: "'Montserrat', sans-serif",
                                                                                fontSize: "15px",
                                                                                lineHeight: "1.2",
                                                                                color: "#555555",
                                                                                margin: "0",
                                                                        }}
                                                                >
                                                                        {item.text}
                                                                </p>
                                                        </div>
                                                ))}
                                        </div>
                                </div>
                        </section>



                        {/* ✅ our services Section end here */}

                        {/* ✅ Testimonials Section */}
                        <section
                                id="testimonials"
                                style={{
                                        backgroundColor: "#f8f9fa",
                                        padding: "60px 0",
                                        fontFamily: "'Montserrat', sans-serif",
                                }}
                        >
                                <div className="container" style={{ margin: "0 auto" }}>
                                        {/* Title */}
                                        <div style={{ textAlign: "center", marginBottom: "40px" }}>
                                                <h2
                                                        style={{
                                                                fontWeight: "700",
                                                                color: "#0d6efd",
                                                                fontSize: "2rem",
                                                                marginBottom: "10px",
                                                        }}
                                                >
                                                        What Our Customers Say
                                                </h2>
                                                <p style={{ color: "#6c757d", fontSize: "1rem", margin: 0 }}>
                                                        Our happy clients’ experiences inspire us every day
                                                </p>
                                        </div>

                                        {/* Sliding Testimonials */}
                                        <div
                                                style={{
                                                        overflow: "hidden",
                                                        width: "100%",
                                                        position: "relative",
                                                }}
                                        >
                                                <div
                                                        style={{
                                                                display: "flex",
                                                                gap: "20px",
                                                                // Sliding animation
                                                                animation: "slide 20s linear infinite",
                                                        }}
                                                >
                                                        {[
                                                                {
                                                                        name: "Amit Kumar",
                                                                        role: "Homeowner",
                                                                        img: "/img/avatars/avatar 1.jpeg",
                                                                        text: "Saini Refrigeration repaired my AC within an hour. Super quick and professional service!",
                                                                },
                                                                {
                                                                        name: "Priya Sharma",
                                                                        role: "Business Owner",
                                                                        img: "/img/avatars/avatar 2.webp",
                                                                        text: "Their refrigerator maintenance team is amazing. Reliable and affordable.",
                                                                },
                                                                {
                                                                        name: "Vikram Singh",
                                                                        role: "Resident, Neemrana",
                                                                        img: "/img/avatars/avatar 3.png",
                                                                        text: "Got my water purifier serviced — the technician was polite and explained everything clearly.",
                                                                },
                                                                {
                                                                        name: "Neha Verma",
                                                                        role: "Apartment Owner",
                                                                        img: "/img/avatars/avatar 1.jpeg",
                                                                        text: "Excellent service quality and on-time support. Highly recommended!",
                                                                },
                                                                {
                                                                        name: "Ravi Mehta",
                                                                        role: "Office Manager",
                                                                        img: "/img/avatars/avatar 2.jpeg",
                                                                        text: "They installed new AC units at our office — smooth process and great after-service.",
                                                                },
                                                                // Duplicate items for seamless loop
                                                        ].concat([
                                                                {
                                                                        name: "Amit Kumar",
                                                                        role: "Homeowner",
                                                                        img: "/img/avatars/avatar 1.jpeg",
                                                                        text: "Saini Refrigeration repaired my AC within an hour. Super quick and professional service!",
                                                                },
                                                                {
                                                                        name: "Priya Sharma",
                                                                        role: "Business Owner",
                                                                        img: "/img/avatars/avatar 2.webp",
                                                                        text: "Their refrigerator maintenance team is amazing. Reliable and affordable.",
                                                                },
                                                                {
                                                                        name: "Vikram Singh",
                                                                        role: "Resident, Neemrana",
                                                                        img: "/img/avatars/avatar 3.png",
                                                                        text: "Got my water purifier serviced — the technician was polite and explained everything clearly.",
                                                                },
                                                                {
                                                                        name: "Neha Verma",
                                                                        role: "Apartment Owner",
                                                                        img: "/img/avatars/avatar 1.jpeg",
                                                                        text: "Excellent service quality and on-time support. Highly recommended!",
                                                                },
                                                                {
                                                                        name: "Ravi Mehta",
                                                                        role: "Office Manager",
                                                                        img: "/img/avatars/avatar 2.jpeg",
                                                                        text: "They installed new AC units at our office — smooth process and great after-service.",
                                                                },
                                                        ]).map((t, index) => (
                                                                <div
                                                                        key={index}
                                                                        style={{
                                                                                flex: "0 0 300px",
                                                                                backgroundColor: "#ffffff",
                                                                                borderRadius: "12px",
                                                                                boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
                                                                                textAlign: "center",
                                                                                padding: "25px 20px",
                                                                        }}
                                                                >
                                                                        <div
                                                                                style={{
                                                                                        display: "flex",
                                                                                        justifyContent: "center",
                                                                                        marginBottom: "15px",
                                                                                }}
                                                                        >
                                                                                <img
                                                                                        src={t.img}
                                                                                        alt={t.name}
                                                                                        style={{
                                                                                                width: "80px",
                                                                                                height: "80px",
                                                                                                borderRadius: "50%",
                                                                                                objectFit: "cover",
                                                                                                marginBottom: "10px",
                                                                                        }}
                                                                                />
                                                                        </div>
                                                                        <p
                                                                                style={{
                                                                                        color: "#6c757d",
                                                                                        fontStyle: "italic",
                                                                                        fontSize: "15px",
                                                                                        lineHeight: "1.6",
                                                                                        marginBottom: "15px",
                                                                                }}
                                                                        >
                                                                                "{t.text}"
                                                                        </p>
                                                                        <h6
                                                                                style={{
                                                                                        fontWeight: "600",
                                                                                        color: "#0d6efd",
                                                                                        marginBottom: "4px",
                                                                                }}
                                                                        >
                                                                                {t.name}
                                                                        </h6>
                                                                        <small style={{ color: "#6c757d" }}>{t.role}</small>
                                                                </div>
                                                        ))}
                                                </div>
                                        </div>

                                        {/* Inline Keyframes for sliding */}
                                        <style>
                                                {`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}
                                        </style>
                                </div>
                        </section>





                        {/* ✅ last  Section */}

                        <section
                                id="our-services"
                                style={{ padding: "60px 0", backgroundColor: "#f8f8f8" }}
                        >
                                <div className="container">
                                        <div
                                                style={{
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                        justifyContent: "space-between",
                                                        textAlign: "center",
                                                        gap: "20px",
                                                }}
                                        >
                                                {/* Card 1 */}
                                                <div
                                                        style={{
                                                                flex: "1 1 22%",
                                                                minWidth: "250px",
                                                                backgroundColor: "#fff",
                                                                padding: "30px 20px",
                                                                borderRadius: "10px",
                                                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                                                transition: "transform 0.3s",
                                                        }}
                                                >
                                                        <div
                                                                style={{
                                                                        fontSize: "40px",
                                                                        color: "#074699",
                                                                        marginBottom: "15px",
                                                                }}
                                                        >
                                                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                                                        <img src="/img/professionals.webp" alt="professionals" style={{ height: "40px" }} />
                                                                </div>
                                                        </div>
                                                        <div
                                                                style={{
                                                                        fontFamily: "'Montserrat', sans-serif",
                                                                        fontWeight: 600,
                                                                        color: "#333",
                                                                        fontSize: "20px",
                                                                }}
                                                        >
                                                                Verified Professionals
                                                        </div>
                                                </div>

                                                {/* Card 2 */}
                                                <div
                                                        style={{
                                                                flex: "1 1 22%",
                                                                minWidth: "250px",
                                                                backgroundColor: "#fff",
                                                                padding: "30px 20px",
                                                                borderRadius: "10px",
                                                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                                                transition: "transform 0.3s",
                                                        }}
                                                >
                                                        <div
                                                                style={{
                                                                        fontSize: "40px",
                                                                        color: "#074699",
                                                                        marginBottom: "15px",
                                                                }}
                                                        >
                                                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>

                                                                        <img src="/img/insured work.avif" alt="professionals" style={{ height: "40px" }} />
                                                                </div>
                                                        </div>
                                                        <div
                                                                style={{
                                                                        fontFamily: "'Montserrat', sans-serif",
                                                                        fontWeight: 600,
                                                                        color: "#333",
                                                                        fontSize: "20px",
                                                                }}
                                                        >
                                                                Insured Work
                                                        </div>
                                                </div>

                                                {/* Card 3 */}
                                                <div
                                                        style={{
                                                                flex: "1 1 22%",
                                                                minWidth: "250px",
                                                                backgroundColor: "#fff",
                                                                padding: "30px 20px",
                                                                borderRadius: "10px",
                                                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                                                transition: "transform 0.3s",
                                                        }}
                                                >
                                                        <div
                                                                style={{
                                                                        fontSize: "40px",
                                                                        color: "#074699",
                                                                        marginBottom: "15px",
                                                                }}
                                                        >
                                                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                                                        <img src="/img/Satisfaction.jpg" alt="professionals" style={{ height: "40px" }} />
                                                                </div>
                                                        </div>
                                                        <div
                                                                style={{
                                                                        fontFamily: "'Montserrat', sans-serif",
                                                                        fontWeight: 600,
                                                                        color: "#333",
                                                                        fontSize: "20px",
                                                                }}
                                                        >
                                                                Satisfaction Guaranteed
                                                        </div>
                                                </div>

                                                {/* Card 4 */}
                                                <div
                                                        style={{
                                                                flex: "1 1 22%",
                                                                minWidth: "250px",
                                                                backgroundColor: "#fff",
                                                                padding: "30px 20px",
                                                                borderRadius: "10px",
                                                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                                                transition: "transform 0.3s",
                                                        }}
                                                >
                                                        <div
                                                                style={{
                                                                        fontSize: "40px",
                                                                        color: "#074699",
                                                                        marginBottom: "15px",
                                                                }}
                                                        >
                                                                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>

                                                                        <img src="/img/Payment.png" alt="professionals" style={{ height: "40px" }} />
                                                                </div>
                                                        </div>
                                                        <div
                                                                style={{
                                                                        fontFamily: "'Montserrat', sans-serif",
                                                                        fontWeight: 600,
                                                                        color: "#333",
                                                                        fontSize: "20px",
                                                                }}
                                                        >
                                                                Easy Payment
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </section>


                        {/* Testimonials Section end */}

                        {/* ✅ Contact Section */}
                        <section
                                id="contact"
                                style={{
                                        padding: "60px 0",
                                        backgroundColor: "#ffffff",
                                        fontFamily: "'Montserrat', sans-serif",
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
}

export default Home;
