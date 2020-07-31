import React, { Component } from 'react'
import style from './BTGameBauCua.module.css'
import DanhSachCuoc from './DanhSachCuoc'
import XucXac from './XucXac'
import DiemThuong from './DiemThuong'
export default class BTGameBauCua extends Component {
    render() {
        return (

            <div className={`${style.gameBauCua}`}>
                <div className="container">
                    <div className="display-4 text-center text-danger"> Bài tập Bầu Cua CyberSoft</div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <DiemThuong></DiemThuong>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            <DanhSachCuoc></DanhSachCuoc>
                        </div>
                        <div className="col-3">
                            <XucXac></XucXac>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
