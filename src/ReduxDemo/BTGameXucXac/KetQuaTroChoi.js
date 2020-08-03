import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {

    render() {
        return (
            <div className="container text-center display-4">
                <div>Bạn chọn: <span className="text-danger">{this.props.banChon}</span></div>
                <div>Số bàn thắng: <span className="text-success">{this.props.soBanThang}</span></div>
                <div>Tổng số bàn chơi: <span className="text-dark">{this.props.soBanChoi}</span></div>

                <button className="btn btn-success mt-4 p-3" onClick={() => {
                    var number = 0;
                    let randomXiNgau = setInterval(() => {
                        number++;
                        this.props.dispatch({ type: 'RANDOM_XI_NGAU' });
                        if (number > 10) {// random 10 lần 
                            // dừng hàm lặp random trước khi tính điểm
                            clearInterval(randomXiNgau);

                            // dispatch tính điểm
                            this.props.dispatch({
                                type: 'TINH_DIEM'
                            })
                        }
                    }, 50);


                }}><span className="display-4">Play game</span></button>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    banChon: state.BTGameXucXacReducer.banChon,
    soBanThang: state.BTGameXucXacReducer.soBanThang,
    soBanChoi: state.BTGameXucXacReducer.soBanChoi
}) // cách viết gọn hơn, lược bỏ đc return



export default connect(mapStateToProps)(KetQuaTroChoi)