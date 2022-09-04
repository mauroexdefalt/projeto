import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Home from "./Home"
import NotFound from "./404"

export default function Router() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<Home />} />
                <Route path="/notfound" element={<NotFound />} />
            </Routes>
        </div>
    );
}