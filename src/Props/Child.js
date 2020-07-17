import React, { Component } from 'react'

export default class Child extends Component {
    // this.props: là thuộc tính có sẵn của component nhận giá trị từ component cha truyền vào
    // không thể thay đổi giá trị của props như state
    render() {
        
        let {name, price, image} = this.props.productProps;
        return (
            <div>
                <div className="card text-center">
                    <img src={image} alt="" width={289} height={200} />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{price}</p>
                        <button className="btn btn-success" onClick="">Xem chi tiết</button>
                    </div>
                </div>
            </div>
        )
    }
}
