import React, { Component } from 'react'
import Car from './Car';

export default class DsCar extends Component {
    renderProduct=()=>{
        let {arrCar} = this.props;
        return arrCar.map((car, index)=>{
            return <div className="col-4" key={index}>
                <Car product={car} addToCart={this.props.addToCart}></Car>
            </div>
        })
    }
    

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
