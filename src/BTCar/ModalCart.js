import React, { Component } from 'react'

export default class ModalCart extends Component {
    renderCart = () => {
        let { carCart } = this.props;
        return carCart.map((car, index) => {
            return <tr key={index}>
                <td>{car.carId}</td>
                <td><img width="50px" height="50px" src={car.image} alt="" /></td>
                <td>{car.carName}</td>
                <td>
                    <button className="btn btn-success" onClick={() => { this.props.changeAmount(car.carId, true) }}>+</button>
                    {car.amount}
                    <button className="btn btn-success" onClick={() => { this.props.changeAmount(car.carId, false) }}>-</button>
                </td>
                <td>{car.price}</td>
                <td>{car.price * car.amount}</td>
                <td><button className="btn btn-danger" onClick={() => { this.props.deleteFromCart(car.carId) }}>Xóa</button></td>
            </tr>
        })
    }

    totalPrice = () => {
        return this.props.carCart.reduce((total, spGH, index) => {
            return total += spGH.price * spGH.amount;
        }, 0)
    }

    render() {
        return (
            <div className="container">
                <h3>Giỏ hàng</h3>
                <table className="table">
                    <thead>
                        <th>Mã sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {this.renderCart()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5">
                                <h3 className="text-right">Tổng tiền:</h3>
                            </td>
                            <td>{this.totalPrice().toLocaleString()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
