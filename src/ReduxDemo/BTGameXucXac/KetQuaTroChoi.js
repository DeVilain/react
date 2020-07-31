import React, { Component } from 'react'

export default class KetQuaTroChoi extends Component {
    render() {
        return (
            <div className="container text-center display-4">
                <div>Bạn chọn: <span className="text-danger">TÀI</span></div>
                <div>Số bàn thắng: <span className="text-success">0</span></div>
                <div>Tổng số bàn chơi: <span className="text-dark">0</span></div>
            </div>
        )
    }
}
