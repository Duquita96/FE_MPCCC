import React from "react";
import "../style/index.css";
import "../style/WelcomeText.css";
import { SiWelcometothejungle } from "react-icons/si";
import welcomepicture from "../assets/img/FooterAndWelcome/boston-1631460_960_720.jpg";


const WelcomeText = () => {

    return (
        <section className="Welcome">
            <div className="ImageContainer">
                <img className="WelcomeImage" src={welcomepicture} alt="" />
            </div>

            <div className="flexbox">
                <div>
                    <h2><SiWelcometothejungle size={50} />elcome to the PCCCM Marketplace!</h2>
                </div>
                <div className="Welcometext">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ullam atque minima incidunt. Obcaecati in nesciunt itaque veniam mollitia aspernatur tempore eligendi hic omnis similique, perspiciatis quasi id deserunt voluptatum?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minus sequi veniam eos soluta, saepe quia quos architecto! Vero, atque animi facilis eaque quis quisquam nostrum quae accusamus dicta ex. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque nam cupiditate voluptatum magni, non aut! Error blanditiis quae deserunt distinctio quam assumenda consequatur quisquam eligendi quidem exercitationem facilis, commodi reiciendis.
                    </p>
                </div>
            </div>
        </section >
    );
};


export default WelcomeText;