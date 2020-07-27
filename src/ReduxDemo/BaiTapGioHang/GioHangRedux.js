import React, { Component } from 'react';

import rootReducer from '../../redux/reducers/rootReducer';
import { connect } from 'react-redux'// thư viện kết nối react Component và redux store

class GioHangRedux extends Component {
    renderGioHang = () => {
        let { gioHang } = this.props;
        return gioHang.map((sanPham, index) => {
            return <tr key={index}>
                <td>{sanPham.maSP}</td>
                <td><img width="50px" height="50px" src={sanPham.hinhAnh} alt="" /></td>
                <td>{sanPham.tenSP}</td>
                <td>

                    <button className="btn btn-success" onClick={() => { this.props.tangGiamSoLuong(sanPham.maSP, true) }}>+</button>
                    {sanPham.soLuong}
                    <button className="btn btn-success" onClick={() => { this.props.tangGiamSoLuong(sanPham.maSP, false) }}>-</button>
                </td>
                <td>{sanPham.gia}</td>
                <td>{sanPham.soLuong * sanPham.gia}</td>
                <td><button className="btn btn-danger" onClick={() => { this.props.xoaGioHang(sanPham.maSP) }}>Xóa</button></td>
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
                    <tfoot>
                        <tr>
                            <td colSpan="5"></td>
                            <td><h5>Tổng tiền:</h5></td>
                            <td>{this.props.gioHang.reduce((tongTien, spGH, index) => { return tongTien += spGH.soLuong * spGH.gia }, 0).toLocaleString()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }

}

// hàm có nhiệm vụ biến đổi state của redux trở thành props của component
const mapStateToProps = (state) => { //state ứng với rootReducer
    return {
        gioHang: state.GioHangReducer.stateGioHang,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSP) => {
            let action = {
                type: 'XOA_GIO_HANG',
                maSP: maSP
            }
            dispatch(action);
        },
        tangGiamSoLuong: (maSP, tangGiam) => {
            let action = {
                type: 'TANG_GIAM_SO_LUONG',
                maSP: maSP,
                tangGiam: tangGiam
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux); // hàm connect
