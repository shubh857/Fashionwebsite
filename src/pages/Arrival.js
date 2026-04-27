import React from "react";
import manimage from './../images/mans.png'
import { useNavigate } from "react-router-dom";

const Arrival = () => {

    const navigate = useNavigate()

    return <>
        <div className="container-fluid arrival">
            <div className="row align-items-center">
                <div className="col-md-6 man">
                    <img src={manimage} alt="" height='auto' width='100%'></img>
                </div>
                <div className="col-md-6 arrival2">
                    <h1 className="arrival1">New Arrivals</h1>
                    <p className="font">DONT BLINK!!<br />
                        Shop our latest collection and grab your favorites <br />
                        Cause every season calls for a whole new wardrobe</p>
                    <button className="btn btn-danger top4 mt-3" onClick={() => navigate('/product')}>Shop Now</button>
                </div>
            </div>
        </div>
    </>
}

export default Arrival