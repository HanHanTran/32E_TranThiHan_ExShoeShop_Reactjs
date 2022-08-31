import React, { Component } from 'react'
import Modal from './Modal';

export default class Product extends Component {
    // renderShoe =(producClick) =>{
    //     this.setState({
    //         data: producClick
    //     })

    // }

    render() {
        // truyền props từ shoeShop
        const { product,handleShoeDetail,handleCart } = this.props;
        return (
            <div>
                {
                    <div className="card my-3 text-left">
                        <img className="card-img-top" width={100} src={product.image} alt={product.name} />
                        <div className="card-body">
                            <h4 className="card-title mb-0" style={{fontSize: '18px',fontWeight: '600',color: 'green',overflow: 'hidden',whiteSpace: 'nowrap',textOverflow: 'ellipsis'}}>{product.name}</h4>
                            <p className="card-text  " style={{fontWeight: 'bold', fontSize: '25px'}}>{product.price} $ </p>
                            <div className="d-flex justify-content-between">
                            <button className="btn btn-dark " onClick={() => handleCart(product)}>Add to cart</button>
                            <button className="btn btn-warning" onClick={() =>{
                                handleShoeDetail(product)
                                 }}>Detail</button>

                            </div>

                        </div>
                    </div>


                }
            </div>
        )
    }
}
