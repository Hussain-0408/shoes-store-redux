import React from 'react'
import  { useState } from 'react';
import img2 from "../components/images/img2.jpg";
import img3 from "../components/images/img3.jpg";
import img4 from "../components/images/img4.jpg";
import img5 from "../components/images/img5.jpg";
import img1 from "../components/images/img1.jpg";
// import './App.css';

const CardItems = () => {
    const cardsData = [
    { name: "Sandles", price: 200, img: img2 },
    { name: "Oxer Company", price: 500, img: img3 },
    { name: "Loafers", price: 400, img: img4 },
    { name: "Sneakers", price: 300, img: img5 },
    { name: "High Heels", price: 200, img: img1 },
   
  ];

  return (
    <div>
    <div className="root-container container  mt-0 w-100 h-100 ">
      <div className="child-container mt-0 w-100 h-100 d-flex flex-column">
        <div className="shoes-heading">
          <h2 className="mt-3  fs-3 font-serif p-3">Available Shoes</h2>
        </div>

        <div className=' informaiton-container  '>
          <div className='information-childcontainer'>
            <div className='shoes-card'>
              {cardsData.map((card, index) => (
                <div key={index} className="card card-bodyroot  bg-success">
                  <img src={card.img} className="card-img-top" alt={card.name} />
                  <div className="card-body ">
                    <h5 className="card-title">{card.name}</h5>
                    <p className="card-text"> ${card.price}</p>
                    
                      <button
                       
                        type="button"
                       
                        className="btn btn-primary btn-sm me-2 add-button"
                      >
                       button
                  
                      </button>
                    
                  </div>
                </div>
              ))}
            </div>

            {/* <div className='cart-container'>
              <div className=" mt-0 p-3 w-100 bg-success text-white">
                <h3>Cart</h3>
                {cardsData.length === 0 ? (
                  <p>No items in cart</p>
                ) : (
                  <div>
                    {cardsData.map((item, index) => (
                      <div
                        key={index}
                        className="d-flex justify-content-between  align-items-center w-100 border-bottom  py-2"
                      >
                        <img src={item.img} alt={item.name} className='image ' />
                        <div className='d-flex justify-content-between  image-name   rounded-3   w-50 align-items-center'>
                          <p className='mt-2 '>{item.name}</p>
                          <p className='mt-2'>Price: ${item.price}</p>
                        </div>
                        <div className='d-flex  p-1 buttons    '>
                          <div className=' chaild-buttons '>
                            <button className='border rounded-2 '>-</button>
                            <span className="mx-2"></span>
                            <button  className='border rounded-2'>+</button>
                          </div>

                        </div>
                      </div>
                    ))}

                    <h4>Total: $</h4>
                  </div>
                )}
              </div>

            </div> */}
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default CardItems
