import React, { Component } from 'react'
import { connect } from 'react-redux'
import styeBauCua from './BTGameBauCua.module.css'
class XucXac extends Component {
    render() {
        let numberNN= Date.now();
        let keyframeCSS = `@keyframes animateBauCua${numberNN} {
            0% {
                left: -50px
            }
            25% {
                left: 50px
            }
            50% {
                left: 0px
            }
            75% {
                left: -50px
            }
            100% {
                left: 50px
            }
        }
        
        .xucXac {
            left: 0px;
            position: relative;
            animation: animateBauCua${numberNN} 0.1s;
        }`

        return (
            <div>
                <style>
                    {keyframeCSS}
                </style>
                <div className="row text-center my-5">
                    <div className="col-4 xucXac" >
                        <img src={this.props.xucXac[0].hinhAnh} height={50} alt="" />
                    </div>
                    <div className="col-4 xucXac">
                        <img src={this.props.xucXac[1].hinhAnh} height={50} alt="" />
                    </div>
                    <div className="col-4 xucXac">
                        <img src={this.props.xucXac[2].hinhAnh} height={50} alt="" />
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-success" style={{ fontSize: 25 }} onClick={()=>{this.props.playGame()}}>Xốc</button>
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

const mapDispatchToProps = (dispatch)=>{
    return{
        playGame:()=>{
            dispatch({
                type: 'PLAY_GAME'
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(XucXac);
