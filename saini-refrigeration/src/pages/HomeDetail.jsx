import { useParams, useNavigate } from "react-router-dom"
import { latest, our, best, service } from "../components/Home.js"
import { useState, useEffect } from "react";
import { useCart } from "../components/CartContext";
import { useAuth } from "../components/AuthContext";

const HomeDetail = () => {
        const { id } = useParams();
        const navigate = useNavigate();
        const { addToCart, cart, removeFromCart } = useCart();
        const { user } = useAuth();
        const decodedId = decodeURIComponent(id);

        const [data, setData] = useState(null)
        const [product, setProduct] = useState(null)

        useEffect(() => {
                if (data == null) {
                        setData([...latest, ...our, ...best, ...service])

                }

                console.log("data =", data);

        }, [data]);

        useEffect(() => {
                if (data) {
                        const filteredProduct = data.filter((e) => e.name == decodedId);
                        setProduct(filteredProduct.length != null ? filteredProduct : null);
                }
        }, [data, decodedId]);

        useEffect(() => {
                console.log("product =", product);
        }, [product]);

        return (
                <>
                        {(product != null) &&
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
                                                                                src={product[0]?.img} alt={product[0]?.img}
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
                                                                                {product[0]?.name}
                                                                        </h2>
                                                                        <p style={{ color: "#6c757d", marginBottom: "30px", fontSize: "1rem" }}>
                                                                                Have questions or need our service? Fill out the form below, and our team will contact you shortly.
                                                                        </p>

                                                                        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                                                                                <div
                                                                                        style={{
                                                                                                fontSize: "1rem",
                                                                                                outline: "none",
                                                                                        }}
                                                                                >
                                                                                        {product[0]?.text}

                                                                                </div>

                                                                                <div
                                                                                        style={{
                                                                                                fontSize: "1rem",
                                                                                                outline: "none",
                                                                                                display: "flex",
                                                                                                gap: "5px"
                                                                                        }}
                                                                                >
                                                                                        {product[0]?.star >= 1 && <img src="/img/Star.webp" alt="" style={{ width: "20px" }} />}
                                                                                        {product[0]?.star >= 2 && <img src="/img/Star.webp" alt="" style={{ width: "20px" }} />}
                                                                                        {product[0]?.star >= 3 && <img src="/img/Star.webp" alt="" style={{ width: "20px" }} />}
                                                                                        {product[0]?.star >= 4 && <img src="/img/Star.webp" alt="" style={{ width: "20px" }} />}
                                                                                        {product[0]?.star >= 5 && <img src="/img/Star.webp" alt="" style={{ width: "20px" }} />}

                                                                                </div>
                                                                                <div
                                                                                        style={{
                                                                                                fontSize: "1rem",
                                                                                                outline: "none",
                                                                                        }}
                                                                                >
                                                                                        Rating: {product[0]?.star}/5
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
                                                                                        {product[0]?.description}

                                                                                </div>

                                                                                <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                                                                                        <button
                                                                                                onClick={() => {
                                                                                                        const isInCart = cart.some(item => item.name === product[0].name);
                                                                                                        if (isInCart) {
                                                                                                                removeFromCart(product[0].name);
                                                                                                        } else {
                                                                                                                addToCart(product[0]);
                                                                                                        }
                                                                                                }}
                                                                                                style={{
                                                                                                        backgroundColor: cart.some(item => item.name === product[0]?.name) ? "#28a745" : "#0d6efd",
                                                                                                        color: "#ffffff",
                                                                                                        border: "none",
                                                                                                        padding: "12px 25px",
                                                                                                        borderRadius: "50px",
                                                                                                        fontSize: "1rem",
                                                                                                        fontWeight: "600",
                                                                                                        cursor: "pointer",
                                                                                                        transition: "all 0.3s",
                                                                                                }}
                                                                                        >
                                                                                                {cart.some(item => item.name === product[0]?.name) ? "✅ In Cart" : "🛒 Add to Cart"}
                                                                                        </button>
                                                                                        <button
                                                                                                onClick={() => {
                                                                                                        if (!user) {
                                                                                                                alert("Please login first to buy!");
                                                                                                                navigate('/login');
                                                                                                                return;
                                                                                                        }
                                                                                                        const isInCart = cart.some(item => item.name === product[0].name);
                                                                                                        if (!isInCart) {
                                                                                                                addToCart(product[0]);
                                                                                                        }
                                                                                                        navigate('/checkout');
                                                                                                }}
                                                                                                style={{
                                                                                                        backgroundColor: "#ffda1f",
                                                                                                        color: "#212529",
                                                                                                        border: "none",
                                                                                                        padding: "12px 30px",
                                                                                                        borderRadius: "50px",
                                                                                                        fontSize: "1rem",
                                                                                                        fontWeight: "700",
                                                                                                        cursor: "pointer",
                                                                                                        transition: "all 0.3s",
                                                                                                }}
                                                                                        >
                                                                                                ⚡ Buy Now
                                                                                        </button>
                                                                                </div>


                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>

                                        </section>
                                </div>
                        }
                </>

        );
};

export default HomeDetail;
