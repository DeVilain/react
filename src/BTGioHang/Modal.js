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
                <td>
                
                    <button className="btn btn-success" onClick={()=>{this.props.tangGiamSoLuong(sp.maSP, true)}}>+</button>
                    {sp.soLuong}
                    <button className="btn btn-success" onClick={()=>{this.props.tangGiamSoLuong(sp.maSP, false)}}>-</button>
                </td>
                <td>{sp.gia}</td>
                <td>{sp.gia*sp.soLuong}</td>
                <td><button className="btn btn-danger" onClick={()=>{this.props.xoaGioHang(sp.maSP)}}>Xóa</button></td>
            </tr>
        })
    }

    tinhTongTien=()=>{
        return this.props.gioHang.reduce((tongTien, spGH, index)=>{
            return tongTien += spGH.soLuong * spGH.gia;
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
                        {this.renderGioHang()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5"></td>
                            <td><h5>Tổng tiền:</h5></td>
                            <td>{this.tinhTongTien().toLocaleString()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
