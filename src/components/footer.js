import React, { Component } from 'react'
import "./footer.css";
export class Footer extends Component {
    render() {
        return (
            <footer className="footer-distributed" id="contact">
                <div className="footer-left">
                        <h2>Vegista</h2>
                        <p className="footer-links">
                            <a href="#">Home</a>
                            ·
                            <a href="#shop">Shop</a>
                            ·
                            <a href="#shop">Pricing</a>
                            ·
                            <a href="#">About</a>
                            ·
                            <a href="#">Faq</a>
                            ·
                            <a href="#">Contact</a>
                        </p>

                        <p className="footer-company-name">Vegista &copy; 2023</p>
                </div>

                <div className="footer-center">

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>Califonia </span> US(united State)</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+1 555 000000000</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">vegista@gmail.com
                        </a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About the company</span>
                        Vegista is a website for buying products, vegetables &amp; fruits.
                    </p>
                </div>
            </footer>
        )
    }
}