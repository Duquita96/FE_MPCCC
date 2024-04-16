import React from "react";
import "../style/index.css";
import "../style/Footer.css";

import { FaRegCopyright, FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {

    return (
        <section>
            <div className="footerheader">
                <p>our social networks</p>
                <div>
                    <FaGithub />
                    <FaLinkedin />
                </div>
            </div>
            <div className="Footerflex">
                <div className="box1">
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum temporibus vitae ipsam exercitationem unde corrupti ea placeat tempora. Distinctio voluptas vel id dignissimos quaerat, dicta ut totam enim error molestiae!</p>
                </div>
                <div className="box2">
                    <h3>Products</h3>
                    <ul>
                        <br></br>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
                <div className="box3">
                    <h3>Service</h3>
                    <ul>
                        <br></br>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
                <div className="box4">
                    <h3>Contacts</h3>
                    <ul>
                        <br></br>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
            </div>
            <div className="footerbottom">
                <p><FaRegCopyright />2024 Copyright: MCCCP </p>
            </div>
        </section>
    );
};


export default Footer;