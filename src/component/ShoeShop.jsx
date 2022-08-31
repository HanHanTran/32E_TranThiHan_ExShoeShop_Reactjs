import React, { Component } from 'react'
import Product from './Product'
import data from './data.json'
import Modal from './Modal'
import Cart from './Cart'

export default class ShoeShop extends Component {
    state = {
        isShow: false,
        dataShoe: data[0],
        cart:[
            {
                "id": 2,
                "name": "Adidas Prophere Black White",
                "alias": "adidas-prophere-black-white",
                "price": 450,
                "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                "quantity": 990,
                "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
                "soLuong":1,
              },
        ]
         

    }
    // hàm thêm sp vào giỏ hàng
    handleCart =(valueClick) =>{
        const shoe = {...valueClick,soLuong:1} // gọi 1 object mới có thêm thuộc tính số lượng
        const data = [...this.state.cart] // goị 1 mảng mới copy từ mảng cart
       const index = data.findIndex((value) =>value.id === valueClick.id) // tìm vị trí index trong object có id trùng với id clivk
       if (index !== -1) { //nếu có trong mảng
        data[index].soLuong += 1 // cộng dồn vào object trong mảng đó
       }else{
        data.push(shoe) // không có thì thêm object mới
       }
       this.setState({ // sét lại mảng cart sau khi thay đổi
        cart: data,
       })
    }
    // hàm hiện sp click, show sp
    handleShoeDetail =(valueClick) =>{
        this.setState({
            isShow:true,
            dataShoe:valueClick,
            
        })
    }
    
    render() {
        return (
            <div className='container mt-5'>
                <h2>Bài tập Reactjs số 3</h2>
                
                <div className="row">
                    <div className="col-3">
                        <div className="" > 
                        <Cart cart={this.state.cart} />
                        </div>
                       
                        <div className="show mt-3">
                        <i className="fa-solid fa-cart-plus mr-3" style={{color:"green", fontSize:"30px",cursor:"pointer"}}  data-toggle="modal" data-target="#exampleModal"></i>
                            <span className="my-3 py-2 px-5" style={{backgroundColor: 'green', color: 'white',borderRadius: '5px',fontSize: '30px'}}  >Shoe</span>
                            {this.state.isShow &&(
                                <Modal content={this.state.dataShoe}/>
                            )}
                           
                        </div>
                    </div>

                    <div className="col-9">
                        <div className="product_list">
                            <div className="row">
                                {
                                    data.map((value, index) => {
                                        return (
                                            <div className="col-4" key={value.id}>
                                                <Product product={value} handleShoeDetail={this.handleShoeDetail}  handleCart={this.handleCart} />
                                            </div>

                                        )
                                    })
                                }

                            </div>
                        </div>


                    </div>

                </div>

            </div>
        )
    }
}
