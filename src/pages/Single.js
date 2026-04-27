import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Single = () => {

    const [item, setItem] = useState('')
    let { id } = useParams()

    const getOne = async () => {
        try {
            const y = await fetch(`https://fakestoreapi.com/products/${id}`)
            const res = await y.json()

            setItem(res)

        }
        catch (error) {
            console.log(error)
        }
    }
    getOne()

    return <>
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2 mt-5 ">
                    <div className="card p-3">
                        <div className="card-body">
                            <div className="d-flex align-items-center single1">
                                <div className="single2">
                                    <img className="single3" src={item.image} alt="" height="auto" width="200px"></img>
                                </div>
                                <div className="ms-3">
                                    <h3 className="single5">{item.title}</h3>
                                    <p className="single4">{item.description}</p>
                                    <h5 className="single5">Catagory: {item.category}</h5>
                                    <h5 className="single5">Price: ${item.price}</h5>
                                    <button className="btn cart btn-danger mt-3 me-3">Buy Now</button>
                                    <button className="btn cart2 mt-3 me-3">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Single