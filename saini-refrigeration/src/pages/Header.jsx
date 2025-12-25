import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useCart } from "../components/CartContext";
import { useAuth } from "../components/AuthContext";

const Header = () => {
        const { getCartCount } = useCart();
        const { user, logout } = useAuth();
        const cartCount = getCartCount();

        return (
                <>
                        <div style={{ display: "flex", flexDirection: "column", position: "fixed", top: "0", zIndex: "999", width: "100vw", background: "white", }}>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "end", gap: "2vw", maxHeight: "30px", width: "100%" }} className="text-[1.2vh]">
                                        {/* <div> .</div> */}
                                        <div >Helpline 18008898529</div>
                                        <div>Login to Seller</div>
                                        <div style={{ paddingRight: "2vw" }}>Become a Seller !</div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "1.2vw", height: "40px", width: "100%", alignItems: "center", paddingBottom: "5px", paddingTop: "12px" }}>
                                        <div  ><img src="/img/logo/logo.png" style={{ height: "95px" }} className="min-w-[15vw] max-w-[29vw]" /></div>
                                        <div style={{ paddingLeft: "2vw", paddingRight: "2vw" }} className=" flex flex-row justify-center items-center"><input type="search" name="" id="" placeholder="Search Product, Category, Brand" style={{ width: "27vw", borderRadius: "10px", padding: "5px", paddingLeft: "1vw", border: "1px solid gray", }} /></div>
                                        {/* <div ><img src="/img/icon/logo.png" style={{ height: "25px", }} className="max-w-[6vw] " /></div> */}

                                        {user ? (
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                        <span style={{ fontSize: '14px', fontWeight: '600' }}>Hi, {user.name.split(' ')[0]}</span>
                                                        <button
                                                                onClick={logout}
                                                                style={{
                                                                        background: 'none',
                                                                        border: '1px solid #dc3545',
                                                                        borderRadius: '20px',
                                                                        color: '#dc3545',
                                                                        padding: '2px 10px',
                                                                        cursor: 'pointer',
                                                                        fontSize: '12px',
                                                                        fontWeight: '600'
                                                                }}
                                                        >
                                                                Logout
                                                        </button>
                                                </div>
                                        ) : (
                                                <>
                                                        <NavLink to="/login" className=" cursor-pointer  text-black rounded-full text-center font-semibold text-[1.6vh] mr-[1vw]" style={{ maxWidth: "7vw", textDecoration: "none", }}> Login</NavLink>
                                                        <NavLink to="/Register" style={{ maxWidth: "12vw", textDecoration: "none", textAlign: "right", marginLeft: "1vw" }} className=" cursor-pointer   rounded-full text-center font-semibold text-[1.6vh] text-black hover:text-blue-500 ">Register</NavLink>
                                                </>
                                        )}
                                        <NavLink to="/cart" style={{ position: 'relative', textDecoration: 'none' }}>
                                                <img src="/img/Cart.png" alt="" className=" ml-[1vw] h-[40px]" />
                                                {cartCount > 0 && (
                                                        <span style={{
                                                                position: 'absolute',
                                                                top: '-5px',
                                                                right: '-5px',
                                                                backgroundColor: 'red',
                                                                color: 'white',
                                                                borderRadius: '50%',
                                                                padding: '2px 6px',
                                                                fontSize: '12px',
                                                                fontWeight: 'bold',
                                                                minWidth: '18px',
                                                                textAlign: 'center'
                                                        }}>
                                                                {cartCount}
                                                        </span>
                                                )}
                                        </NavLink>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "2vw", width: "100vw", padding: "1px ", alignItems: "center", marginTop: "1vh", }} className="bg-gray-400 font-semibold pr-[2vw]">

                                        <div className=" flex flex-row justify-center items-center gap-[2vw] min-mr-[4vw]  mx-[20vw]" >
                                                <NavLink to="/" style={{ textDecoration: 'none', color: "black", }} className="text-[2.1vh] ">Home</NavLink>
                                                <NavLink to="/about" style={{ textDecoration: 'none', color: "black" }} className="text-[2.1vh]">About</NavLink>
                                                <NavLink to="/product" style={{ textDecoration: 'none', color: "black" }} className="text-[2.1vh]">Product</NavLink>
                                                <NavLink to="/contact" style={{ textDecoration: 'none', color: "black" }} className="text-[2.1vh]"> Contact</NavLink>
                                                {/* <details style={{ border: "1px solid #ccc", borderRadius: "5px", position: "relative", }}> */}
                                                <details style={{ border: "1px solid #ccc", borderRadius: "5px" }} >
                                                        <summary style={{ padding: "2px", color: "black", cursor: "pointer" }} className="rounded-lg border-1 border-gray-600 text-[2.3vh]">
                                                                Categories
                                                        </summary>
                                                        <div style={{ position: "absolute", }} className="bg-gray-200 border-1 border-gray-500 rounded-lg ">
                                                                <div style={{ borderTop: "1px solid gray", padding: "1vh " }}><NavLink to="/Ac Services" className="text-black " style={{ cursor: "pointer", textDecoration: "none" }}>Ac Services</NavLink></div>
                                                                <div style={{ borderTop: "1px solid gray", padding: "1vh " }}><NavLink to="/Refrigerator Services" className="text-black " style={{ cursor: "pointer", textDecoration: "none" }}>Refrigerator Services</NavLink></div>
                                                                {/* <div style={{ padding: "1vh", cursor: "pointer", borderTop: "1px solid gray", }}>Refrigerator Services</div>
                                                                <div style={{ padding: "1vh", cursor: "pointer", borderTop: "1px solid gray", }}>Washing Machine Services</div> */}
                                                                <div style={{ borderTop: "1px solid gray", padding: "1vh " }}><NavLink to="/Water cooler Services" className="text-black " style={{ cursor: "pointer", textDecoration: "none" }}>Water Cooler Services</NavLink></div>
                                                                <div style={{ borderTop: "1px solid gray", padding: "1vh " }}><NavLink to="/Washing machine Services" className="text-black " style={{ cursor: "pointer", textDecoration: "none" }}>Washing machine Services</NavLink></div>
                                                                <div style={{ borderTop: "1px solid gray", padding: "1vh " }}><NavLink to="/Geyser Services" className="text-black " style={{ cursor: "pointer", textDecoration: "none" }}>Geyser Services</NavLink></div>
                                                                <div style={{ borderTop: "1px solid gray", padding: "1vh " }}><NavLink to="/Ro Services" className="text-black " style={{ cursor: "pointer", textDecoration: "none" }}>Ro Services</NavLink></div>

                                                                {/* <div style={{ padding: "1vh", cursor: "pointer", borderTop: "1px solid gray", }}>Water Cooler Services</div> */}

                                                        </div>
                                                </details>

                                                {user && (
                                                        <NavLink to="/order-history" style={{ textDecoration: 'none', color: "black" }} className="text-[2.1vh]">My Orders</NavLink>
                                                )}
                                        </div>
                                </div>

                        </div>
                </>
        )
}

export default Header;
