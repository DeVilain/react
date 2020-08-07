import { them_nguoi_dung } from "../actions/types/QuanLyNguoiDungTypes";

const initialState = {
    mangNguoiDung: [
        { taiKhoan: 'Nguyen Van A', matKhau: 123, hoTen: 'Nguyễn Văn A', email: 'nguyenvana@gmail.com', soDt: '857439', maLoaiNguoiDung: 'KhachHang' },
        { taiKhoan: 'Nguyen Van B', matKhau: 123, hoTen: 'Nguyễn Văn B', email: 'nguyenvanb@gmail.com', soDt: '432539', maLoaiNguoiDung: 'KhachHang' }
    ],
    nguoiDungEdit:{ taiKhoan: '', matKhau: '', hoTen: '', email: 'nguyenvanb@gmail.com', soDt: '432539', maLoaiNguoiDung: 'KhachHang' }
}

export default (state = initialState, action) => { // cách viết export luôn hàm xử lý
    switch (action.type) {
        case them_nguoi_dung: {
            let mangNguoiDungUpdate = [...state.mangNguoiDung, action.nguoiDung];

            return { ...state, mangNguoiDung: mangNguoiDungUpdate };
        }
        case 'CHINH_SUA':{
            state.nguoiDungEdit = action.nguoiDungChinhSua;
            return {...state}
        }
        default:
            return { ...state };
    }
}

