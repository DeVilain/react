import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let {product} = this.props;
        return (
            <div className="card">
                <img src={product.hinhAnh} alt="" height="300px" />
                <div className="card-body text-center">
                    <h3 className="card-title">{product.tenSP}</h3>
                    <p className="card-text">{product.giaBan}</p>
                </div>
                <div className="row">
                    <div className="col-6 text-center">
                        <button className="btn btn-success">Xem chi tiết</button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={()=>{this.props.themGioHang(product);}}>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}
