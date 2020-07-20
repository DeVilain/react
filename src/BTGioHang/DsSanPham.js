import React, { Component } from 'react'
import SanPham from './SanPham';


export default class DsSanPham extends Component {
    renderProduct = () => {
        let {mangSanPham} = this.props;
        return mangSanPham.map((product, index) => {
            return <div className="col-4" key={index}>
                <SanPham product={product} themGioHang={this.props.themGioHang}></SanPham>
            </div>
        })
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
