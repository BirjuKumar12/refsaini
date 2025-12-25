import ServicesCard from "./ServicesCard";
import { useState, useEffect } from "react";

const GeyserServices = () => {
        const [services, setServices] = useState([]);

        useEffect(() => {
                fetch('http://localhost:5001/api/services')
                        .then(res => res.json())
                        .then(data => {
                                if (data.success) {
                                        const geyserServices = data.services.filter(s => s.category === 'Geyser Services');
                                        setServices(geyserServices);
                                }
                        })
                        .catch(err => console.error("Error fetching geyser services:", err));
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
                                                        justifyContent: "space-between",
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
                                                                Geyser Services
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
                                                                We are dedicated to keeping your home warm with our reliable installation, repair, and maintenance solutions for electric geysers.
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
                                                <div className=" pt-[40px]">
                                                        <h2>Complete Geyser Repair Service (All Capacities & Types)</h2>

                                                        <h6 className=" pt-[30px]">        We offer complete electric geyser repair solutions for domestic, commercial, and industrial clients. Our services cover all geyser capacities and types, ensuring hot water supply reliability.
                                                        </h6>
                                                </div>
                                        </div>

                                </div>

                        </section>

                </>
        )
}

export default GeyserServices;