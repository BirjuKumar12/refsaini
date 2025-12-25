import ServicesCard from "./ServicesCard";
import { useState, useEffect } from "react";

const Acservices = () => {
        const [services, setServices] = useState([]);

        useEffect(() => {
                fetch('http://localhost:5001/api/services')
                        .then(res => res.json())
                        .then(data => {
                                if (data.success) {
                                        const acServices = data.services.filter(s => s.category === 'Ac Services');
                                        setServices(acServices);
                                }
                        })
                        .catch(err => console.error("Error fetching AC services:", err));
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
                                                                AC Services
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
                                                                We are dedicated to keeping your home cool, comfortable with our reliable installation, repair, and maintenance solutions.
                                                        </p>
                                                </div>
                                        </div>

                                        <div
                                                style={{
                                                        display: "flex",
                                                        flexWrap: "wrap",
                                                        justifyContent: "space-between",
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
                                                        <h2>Complete AC  Repair Service  (0.75 Ton – 4 Ton & All AC Types)</h2>

                                                        <h6 className=" pt-[30px]">        We offer complete air conditioning and appliance repair solutions for domestic, commercial, and industrial clients. Our services cover all AC capacities from 0.75 Ton, 1 Ton, 1.5 Ton, 2 Ton, 3 Ton, to 4 Ton, and include every major AC type such as Split AC, Window AC, Cassette AC, Panel AC, VRV/VRF Systems, Ductable Units, and Central Cooling systems.
                                                        </h6>
                                                </div>
                                        </div>

                                </div>

                        </section>

                </>
        )
}

export default Acservices;
