import React, { Component } from 'react'
import { connect } from 'react-redux';

class SanPhamRedux extends Component {
    render() {
        let { sanPham } = this.props;
        return (
            <div className="card py-3">
                <img src={sanPham.hinhAnh} alt="" height="300px" />
                <div className="card-body text-center">
                    <h3 className="card-title">{sanPham.tenSP}</h3>
                    <p className="card-text">{sanPham.giaBan}</p>
                </div>
                <div className="row">
                    <div className="col-6 text-center">
                        <button className="btn btn-success">Xem chi tiết</button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={() => { this.props.themGioHang(sanPham) }}>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}

// hàm tạo ra prop là phương thức đưa dữ liệu lên reducer thông qua dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (sanPhamClick) => {
            let spGH = {
                maSP: sanPhamClick.maSP,
                tenSP: sanPhamClick.tenSP,
                gia: sanPhamClick.giaBan,
                hinhAnh: sanPhamClick.hinhAnh,
                soLuong: 1
            }
            let action = {
                type: 'THEM_GIO_HANG', // thuộc tính bắt buộc phải có đại diện cho action 
                spGH: spGH
            }
            // dùng hàm dispatch gửi giá trị lên reducer để set lại state
            dispatch(action);

        }
    }
}

export default connect(null, mapDispatchToProps)(SanPhamRedux);