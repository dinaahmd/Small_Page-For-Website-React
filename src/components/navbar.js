import { Component } from "react";
import "./navbar.css";
export class Navbar extends Component {
    render() {
        return (
            <header className="navbar">
                <div className="nav-links">
                    <span>Home</span>
                    <span>Shop</span>
                    <span>Features</span>
                    <span>Contact</span>
                    {/* <a href="#home">Home</a>
                    <a href="#shop">Shop</a>
                    <a href="#features">Features</a>
                    <a href="#contact">Contact</a> */}
                </div>
            </header>
        );
    }
}