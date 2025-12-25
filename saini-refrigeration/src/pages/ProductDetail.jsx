import { useState, useEffect } from "react";
import { useCart } from "../components/CartContext";
import Notification from "../components/Notification";

const ProductDetail = () => {
        const { id } = useParams();
        const decodedId = decodeURIComponent(id);
        const { addToCart } = useCart();

        const [product, setProduct] = useState(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
                const fetchService = async () => {
                        try {
                                const response = await fetch('http://localhost:5001/api/services');
                                const data = await response.json();
                                if (data.success) {
                                        const found = data.services.find(s => s.title.trim() === decodedId);
                                        setProduct(found || null);
                                }
                        } catch (error) {
                                console.error("Error fetching service detail:", error);
                        } finally {
                                setLoading(false);
                        }
                };
                fetchService();
        }, [decodedId]);

        const handleBooking = () => {
                if (product) {
                        // Map service fields to cart expectations (name instead of title, icon instead of img)
                        const cartItem = {
                                name: product.title,
                                price: product.price || 500,
                                img: product.icon,
                                description: product.text
                        };
                        addToCart(cartItem);
                }
        };

        return (
                <>
                        {loading ? (
                                <div style={{ padding: '200px 0', textAlign: 'center' }}>Loading service details...</div>
                        ) : product ? (
                                <div className="pt-20">
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
                                                                                src={product?.icon} alt={product?.title}
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
                                                                                {product?.title}
                                                                        </h2>
                                                                        <p style={{ color: "#6c757d", marginBottom: "30px", fontSize: "1rem" }}>
                                                                                Professional service for your appliance. Book now to get expert assistance at your doorstep.
                                                                        </p>

                                                                        <div style={{ marginBottom: '20px' }}>
                                                                                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#198754' }}>
                                                                                        ₹{product?.price || 500}
                                                                                </span>
                                                                                <span style={{ marginLeft: '10px', color: '#6c757d', fontSize: '1rem' }}>
                                                                                        (Estimated Service Charge)
                                                                                </span>
                                                                        </div>

                                                                        <button
                                                                                onClick={handleBooking}
                                                                                style={{
                                                                                        backgroundColor: '#0d6efd',
                                                                                        color: 'white',
                                                                                        padding: '12px 30px',
                                                                                        border: 'none',
                                                                                        borderRadius: '30px',
                                                                                        fontSize: '1.1rem',
                                                                                        fontWeight: '600',
                                                                                        cursor: 'pointer',
                                                                                        marginBottom: '30px',
                                                                                        boxShadow: '0 4px 10px rgba(13, 110, 253, 0.3)',
                                                                                        transition: 'transform 0.2s'
                                                                                }}
                                                                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                                                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                                                        >
                                                                                Book This Service Now
                                                                        </button>

                                                                        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                                                                                <div
                                                                                        style={{
                                                                                                fontSize: "1rem",
                                                                                                outline: "none",
                                                                                        }}
                                                                                >
                                                                                        {product?.text}

                                                                                </div>

                                                                                <div
                                                                                        style={{
                                                                                                fontSize: "1rem",
                                                                                                outline: "none",
                                                                                                display: "flex",
                                                                                                gap: "5px"
                                                                                        }}
                                                                                >
                                                                                        {[...Array(5)].map((_, i) => (
                                                                                                <img
                                                                                                        key={i}
                                                                                                        src="/img/Star.webp"
                                                                                                        alt=""
                                                                                                        style={{ width: "20px", opacity: (product?.star || 5) > i ? 1 : 0.3 }}
                                                                                                />
                                                                                        ))}

                                                                                </div>
                                                                                <div
                                                                                        style={{
                                                                                                fontSize: "1rem",
                                                                                                outline: "none",
                                                                                        }}
                                                                                >
                                                                                        Rating: {product?.star || 5}/5
                                                                                </div>
                                                                                <div
                                                                                        style={{
                                                                                                fontSize: "1.5rem",
                                                                                                outline: "none",
                                                                                        }}
                                                                                >
                                                                                        Description

                                                                                </div>
                                                                                <div
                                                                                        style={{
                                                                                                fontSize: "1rem",
                                                                                                outline: "none",
                                                                                        }}
                                                                                >
                                                                                        {product?.description}

                                                                                </div>


                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>

                                        </section>
                                </div>
                        ) : (
                                <div style={{ padding: '200px 0', textAlign: 'center' }}>Service not found.</div>
                        )}
                        <Notification />
                </>

        );
};

export default ProductDetail;
