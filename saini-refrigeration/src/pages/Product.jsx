import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard"
import { productsData } from "../components/Products.js"

const Product = () => {
        const [products, setProducts] = React.useState([]);

        useEffect(() => {
                const fetchProducts = async () => {
                        try {
                                const response = await fetch('http://localhost:5001/api/products');
                                const data = await response.json();
                                if (data.success && data.products && data.products.length > 0) {
                                        setProducts(data.products);
                                } else {
                                        setProducts(productsData);
                                }
                        } catch (error) {
                                console.error("Error fetching products, using fallback:", error);
                                setProducts(productsData);
                        }
                };

                fetchProducts();
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
                                                                        fontWeight: "700",
                                                                        fontSize: "40px",
                                                                        marginBottom: "10px",
                                                                }}
                                                        >
                                                                Our Products
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
                                                                We are dedicated to keeping your home cool, comfortable with our reliable repair, and maintenance solutions.
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
                                                {products.map((item, i) => (
                                                        <ProductCard key={i} i={i} item={item} />
                                                ))}
                                                <div className=" pt-[40px]">
                                                        <h2>Complete AC  Repair Service  (0.75 Ton – 4 Ton & All AC Types)</h2>

                                                        <h6 className=" pt-[30px]">        We offer complete air conditioning and appliance repair solutions for domestic, commercial, and industrial clients. Our services cover all AC capacities from 0.75 Ton, 1 Ton, 1.5 Ton, 2 Ton, 3 Ton, to 4 Ton, and include every major AC type such as Split AC, Window AC, Cassette AC, Panel AC, VRV/VRF Systems, Ductable Units, and Central Cooling systems.
                                                        </h6>
                                                </div>
                                        </div>

                                </div>

                        </section>

                </>
        );
};

export default Product;
