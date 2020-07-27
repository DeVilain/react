import React, { Component } from 'react'
import SanPhamRedux from './SanPhamRedux';

export default class DsSanPhamRedux extends Component {
    renderDanhSachSanPham = ()=>{
        let {mangSanPham} = this.props;
        return mangSanPham.map((sanPham, index)=>{
            return <div className="col-4" key={index}>
                <SanPhamRedux sanPham={sanPham}></SanPhamRedux>
            </div>
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderDanhSachSanPham()}
            </div>
        )
    }
}
