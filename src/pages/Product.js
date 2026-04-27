import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
    const [data, setData] = useState([])

    let navigate = useNavigate()

    const getData = async () => {
        try {
            const data = await fetch('https://fakestoreapi.com/products')
            const res = await data.json()

            console.log(res)
            setData(res)
        }
        catch (error) {
            console.log(error)
        }
    }
    //    getData()
    useEffect(() => {
        getData()
    }, [])
    return <>
        <div className="text-center mt-5">
            <h1>Our <span className="text-danger">Products</span></h1>
        </div>
        <hr className="line mb-5"></hr>

            <div className="container">
                <div className="row mt-2 mb-5">
                    {
                        data.map((value, index, array) => {
                            return <div key={index} className="col-md-3  mt-2 mb-2">
                                <div className="card h-100 w-100">
                                    <div className="card-header chead text-center">
                                        <img src={value.image} alt="" width='75%' height='200px'></img>
                                    </div>
                                    <div className="card-body text-center">
                                        
                                        <h5 className="mt-4">{value.title}</h5>
                                    </div>
                                    <div className="card-footer cfoot text-center">
                                        
                                        <h6 className="mt-auto mb-0">${value.price}</h6>
                                        <button className="btn btn-danger blue btn-md mt-2" onClick={() => navigate(`/product/${value.id}`)}>View more</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="text-center mb-5">
                <button className="btn btn-danger line2">View All Products</button>
            </div>
    </>
}

export default Product