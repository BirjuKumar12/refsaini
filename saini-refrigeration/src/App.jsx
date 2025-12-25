import React from "react";
import  Header from "./pages/Header";
import  Footer  from "./pages/Footer";
import Notification from "./components/Notification";
import './App.css'
import {  Outlet, ScrollRestoration } from "react-router-dom"


function App() {
        

        return (
                <>
                        <Header />
                        <Notification />
                        <Outlet />
                        <ScrollRestoration />
                        <Footer />
                </>
        );
}

export default App;
