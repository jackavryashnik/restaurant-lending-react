import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
    <div className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.chef} alt="chef" />
        </div>

        <div className="app__wrapper_info">
            <SubHeading title="Chef's Word" />
            <h1 className="headtext_cormorant">What we belive in</h1>

            <div className="app__chef-contant">
                <div className="app__chef-contant_qoute">
                    <img src={images.quote} alt="quote" />
                    <p className="p__opensans">
                        Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                    </p>
                </div>
                <p className="p__opensans">
                    Impedit Iure Voluptatum Deleniti Facere Sunt Sed Delectus
                    Odio Labore Temporibus Eligendi! Lorem Ipsum Dolor Sit Amet
                    Consectetur Adipisicing Elit. Impedit Iure Voluptatum
                    Deleniti Facere Sunt Sed Delectus Odio Labore Temporibus
                    Eligendi!
                </p>
            </div>

            <div className="app__chef-sign">
                <p>Kevin Luo</p>
                <p className="p__opensans">Chef & Founder</p>
                <img src={images.sign} alt="sign" />
            </div>
        </div>
    </div>
);

export default Chef;
