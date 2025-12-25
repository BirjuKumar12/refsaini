import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServicesCard from "./ServicesCard";


const Wcservices = () => {
        const [services, setServices] = useState([]);

        useEffect(() => {
                fetch('http://localhost:5001/api/services')
                        .then(res => res.json())
                        .then(data => {
                                if (data.success) {
                                        const wcServices = data.services.filter(s => s.category === 'Water Cooler Services');
                                        setServices(wcServices);
                                }
                        })
                        .catch(err => console.error("Error fetching water cooler services:", err));
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
                                                                Water cooler Services
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
                                                                We are dedicated to keeping your water cooler operating efficiently and reliably with our trusted installation, repair, and maintenance solutions.
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
                                                <div className="pt-[40px]">
                                                        <h2>We are dedicated to keeping your water cooler functioning efficiently and reliably with our trusted installation, repair, and maintenance solutions for all capacities—40/40, 40/60, 60/80, 80/100, 100/120, and 120/150 liters.</h2>

                                                        <h6 className="pt-[30px]">We offer complete water cooler and hydration system solutions for domestic, commercial, and industrial clients. Our services cover all major water cooler variants, including 40/40 L, 40/60 L, 60/80 L, 80/100 L, 100/120 L, and 120/150 L capacities. From installation to repair and maintenance, we handle every type of water cooling system with expert care and precision.
                                                        </h6>
                                                </div>
                                        </div>

                                </div>

                        </section>

                </>
        )
}

export default Wcservices;
