import React, { Component } from 'react'

export default class BT2ProductItem extends Component {
    render() {
        let {name, price, image} = this.props.productItem
        return (
            <div className="mt-3">
                <div className="card text-center">
                    <img src={image} alt="" width={200} height={200} />
                    <div className="card-body" style={{height:'200px'}}>
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{price}</p>
                        <button className="btn btn-success" onClick="">Xem chi tiết</button>
                    </div>
                </div>
            </div>
        )
    }
}
