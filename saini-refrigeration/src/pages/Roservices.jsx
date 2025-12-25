
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServicesCard from "./ServicesCard"


const Roservices = () => {
        const [services, setServices] = useState([]);

        useEffect(() => {
                fetch('http://localhost:5001/api/services')
                        .then(res => res.json())
                        .then(data => {
                                if (data.success) {
                                        const roServices = data.services.filter(s => s.category === 'Ro Services');
                                        setServices(roServices);
                                }
                        })
                        .catch(err => console.error("Error fetching RO services:", err));
        }, []);

        return (
                <>
                        <section
                                id="how-works"
                                style={{
                                        backgroundColor: "#ffffff",
                                        padding: "140px 0px ",
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
                                                                Ro Services
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
                                                                We are dedicated to keeping your RO water purifier running clean and reliably with our expert installation, repair, and maintenance services.
                                                        </p>
                                                </div>
                                        </div>

                                        <div
                                                style={{
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                        justifyContent: "start",
                                                        textAlign: "center",
                                                        gap: "20px",
                                                }}
                                        >
                                                {services.length > 0 ? (
                                                        services.map((item, i) => (
                                                                <ServicesCard key={item._id || i} i={i} item={item} />
                                                        ))
                                                ) : (
                                                        <p>Loading services...</p>
                                                )}
                                                <div className="pt-[40px]">We are dedicated to keeping your RO water purifier performing efficiently and reliably with our trusted installation, repair, and maintenance solutions for all types—domestic, commercial, UV, UF, RO+UV+UF, and alkaline—across all major and local brands including Kent, Aquafresh, Aquaguard, Livpure, Pureit, Kenstar, Royal Blue, Havells, Aquaguard Local, Blue Star, LG, Nexus RO, G Series RO, Blue Mount, ZeroB, and many more.
                                                        <h2></h2>

                                                        <h6 className="pt-[30px]">We offer complete RO water purifier solutions for domestic, commercial, and industrial clients. Our services cover all major RO system types, including UV, UF, RO+UV, RO+UF, RO+UV+UF, and alkaline models. From installation to repair and maintenance, we handle every type of RO water purifier with expert care and precision.
                                                        </h6>
                                                </div>
                                        </div>

                                </div>

                        </section>

                </>
        )
}

export default Roservices;
