import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./main.css";
import Header from "./components/Header";
import Section from "./components/Section";
import NotFound from "./components/NotFound";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <NextUIProvider>
            <BrowserRouter basename="/">
                <main className="bg-[#222831] text-white">
                    <Header>
                        <Routes>
                            <Route index element={<Section />} />
                            <Route
                                path="/producto/:categoria"
                                element={<Section />}
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Header>
                </main>
            </BrowserRouter>
        </NextUIProvider>
    </React.StrictMode>
);
