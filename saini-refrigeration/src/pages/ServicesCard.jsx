import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({
        i,
        item
}) => {
        const [pto, setPto] = useState(item.icon);

        return (
                <>
                        <div
                                key={i}
                                style={{
                                        // flex: "1 1 22%",
                                        width: "300px",
                                        backgroundColor: "#f9f9f9",
                                        // backgroundColor: "red",
                                        padding: "20px",
                                        borderRadius: "10px",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                        transition: "transform 0.3s, box-shadow 0.3s",

                                }}
                                onMouseEnter={(e) => {
                                        e.currentTarget.style.border = "1px solid cyan"
                                        e.currentTarget.style.transform = "translateY(-5px)";
                                        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.1)";
                                }}
                                onMouseLeave={(e) => {
                                        e.currentTarget.style.border = "0"
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.05)";
                                }}
                        >
                                <Link
                                        to={`./${item.title}`}
                                        style={{ textDecoration: "none", }}>
                                        <div
                                                style={{
                                                        fontSize: "36px",
                                                        color: "#074699",
                                                        marginBottom: "15px",
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        justifyContent: "center"
                                                }}
                                        >
                                                <img src={item.icon} alt={item.icon} style={{ height: "200px" }} />

                                        </div>
                                        <div
                                                style={{
                                                        fontFamily: "'Montserrat', sans-serif",
                                                        fontWeight: "600",
                                                        color: "#333333",
                                                        fontSize: "20px",
                                                        marginBottom: "10px",
                                                        height: "1.3em",
                                                        overflow: "hidden",

                                                }}
                                        >
                                                {item.title}
                                        </div>
                                </Link>
                                {/* <p
                                        style={{
                                                fontSize: "15px",
                                                lineHeight: "1.6",
                                                color: "#555555",
                                        
                                        }}
                                        className="h-[5em]  overflow-y-scroll"
                                >
                                        {item.text}
                                </p> */}
                                {/* <div className="flex flex-col"> */}
                                {/* The paragraph */}
                                <p
                                        style={{
                                                fontSize: "15px",
                                                lineHeight: "1.6",
                                                color: "#555555",
                                        }}
                                        className="line-clamp-4 hover:line-clamp-none focus-within:line-clamp-none transition-all duration-300 cursor-pointer"
                                        tabIndex={0}  // Makes it focusable for keyboard users
                                >
                                        {item.text} {/* Your full long text */}
                                </p>

                                {/* Beautiful fade gradient when collapsed */}
                                <div className="pointer-events-none h-4 bg-gradient-to-t from-white to-transparent opacity-100 hover:opacity-0 transition-opacity duration-300 -mt-8" />

                                {/* </div> */}

                        </div>
                </>
        )
}

export default ServicesCard;
