import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    // xác định nguồn dữ liệu thay đổi
    state = {
        srcImg: './img/red-car.jpg'
    }
    // set state mới khi chọn màu
    changColor = (newImgsrc) => {
        this.setState({srcImg:newImgsrc})
    }
    render() {
        return (
            <div className="container-fluid bg-info py-5">
                <h3 className="text-center">Bài tập chọn xe</h3>
                <div className="row">
                    <div className="col-6">
                        <img className="w-100" src={this.state.srcImg} alt="red-car.jpg" />
                    </div>
                    <div className="col-6">
                        <h4 className="text-center">Chọn màu xe</h4>
                        <div className="row">
                            <div className="col-3">
                                <button className="btn btn-danger" onClick={()=>this.changColor('./img/red-Car.jpg')}></button>
                            </div>
                            <div className="col-3">
                                <button style={{backgroundColor:'silver'}} className="btn" onClick={()=>this.changColor('./img/silver-Car.jpg')}></button>
                            </div>
                            <div className="col-3">
                                <button className="btn btn-dark" onClick={()=>this.changColor('./img/steel-Car.jpg')}></button>
                            </div>
                            <div className="col-3">
                                <button style={{backgroundColor:'black'}} className="btn" onClick={()=>this.changColor('./img/black-Car.jpg')}></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
