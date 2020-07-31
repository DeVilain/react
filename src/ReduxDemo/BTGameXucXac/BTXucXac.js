import React, { Component } from 'react'
import BanCuoc from './BanCuoc'
import KetQuaTroChoi from './KetQuaTroChoi'
import style from './BTXucXac.module.css'
export default class BTXucXac extends Component {
    render() {
        return (
            <div className={style.gameXucXac} style={{backgroundImage:'url("./img/gameXucXac/bgGame.png")', width:'100%', height:'100%', position:'fixed', left:0, top:0}}>
                <BanCuoc></BanCuoc>
                <KetQuaTroChoi></KetQuaTroChoi>
            </div>
        )
    }
}
