import React, { Component } from 'react'
import SanPham from './SanPham';

export default class Modal extends Component {

    renderGioHang = () => {
        let { gioHang } = this.props;
        return gioHang.map((sp, index) => {
            return <tr key={index}>
                <td>{sp.maSP}</td>
                <td><img width="50px" height="50px" src={sp.hinhAnh} alt="" /></td>
                <td>{sp.tenSP}</td>
                <td>{sp.soLuong}</td>
                <td>{sp.gia}</td>
                <td>{sp.gia*sp.soLuong}</td>
                <td><button className="btn btn-danger">Xóa</button></td>
            </tr>
        })
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
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}
