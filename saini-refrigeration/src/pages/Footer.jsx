import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
        return (
                <footer
                        id="footer"
                        style={{
                                backgroundColor: "#1a1a1a",
                                color: "white",
                                fontFamily: "'Montserrat', sans-serif",
                        }}
                >
                        {/* Top Footer */}
                        <div
                                style={{
                                        padding: "60px 0 30px",
                                        backgroundColor: "#1a1a1a",
                                }}
                        >
                                <div
                                        style={{
                                                maxWidth: "1200px",
                                                margin: "0 auto",
                                                padding: "0 15px",
                                        }}
                                >
                                        <div
                                                style={{
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                        justifyContent: "space-between",
                                                        gap: "30px",
                                                }}
                                        >
                                                {/* Quick Links */}
                                                <div style={{ flex: "1 1 40%", minWidth: "350px" }}>
                                                        <h3 style={{ color: "#fff", fontSize: "20px" }}>Quick Links</h3>
                                                        <div
                                                                style={{
                                                                        display: "flex",
                                                                        justifyContent: "space-between",
                                                                        
                                                                }}
                                                        >
                                                                <ul style={{ listStyle: "none", padding: 0 }} className="flex-1">
                                                                        <li><a href="index-2.html" style={{ color: "#ccc", textDecoration: "none" }}>Home</a></li>
                                                                        <li><a href="about.html" style={{ color: "#ccc", textDecoration: "none" }}>About</a></li>
                                                                        <li><a href="contact.html" style={{ color: "#ccc", textDecoration: "none" }}>Contact</a></li>
                                                                        <li><a href="career.html" style={{ color: "#ccc", textDecoration: "none" }}>Career</a></li>
                                                                        <li><a href="privacy-policy.html" style={{ color: "#ccc", textDecoration: "none" }}>Privacy Policy</a></li>
                                                                </ul>

                                                                <ul style={{ listStyle: "none", padding: 0 }} className="flex-2">
                                                                        <li><a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Seller Zone</a></li>
                                                                        <li><a href="blog.html" style={{ color: "#ccc", textDecoration: "none" }}>Become A Seller</a></li>
                                                                        <li className="p-[3px] bg-white flex flex-row justify-evenly ">
                                                                                <span><img src="/img/Visa.png" alt="" className="h-[50px]" /></span>
                                                                                <span><img src="/img/Rupay.png" alt="" className="h-[50px]" /></span>
                                                                                <span><img src="/img/Upi.png" alt="" className="h-[50px]" /></span>
                                                                                <span><img src="/img/Banking.png" alt="" className="h-[50px]" /></span>
                                                                        </li>
                                                                        <li className=" flex flex-row pt-4">
                                                                                <a href="blog.html" style={{ color: "#ccc", textDecoration: "none" }}><img src="/img/playStore.png" alt="" className="h-[50px]" /></a>
                                                                                <a href="blog.html" style={{ color: "#ccc", textDecoration: "none" }}><img src="/img/appStore.png" alt="" className="h-[50px] p-2" /></a>
                                                                        </li>
                                                                </ul>
                                                        </div>
                                                </div>

                                                {/* Our Services */}
                                                <div style={{ flex: "1 1 15%",}}>
                                                        <h3 style={{ color: "#fff", fontSize: "20px" }}>Our Services</h3>
                                                        <div
                                                                style={{
                                                                
                                                                }}
                                                        >
                                                                <Link to="/Ac Services" style={{ color: "#ccc", textDecoration: "none", fontSize: "14px", display: "block", padding: "4px 0", hover: { color: "#fff" } }}>AC Services</Link>
                                                                <Link to="/Refrigerator Services" style={{ color: "#ccc", textDecoration: "none", fontSize: "14px", display: "block", padding: "4px 0", hover: { color: "#fff" } }}>Refrigerator Services</Link>
                                                                <Link to="/Water cooler Services" style={{ color: "#ccc", textDecoration: "none", fontSize: "14px", display: "block", padding: "4px 0", hover: { color: "#fff" } }}>Water Cooler Services</Link>
                                                                <Link to="/Washing machine Services" style={{ color: "#ccc", textDecoration: "none", fontSize: "14px", display: "block", padding: "4px 0", hover: { color: "#fff" } }}>Washing Machine Services</Link>
                                                                {/* <span style={{ color: "#ccc", fontSize: "14px", display: "block", padding: "4px 0" }}>AC Maintenance</span>
                                                                <span style={{ color: "#ccc", fontSize: "14px", display: "block", padding: "4px 0" }}>Refrigerator Maintenance</span>
                                                                <span style={{ color: "#ccc", fontSize: "14px", display: "block", padding: "4px 0" }}>Gas Refilling</span>
                                                                <span style={{ color: "#ccc", fontSize: "14px", display: "block", padding: "4px 0" }}>Annual Service Contracts</span> */}
                                                        </div>
                                                </div>

                                                {/* Subscribe Section */}<div style={{ flex: "1 1 15%", minWidth: "100px", height:"100%" }}>
                                                        <h3 style={{ color: "gray", fontSize: "20px" }}>
                                                                Privacy policy
                                                        </h3>
                                                        <div style={{paddingTop:"10px"}}>
                                                                {/* <div  style={{ color: "gray",}}>
                                                                        Address
                                                                </div> */}
                                                                <div>
                                                                        <Link to="/Terms-Conditions" style={{color:"gray", textDecoration:"none"}}>Terms & Conditions</Link>
                                                                </div>
                                                        </div>
                                                        <div  style={{paddingTop:"10px"}}>
                                                                {/* <div  style={{ color: "gray",}}>
                                                                        Phone
                                                                </div> */}
                                                                <div>
                                                                        <Link to="/Shipping-Policy" style={{color:"gray", textDecoration:"none"}}>Shipping Policy</Link>
                                                                </div>
                                                        </div>
                                                        <div  style={{paddingTop:"10px"}}>
                                                                {/* <div  style={{ color: "gray",}}>
                                                                        Email
                                                                </div> */}
                                                                <div>
                                                                        <Link to="/Refund-Policy" style={{color:"gray", textDecoration:"none"}}>Refund Policy</Link>
                                                                </div>
                                                        </div>
                                                        

                                                        
                                                </div>


                                                <div style={{ flex: "1 1 20%", minWidth: "250px", height:"100%" }}> 
                                                        <div style={{paddingTop:"10px"}}>
                                                                <div  style={{ color: "gray",}}>
                                                                        Address
                                                                </div>
                                                                <div>
                                                                        123, Main Street, Your City, India
                                                                </div>
                                                        </div>
                                                        <div  style={{paddingTop:"10px"}}>
                                                                <div  style={{ color: "gray",}}>
                                                                        Phone
                                                                </div>
                                                                <div>
                                                                        7891346525
                                                                </div>
                                                        </div>
                                                        <div  style={{paddingTop:"10px"}}>
                                                                <div  style={{ color: "gray",}}>
                                                                        Email
                                                                </div>
                                                                <div>
                                                                        +91 98765 43210
                                                                </div>
                                                        </div>
                                                        

                                                        
                                                </div>
                                        </div>

                                        {/* Social Links */}
                                        <div
                                                style={{
                                                        textAlign: "center",
                                                        marginTop: "40px",
                                                }}
                                        >
                                                <ul
                                                        style={{
                                                                listStyle: "none",
                                                                display: "inline-flex",
                                                                gap: "15px",
                                                                padding: 0,
                                                        }}
                                                >
                                                        <li><a href="https://www.facebook.com/" style={{ color: "white", fontSize: "15px" }}>
                                                                <img src="/img/Facebook.png" alt="Facebook" style={{height:"50px"}}/>
                                                         </a></li>
                                                        <li><a href="https://www.twitter.com/" style={{ color: "white", fontSize: "15px" }}>
                                                                <img src="/img/Twitter.png" alt="Twitter" style={{height:"50px", borderRadius:"50px"}}/>
                                                        </a></li>
                                                        <li><a href="https://www.youtube.com/" style={{ color: "white", fontSize: "15px" }}>
                                                                <img src="/img/YouTube.png" alt="YouTube" style={{height:"50px"}}/>
                                                        </a></li>
                                                        <li><a href="https://www.linkedin.com/" style={{ color: "white", fontSize: "15px" }}>
                                                                <img src="/img/LinkedIn.png" alt="LinkedIn" style={{height:"50px"}}/>
                                                        </a></li>
                                                        <li><a href="https://www.instagram.com/" style={{ color: "white", fontSize: "15px" }}>
                                                                <img src="/img/instagram.png" alt="instagram" style={{height:"50px"}}/>
                                                        </a></li>
                                                </ul>
                                        </div>
                                </div>
                        </div>

                        {/* Copyright */}
                        <div
                                style={{
                                        backgroundColor: "#074699",
                                        textAlign: "center",
                                        padding: "15px 0",
                                        fontSize: "14px",
                                }}
                        >
                                Copyright © 2025 sainiRefrigeration.in. All Rights Reserved.
                        </div>
                </footer>
        );
};

export default Footer;
