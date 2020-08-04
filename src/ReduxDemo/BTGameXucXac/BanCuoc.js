import React, { Component } from 'react'
import { connect } from 'react-redux'

class BanCuoc extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="display-4 text-center">Game xúc xắc</h3>
                <div className="row text-center">
                    <div className="col-4">
                        <button className="p-5 btn bg-danger text-light" onClick={()=>{this.props.dispatch({
                            type: 'DAT_CUOC_XUC_XAC',
                            banChon: 'TÀI'
                            })}}>
                            <p className="display-4">TÀI</p>
                        </button>
                    </div>
                    <div className="col-4">
                        {this.props.mangXucXac.map((xucXac, index) => (
                           <img key={index} src={xucXac.hinhAnh} alt="" width={50} height={50} />
                        ))}

                    </div>
                    <div className="col-4">
                        <button className="p-5 btn bg-dark text-light" onClick={()=>{this.props.dispatch({
                            type:'DAT_CUOC_XUC_XAC',
                            banChon:'XỈU'
                        })}}>
                            <p className="display-4">XỈU</p>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    mangXucXac: state.BTGameXucXacReducer.mangXucXac,
    banChon: state.BTGameXucXacReducer.banChon
})

export default connect(mapStateToProps)(BanCuoc)
