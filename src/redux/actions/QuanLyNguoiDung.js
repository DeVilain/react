import { them_nguoi_dung, edit_nguoi_dung } from "./types/QuanLyNguoiDungTypes";

// tạo ra 1 action sử dụng cho nhiều component muốn dispatch lên reducer nếu giống nhau về chức năng
export const themNguoiDungAction = (nguoiDung) => {
    return{
        type: them_nguoi_dung,
        nguoiDung: nguoiDung
    }
    
}

export const editNguoiDungAction = (nguoiDung)=>{
    return{
        type: edit_nguoi_dung,
        
    }
}