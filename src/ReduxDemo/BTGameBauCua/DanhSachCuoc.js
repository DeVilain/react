import React, { Component } from 'react'
import { connect } from 'react-redux'

class DanhSachCuoc extends Component {
    renderDanhSachCuoc = () => {
        return this.props.danhSachCuoc.map((quanCuoc, index) => {
            return <div className="col-4 mt-3 text-center" key={index}>
                <img src={quanCuoc.hinhAnh} alt="" height={140} />
                <br />
                <span className="mt-2 mr-2" style={{ fontSize: 25 }}>Cược:</span>
                <button className="btn btn-info" style={{ fontSize: 25, borderRadius: '30%' }} onClick={()=>{this.props.datCuoc(quanCuoc.ma, true)}}>+</button>
                <span className="text-danger" style={{ fontSize: 25 }}>{quanCuoc.diemCuoc}</span>
                <button className="btn btn-info" style={{ fontSize: 25, borderRadius: '30%' }} onClick={()=>{this.props.datCuoc(quanCuoc.ma, false)}}>-</button>
            </div>
        })
    }

    render() {
        return (
            <div className="my-4">
                <div className="row my-3">
                    {this.renderDanhSachCuoc()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachCuoc: state.BTGameBauCuaReducer.danhSachCuoc
    }
}

// Tạo ra props là hàm cho component DanhSachCuoc
const mapDispatchToProps = (dispatch)=>{
    return{
        datCuoc:(maQuanCuoc, tangGiam)=>{
            console.log('Mã quân cược', maQuanCuoc);
            console.log('tangGiam', tangGiam);
            dispatch({
                type: 'DAT_CUOC',
                ma: maQuanCuoc,
                tangGiam
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCuoc);