import React, { Component, Fragment } from 'react'
import TableUser from './TableUser';
import {connect} from 'react-redux'
import { themNguoiDungAction } from '../redux/actions/QuanLyNguoiDung';
import _ from 'lodash'; // thư viện support cực mạnh về xử lý mảng và object

class Validation_Form extends Component {
    state = {
        values: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            hoTen: '',
            soDt: '',

        },
        errors: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            hoTen: '',
            soDt: ''
        }
    }

    handleChange = (event) => {
        let { name, value, type } = event.target;
        var newValue = {
            ...this.state.values,
            [name]: value
        }
        var newErrors = {
            ...this.state.errors,
            [name]: value.trim() === '' ? `${name} không được bỏ trống` : ''
        }

        if (type === 'email') {
            let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regexEmail.test(value)) {
                newErrors[value] = name + 'không hợp lệ!';
            }
        }
        var newState = {
            values: newValue,
            errors: newErrors
        }
        this.setState(newState, () => {
            console.log(this.state);
        })
    }

    handleSubmit = (event) => {
        // Ngăn sự kiện vẫn submit được mặc dù có lỗi
        event.preventDefault();

        // kiểm tra các giá trị trong state values có rỗng hay không,
        let valid = true; // gán cờ
        for (let key in this.state.values) {
            if (this.state.values[key] === '') {
                valid = false;
                break;
            }
        }
        // kiểm tra các giá trị trong state errors có rỗng hay không,
        for (let key in this.state.errors) {
            if (this.state.errors[key] !== '') {
                valid = false;
            }
        }
        // báo lỗi nếu 1 trong các input rỗng
        if (!valid) {
            alert('Dữ liệu không hợp lệ!');
            return;
        }
        //alert('Đăng ký thành công');

        // đưa dữ liệu lên reducer
        /*let action = {
            type: 'THEM_NGUOI_DUNG',
            nguoiDung: this.state.values
        }*/ // => cách viết action thông thường

        this.props.dispatch(themNguoiDungAction(this.state.values)); // cách viết tách hàm action ra 1 file riêng

    }

    /* ====== LIFE CYCLE PHIÊN BẢN CŨ ========
    // Hàm này được chạy khi props hoặc state thay đổi và chạy trước khi render
    componentWillReceiveProps(newProps, newState){
        // this.props có thuộc tính gì thì newProps có thuộc tính đó
        let {nguoiDungEdit} = newProps;
        // trước khi render thì gán state.values = nguoiDungEdit
        this.setState({
            values:nguoiDungEdit
        })
    }
    */

    /* ====== LIFE CYCLE PHIÊN BẢN MỚI ======== */
    static getDerivedStateFromProps(newProps, currentState){ // static ko xài đc this
        let {nguoiDungEdit} = newProps;
        if(!_.isEqual(nguoiDungEdit.taiKhoan, currentState.values.taiKhoan)){ // sử dụng hàm so sánh object của lodash
            let newState = {...currentState, values: nguoiDungEdit};
            console.log('getDerivedStateFromProps');
            return newState; // trả về state mới
        }
        return null;
    }

    render() {
        // truyền props xuống value của từng input để load lên thông tin người dùng khi nhấn chỉnh sửa
        let {taiKhoan, matKhau, hoTen, email, soDt, maLoaiNguoiDung} = this.state.values;
        return (
            <Fragment> {/** Tag ảo thay cho div */}
                <form onSubmit={this.handleSubmit} className="container">
                    <div className="card text-left">
                        <div className="card-header bg-dark text-light">
                            <h3>FORM ĐĂNG KÝ</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <p style={{ fontSize: 25 }}>Tài khoản</p>
                                        <input className="form-control" value={taiKhoan} name="taiKhoan" id=""
                                            onChange={this.handleChange} /> {/* nếu ko có dấu ngoặc() thì khi xảy ra sự kiện mới chạy hàm */}
                                        <p className="text-danger">{this.state.errors.taiKhoan}</p>
                                    </div>
                                    <div className="form-group">
                                        <p style={{ fontSize: 25 }}>Mật khẩu</p>
                                        <input type="password" value={matKhau} className="form-control" name="matKhau" id=""
                                            onChange={this.handleChange} />
                                        <p className="text-danger">{this.state.errors.matKhau}</p>
                                    </div>
                                    <div className="form-group">
                                        <p style={{ fontSize: 25 }}>Email</p>
                                        <input type="email" value={email} className="form-control" name="email" id=""
                                            onChange={this, this.handleChange} />
                                        <p className="text-danger">{this.state.errors.email}</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <p style={{ fontSize: 25 }}>Họ tên</p>
                                        <input value={hoTen} className="form-control" name="hoTen" id=""
                                            onChange={this.handleChange} />
                                        <p className="text-danger">{this.state.errors.hoTen}</p>
                                    </div>
                                    <div className="form-group">
                                        <p style={{ fontSize: 25 }}>Số điện thoại</p>
                                        <input value={soDt} className="form-control" name="soDt" id=""
                                            onChange={this.handleChange} />
                                        <p className="text-danger">{this.state.errors.soDt}</p>
                                    </div>
                                    <div className="form-group">
                                        <p style={{ fontSize: 25 }}>Mã loại người dùng</p>
                                        <select value={maLoaiNguoiDung} className="form-control" name="maLoaiNguoiDung" id="">
                                            <option value="KhachHang">Khách hàng</option>
                                            <option value="QuanTri">Quản trị</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="text-right col-12">
                                    <button className="btn btn-success">Đăng ký</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <TableUser></TableUser>
            </Fragment>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        nguoiDungEdit: state.BTQuanLyNguoiDungReducer.nguoiDungEdit
    }
}

export default connect(mapStateToProps)(Validation_Form);