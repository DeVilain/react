import React, { Component } from 'react'
import { connect } from 'react-redux'

class DanhSachCuoc extends Component {
    renderDanhSachCuoc = () => {
        return this.props.danhSachCuoc.map((quanCuoc, index) => {
            return <div className="col-4 mt-3" key={index}>
                <button className="border-0">
                    <img src={quanCuoc.hinhAnh} alt="" height={140} />
                </button>
                <br />
                <span className="mt-2 mr-4" style={{ fontSize: 25 }}>Cược:</span>
                <span className="text-danger" style={{ fontSize: 25 }}>{quanCuoc.diemCuoc}</span>
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

export default connect(mapStateToProps)(DanhSachCuoc);