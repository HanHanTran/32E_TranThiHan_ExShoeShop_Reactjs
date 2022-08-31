import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    const {cart} = this.props
    const renderCart = () =>{
      return cart.map((item,index)=>{
        return (
          <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td><img width={100} src={item.image} alt="..." /></td>
          <td>{item.price}</td>
          <td>
            <button className='btn btn-warning'>-</button>
            <span className='mx-3'>{item.soLuong}</span>
            <button className='btn btn-warning'>-</button>
          </td>
          <td>{(item.price * item.soLuong)}</td>
        </tr>

        )
      })

      
    }
    return (
      <div>
        <div>

          {/* Modal */}
          <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Mã SP</th>
                        <th>Tên SP</th>
                        <th>Hình ảnh</th>
                        <th>Giá SP</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                     {renderCart()}
                    </tbody>

                  </table>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
