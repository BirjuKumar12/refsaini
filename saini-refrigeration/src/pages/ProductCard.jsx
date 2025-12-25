import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCart } from "../components/CartContext";
import { useAuth } from "../components/AuthContext";



const ProductCard = ({
        item
}) => {
        const { id } = useParams();
        const { addToCart, cart, removeFromCart } = useCart();
        const { user } = useAuth();
        const navigate = useNavigate();

        // Check if item is already in cart
        const isInCart = cart.some(cartItem => cartItem.name === item.name);

        // Handle cart button click
        const handleCartClick = (e) => {
                if (e) e.preventDefault();
                if (isInCart) {
                        removeFromCart(item.name);
                } else {
                        addToCart(item);
                }
        };

        const handleBuyNow = (e) => {
                if (e) e.preventDefault();

                if (!user) {
                        alert("Please login first to buy items!");
                        navigate('/login');
                        return;
                }

                if (!isInCart) {
                        addToCart(item);
                }
                navigate('/checkout');
        };

        return (
                <>
                        <div
                                key={item.id}
                                style={{
                                        // flex: "1 1 calc(25% - 20px)",
                                        width: "300px",
                                        backgroundColor: "#ffffff",
                                        justifyItems: "center",
                                        textAlign: "center",
                                        borderRadius: "12px",
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
                                        transition: "transform 0.3s, box-shadow 0.3s",
                                }}
                                onMouseEnter={(e) => {
                                        e.currentTarget.style.border = "1px solid cyan"
                                        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";
                                }}
                                onMouseLeave={(e) => {
                                        e.currentTarget.style.border = "0"
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.05)";
                                }}
                        >
                                {/* Product Image */}
                                <Link to={`./${item.name}`}
                                        style={{ textDecoration: "none", }}>
                                        <div
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
                                                                objectFit: "cover",
                                                                height: "100%",
                                                                width: "100%",
                                                                // overflow:"hidden",
                                                                borderTopLeftRadius: "12px",
                                                                borderTopRightRadius: "12px",
                                                                background: "red"
                                                        }}
                                                />

                                        </div>
                                </Link>
                                {/* Product Details */}
                                <div className="flex flex-col items-center justify-center" style={{ padding: "15px" }}>
                                        <Link to={`./${item.name}`}
                                                style={{ textDecoration: "none", }}>
                                                <h4
                                                        style={{
                                                                fontWeight: "600",
                                                                color: "#212529",
                                                                marginBottom: "8px",
                                                                fontFamily: "'Montserrat', sans-serif",
                                                                height: "2.5em",
                                                                overflow: "hidden",
                                                        }}
                                                >
                                                        {item.name}
                                                </h4>
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
                                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
                                                <button
                                                        onClick={handleCartClick}
                                                        style={{
                                                                backgroundColor: isInCart ? "#28a745" : "#0d6efd",
                                                                color: "#ffffff",
                                                                border: "none",
                                                                padding: "8px 16px",
                                                                borderRadius: "50px",
                                                                fontSize: "14px",
                                                                cursor: "pointer",
                                                                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                                                                opacity: isInCart ? 0.8 : 1,
                                                        }}
                                                >
                                                        {isInCart ? "✅ Added" : "🛒 Add to Cart"}
                                                </button>
                                                <button
                                                        onClick={handleBuyNow}
                                                        style={{
                                                                backgroundColor: "#fb641b",
                                                                color: "#ffffff",
                                                                border: "none",
                                                                padding: "8px 20px",
                                                                borderRadius: "50px",
                                                                fontSize: "14px",
                                                                fontWeight: "600",
                                                                cursor: "pointer",
                                                                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                                                        }}
                                                        onMouseEnter={(e) => e.target.style.backgroundColor = "#e65a12"}
                                                        onMouseLeave={(e) => e.target.style.backgroundColor = "#fb641b"}
                                                >
                                                        ⚡ Buy Now
                                                </button>
                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default ProductCard;
