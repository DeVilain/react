import React, { Component } from 'react'
import cssDataBinding from './DataBinding.module.css'

export default class DataBinding extends Component {
    // thuộc tính
    name = "frontEnd44";
    img = 'https://picsum.photos/300/300';
    // phương thức
    renderImg = ()=>{
        let obStyle = {fontWeight:'bold'};
        return <div className="card w-25">
            
            <h1 className={`${cssDataBinding.title}`}>Đây là hình ảnh 1</h1>
            
            <h2 style={obStyle} className={`${cssDataBinding.title}`}>Đây là hình ảnh 2</h2>
            <img className="card-img-top" src={this.img} alt="123"/>
        </div>
    }
    render() {
        let title = 'CYBERSOFT - FE 44';
        let srcImg = 'https://picsum.photos/200/200';
        // binding hàm
        
        let renderText =()=>{
            //Trả về chuỗi hoặc số hoặc đoạn html react(jsx)
            return <div>
                <h1>Hello 123</h1>
            </div>
        }
        return (
            <div>
                {this.renderImg()}
                <h1 id="title">{title}</h1>
                <img src={srcImg} alt="123" />
                {renderText()}
                <p>Name: {this.name}</p>
            </div>
        )
    }
}
