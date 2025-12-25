import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServicesCard from "./ServicesCard"


const Wmservices = () => {
        const [services, setServices] = useState([]);

        useEffect(() => {
                fetch('http://localhost:5001/api/services')
                        .then(res => res.json())
                        .then(data => {
                                if (data.success) {
                                        const wmServices = data.services.filter(s => s.category === 'Washing machine Services');
                                        setServices(wmServices);
                                }
                        })
                        .catch(err => console.error("Error fetching washing machine services:", err));
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
                                                                Washing machine Services
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
                                                                We are dedicated to keeping your washing machine running smoothly and dependably with our expert installation, repair, and maintenance services.
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
                                                <div className="pt-[40px]">We are dedicated to keeping your washing machine performing efficiently and reliably with our trusted installation, repair, and maintenance solutions for all types—semi-automatic, top-load fully automatic, and front-load fully automatic—across all major brands including LG, Samsung, Videocon, Godrej, Whirlpool, IFB, and Voltas.
                                                        <h2></h2>

                                                        <h6 className="pt-[30px]">We offer complete washing machine solutions for domestic, commercial, and industrial clients. Our services cover all major washing machine types, including semi-automatic, top-load fully automatic, and front-load fully automatic models. From installation to repair and maintenance, we handle every type of washing machine with expert care and precision.
                                                        </h6>
                                                </div>
                                        </div>

                                </div>

                        </section>

                </>
        )
}

export default Wmservices;
