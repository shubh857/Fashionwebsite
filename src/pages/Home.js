import React from "react";
import main from './../images/front.png'
import About from "./About";
import Arrival from "./Arrival";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

const Home = () => {

    let navigate = useNavigate()

    return <>
        <div className="container-fluid  home1">
            <div className="row align-items-center">
                <div className="col-md-6 home2 d-flex align-items-center justify-content-center">
                    <div className="mx-auto">
                        <h1 className="text-danger top2">20% Off</h1>
                        <h1 className="top3">On Top Brands</h1>
                        <p><span className="font">If you would like to experience the best of online shopping<br />   for men, women and kids in India, you are at the right place.<br />Famms is the ultimate destination for fashion and lifestyle,<br /> being host to a wide array of merchandise including clothing,<br /> footwear,and more.</span></p>
                        <button className="btn btn-danger top4 mt-3" onClick={() => navigate('/product')}>Shop Now</button>
                    </div>
                </div>
                <div className="col-md-6 home3">
                    <div>
                        <img className="lady" src={main} alt="" height="500px" width="100%"></img>
                    </div>
                </div>
            </div>
        </div>


        <About />
        <Arrival />
        <Product />


        {/* <div className="container-fluid text-center subscribe">
            <div className="d-flex flex-column">
                <div className="mb-5 sub1">
                    <h1>Subscribe To Get Discount Offers</h1>
                </div>
                <form>
                    <div>
                        <input type="email" className="w-50 sub2" id="email" placeholder="Enter Your Email"></input>
                    </div>
                    <button className="btn btn-danger btn-lg top5 mt-5">SUBSCRIBE</button>
                </form>
            </div>
        </div> */}
        <div className="container-fluid subscribe">
            <div className="row justify-content-center">
                <div className="mb-4 mt-5 sub1 text-center">
                    <h1>Subscribe To Get Discount Offers</h1>
                </div>
                <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                    <form>
                        <div>
                            <input type="email" className="form-control sub2" id="email" placeholder="Enter Your Email"></input>
                        </div>
                        {/* <button className="btn btn-danger btn-lg top5 mt-5">SUBSCRIBE</button> */}
                        <div className="d-flex justify-content-center mt-5">
                            <button className="btn btn-danger btn-lg top5">
                                SUBSCRIBE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default Home