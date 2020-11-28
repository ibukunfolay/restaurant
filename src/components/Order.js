import React, { useEffect, useState } from 'react'
 import data from "../data"
import { listOrder } from '../actions/orderActions';
import {useSelector, useDispatch} from 'react-redux'

const Order = () => {

    const order = useSelector(state => state.order)

    const {orderItems} = order

    const dispatch = useDispatch()

    useEffect(() => {
            dispatch(listOrder())
    },[])

    return (
        <div className="order">
            {(typeof data.restaurant != "undefined") ? (
            <div className="head">
                <h1>{data.restaurant.name}</h1>
                <h4>Address: {data.restaurant.street}, {data.restaurant.city}, {data.restaurant.state}.</h4>
                <h5>ZipCode: {data.restaurant.zipcode} </h5>
            </div>
            ) : ("")}
            <div className="order-list">
                <ul className="order-list-container">
                    <div className="order-head"> 
                        <h3>Order Summary</h3>
                    </div>
                    {/* { orderItems.length === 0 ? <div>Nothing</div> :  */}
                        {data.items.map(item=>
                            <div className='orderSummary' >
                                <div>Item Ordered: {item.name} </div>
                                <div>Category: {item.category} </div>
                                <div>Price: {item.price} </div>
                                <div>
                                    Quantity: {item.quantity}
                                </div>
                                <div>V.A.T: {item.tax_pct} </div>
                            </div>
                        )
                        }

                <h4>
                    {data.items.currency}subtotal = 870
                    {/* Subtotal({orderItems.reduce((a,c) => a + c.quantity, 0)}) : 
                    {orderItems.currency}{orderItems.reduce((a,c) => a + c.price * c.quantity, 0)} */}
                </h4>
                </ul>
            </div>
        </div>
    )
}

export default Order
