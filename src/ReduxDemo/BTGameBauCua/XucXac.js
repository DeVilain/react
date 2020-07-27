import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {
    
    render() {
        return (
            <div>
                <div className="row text-center my-5">
                    <div className="col-4">
                        <img src={this.props.xucXac[0].hinhAnh} height={50} alt="" />
                    </div>
                    <div className="col-4">
                        <img src={this.props.xucXac[1].hinhAnh} height={50} alt="" />
                    </div>
                    <div className="col-4">
                        <img src={this.props.xucXac[2].hinhAnh} height={50} alt="" />
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-success" style={{ fontSize: 25 }}>Xốc</button>
                </div>
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        xucXac: state.BTGameBauCuaReducer.xucXac
    }
}

export default connect(mapStateToProps)(XucXac);
