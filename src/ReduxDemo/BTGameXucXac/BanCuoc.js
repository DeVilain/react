import React, { Component } from 'react'
import { connect } from 'react-redux'

class BanCuoc extends Component {

    render() {
        let quanCuoc = this.props;
        return (
            <div className="container">
                <h3 className="display-4 text-center">Bài tập game xúc xắc</h3>
                <div className="row text-center">
                    <div className="col-4">
                        <button className="p-5 btn bg-danger text-light" onClick={()=>{this.props.dispatch({
                            type:'DAT_CUOC_XUC_XAC',
                            banChon: 'TÀI'
                        })}}>
                            <p className="display-4">Tài</p>
                        </button>
                    </div>
                    <div className="col-4">
                        {/** cách viết trực tiếp */}
                        {this.props.mangXucXac.map((xucXac, index) => (
                            <img src={xucXac.hinhAnh} key={index} width={50} height={50} alt="" />
                        ))}
                    </div>
                    <div className="col-4">
                        <button className="p-5 btn bg-dark text-light" onClick={()=>{this.props.dispatch({
                            type:'DAT_CUOC_XUC_XAC',
                            banChon:'XỈU'
                        })}}>
                            <p className="display-4">Xỉu</p>
                        </button>
                    </div>
                </div>
                

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangXucXac: state.BTGameXucXacReducer.mangXucXac,
        banChon: state.BTGameXucXacReducer.banChon
    }
} // state => {return{key: value}} ~~ state => ({key:value})



export default connect(mapStateToProps)(BanCuoc);
