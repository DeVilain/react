import React, { Component } from 'react'


export default class SanPhamProps extends Component {
    render() {
        // thiết lập props
        let {sanPham, viewDetail} = this.props;
        return (
            <div className="card">
                <img src={sanPham.hinhAnh} height="300" alt="" />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.giaBan}</p>
                    
                    <button className="btn btn-success" onClick={() => {viewDetail(sanPham)}}>Xem chi tiết</button>
                </div>
            </div>
        )
    }
}
