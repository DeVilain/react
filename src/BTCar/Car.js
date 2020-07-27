import React, { Component } from 'react'

export default class Car extends Component {
    render() {
        let {product} = this.props;
        return (
            <div className="card">
                <img src={product.image} alt="" height="200px"/>
                <div className="card-body">
                    <h3 className="card-title">{product.carName}</h3>
                    <p className="card-text">{product.price}</p>
                    <button>Xem chi tiết</button>
                    <button onClick={()=>{this.props.addToCart(product);}}>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
