import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    // tạo mảng danh sách sản phẩm
    danhSachSanPham = [
        { maSP: 1, tenSP: 'Iphone X', gia: 1000, hinhAnh: 'https://picsum.photos/100'},
        { maSP: 2, tenSP: 'Iphone XS', gia: 1200, hinhAnh: 'https://picsum.photos/200' },
        { maSP: 3, tenSP: 'Iphone XS Max', gia: 1500, hinhAnh: 'https://picsum.photos/300' }
    ]
    // phương thức tạo bảng
    renderTable = () => {
        
        // dùng map để chuyển đổi array
        // return thẳng, ko cần tạo mảng trung gian như cách dưới
        return this.danhSachSanPham.map((sanPham, index) =>{
            return <tr key={index}>
                <td>{sanPham.maSP}</td>
                <td>{sanPham.tenSP}</td>
                <td>{sanPham.gia}</td>
                <td><img src={sanPham.hinhAnh} alt={sanPham.hinhAnh} width={100} height={100} /></td>
                <td><button className="btn btn-danger">Xóa</button></td>
            </tr>
        })
        /* let arrSpJSX = [];
         for (let index = 0; index < this.danhSachSanPham.length; index++) {
            //Mỗi lần duyệt lấy ra 1 sản phẩm
            let sanPham = this.danhSachSanPham[index];
            // Từ sản phẩm tạo ra 1 object jsx (thẻ <tr></tr>)
            // đặt key để phân biệt với các thẻ <tr> khác
            let trJSX = <tr key={index}> 
                <td>{sanPham.maSP}</td>
                <td>{sanPham.tenSP}</td>
                <td>{sanPham.gia}</td>
                <td><img src={sanPham.hinhAnh} alt={sanPham.hinhAnh} width={100} height={100} /></td>
                <td><button className="btn btn-danger">Xóa</button></td>
            </tr>
            // push sản phẩm duyệt được vào mảng arrSpJSX
            arrSpJSX.push(trJSX);
        }
        return arrSpJSX;*/
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Danh mục sản phẩm</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Giá</th>
                            <th>Hình ảnh</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
