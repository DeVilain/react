import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableUser extends Component {
    renderTable = () => {
        return this.props.mangNguoiDung.map((nguoiDung, index) => {
            return <tr key={index}>
                <td>{nguoiDung.taiKhoan}</td>
                <td>{nguoiDung.hoTen}</td>
                <td>{nguoiDung.matKhau}</td>
                <td>{nguoiDung.email}</td>
                <td>{nguoiDung.soDt}</td>
                <td>{nguoiDung.maLoaiNguoiDung}</td>
                <td>
                    <button className="btn btn-warning" onClick={()=>{
                        this.props.dispatch({
                            type:'CHINH_SUA',
                            nguoiDungChinhSua: nguoiDung // dispatch thông tin người dùng cần chỉnh sửa
                        })
                    }}>Chỉnh sửa</button>
                </td>
            </tr>
        })
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="card text-dark bg-white">
                    <div className="card-header text-center">
                        <h3>Danh sách người dùng</h3>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Tài khoản</th>
                                    <th>Họ tên</th>
                                    <th>Mật khẩu</th>
                                    <th>Email</th>
                                    <th>Số ĐT</th>
                                    <th>Loại người dùng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTable()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    mangNguoiDung: state.BTQuanLyNguoiDungReducer.mangNguoiDung,
})

export default connect(mapStateToProps)(TableUser);