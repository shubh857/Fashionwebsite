import React from "react";
import { FaTruckMonster } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import { LuBadgeCheck } from "react-icons/lu";

const About = () => {
    return <>
        <div>
            <h1 className="text-center mt-5">Why Shop With Us</h1>
            <hr className="line"></hr>
        </div>
        <div className="container mb-5">
            <div className="row text-center">
                <div className="col-md-4">
                    <div className="out2">
                        <FaTruckMonster className="out3 mb-3" />
                        <h3>Fast Delivery</h3>
                        <p>within 2-3 days at your doorstep</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="out2">
                        <ImPower className="out3 mb-3" />
                        <h3>Free Shiping</h3>
                        <p>free delivery for every product</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="out2">
                        <LuBadgeCheck className="out3 mb-3" />
                        <h3>Best Quality</h3>
                        <p>100% verified best products</p>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default About