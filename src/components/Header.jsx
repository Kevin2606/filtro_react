import { Link as LinkRD } from "react-router-dom";
import {
    Navbar,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import { getAllCategoria } from "../storage/producto";

export default function Header({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [json, setJson] = useState([]);
    const menuItems = json
    useEffect(() => {
        getAllCategoria().then((res) => {
            setJson(res.data);
        });
    }, []);


    return (
        <>
            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="start">
                    {menuItems?.map((item, index) => {
                        return (
                            <NavbarItem key={`navCentral-${index}`}>
                                <LinkRD to={`/producto/${item.nombre}`}>
                                    {item.nombre}
                                </LinkRD>
                            </NavbarItem>
                        );
                    })}
                </NavbarContent>
                <NavbarMenu>
                    {menuItems?.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <LinkRD to={`/producto/${item.nombre}`}>
                                {item.nombre}
                            </LinkRD>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
            {children}
        </>
    );
}
