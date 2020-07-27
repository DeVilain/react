import React, { Component } from 'react'
import Modal from './Modal'
import DsSanPham from './DsSanPham'

export default class BTGioHang extends Component {
    arrProduct = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]
    // xác định state gioHang tại component BTGioHang vì có chứa nút xút xử lý thêm giỏ hàng và giao diện giỏ hàng
    state = {
        gioHang: []
    }

    themGioHang = (sanPhamClick) => {
        // Từ sản phẩm được click tạo ra sản phẩm giỏ hàng

        let spGioHang = {
            maSP: sanPhamClick.maSP,
            tenSP: sanPhamClick.tenSP,
            hinhAnh: sanPhamClick.hinhAnh,
            gia: sanPhamClick.giaBan,
            soLuong: 1
        };
        console.log(spGioHang);
        // Định nghĩa hàm thay đổi state tại nơi chứa state
        // Tạo giỏ hàng mới
        let gioHangCapNhat = [...this.state.gioHang];

        // kiểm tra sản phẩm đã có trong giỏ hàng hay chưa
        // lấy index trong gioHangCapNhat với mã SP trùng nhau
        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === spGioHang.maSP);
        if (index !== -1) {
            gioHangCapNhat[index].soLuong += 1; // nếu index đã có thì số lượng + 
        } else {
            gioHangCapNhat.push(spGioHang); // ngược lại thì push sản phẩm vào giỏ hàng
        }
        //cập nhật giỏ hàng cũ bằng phương thức setState
        this.setState({ gioHang: gioHangCapNhat });
    }
    xoaGioHang = (maSP) => {
        console.log(maSP)
        // setState
        let gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSP);
        if (index !== -1) {
            gioHangCapNhat.splice(index, 1);
        }
        this.setState({ gioHang: gioHangCapNhat })
    }

    tangGiamSoLuong = (maSP, tangGiam) => {
        //tangGiam = true là tăng, false là giảm
        // tìm ra sản phẩm trong giỏ hàng => tăng giả số lượng
        console.log(maSP);
        let gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSP);
        if (index !== -1) {
            if (tangGiam) {
                gioHangCapNhat[index].soLuong += 1;
            } else {
                if (gioHangCapNhat[index].soLuong > 1) {
                    gioHangCapNhat[index].soLuong -= 1;
                }
                else {
                    alert('số lượng tối thiểu là 1!')
                }
            }
        }

        this.setState({ gioHang: gioHangCapNhat });

    }


    render() {
        return (
            <div>
                <DsSanPham mangSanPham={this.arrProduct} themGioHang={this.themGioHang}></DsSanPham>
                <Modal gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong}></Modal>
            </div>
        )
    }
}
