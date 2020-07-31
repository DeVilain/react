import React, { Component } from 'react'
import {connect} from 'react-redux'

export default class BanCuoc extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="display-4 text-center">Bài tập game xúc xắc</h3>
                <div className="row text-center">
                    <div className="col-4">
                        <button className="p-5 btn bg-danger text-light">
                            <p className="display-4">TÀI</p>
                        </button>
                    </div>
                    <div className="col-4">
                        <img src="./img/gameXucXac/1.png" alt="" width={50} height={50} style={{borderRadius:'10px'}}/>
                        <img src="./img/gameXucXac/2.png" alt="" width={50} height={50} style={{borderRadius:'10px'}}/>
                        <img src="./img/gameXucXac/3.png" alt="" width={50} height={50} style={{borderRadius:'10px'}}/>
                    </div>
                    <div className="col-4">
                        <button className="p-5 btn bg-dark text-light">
                            <p className="display-4">XỈU</p>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

/*const mapStateToProps = (state)=>{
    return {

    }
}

export default connect()*/
