import React, { Component } from 'react'


export default class Modal extends Component {
  render() {
    const { content } = this.props

    return (
     
        <div className="card text-left mt-4">
          <img className="card-img-top" src={content.image} alt={content.name} />
          <div className="card-body">
           
            <h3 className="card-title m-0 " style={{ fontSize:'24px', fontWeight:'bold'}}>{content.name}</h3>
            <span className="card-text " style={{ fontSize:'20px', fontWeight:'600',color:'green'}}>${content.price} </span>

            <span className="card-text ml-5" style={{ fontSize:'14px', fontWeight:'500'}}>| Quantity: {content.quantity} </span>
            
            <p className="card-text mt-3" style={{color:'grey'}}>{content.description}</p>
            <button className="btn btn-dark">Add to cart</button>
           
          </div>
        </div>


    
    )
  }
}
