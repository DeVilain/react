import React, { Component } from 'react'
import { connect } from 'react-redux'
class DiemThuong extends Component {
    render() {
        return (
            <div className="text-center my-5">
                <span className="display-4 bg-danger py-3 px-3" style={{ fontSize: 35 }}>Tiền thưởng: <span className="text-info">{this.props.diemThuong}$</span></span>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        diemThuong: state.BTGameBauCuaReducer.diemThuong,
    }
}
export default connect(mapStateToProps)(DiemThuong);