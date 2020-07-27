import React, { Component } from 'react'
import DsCar from './DsCar'
import ModalCart from './ModalCart'

export default class BTCar extends Component {
    arrCar = [
        { "carId": 1, "carName": "Huyndai", "price": 5700, "image": "./img/black-car.jpg" },
        { "carId": 2, "carName": "Cheverlot", "price": 7600, "image": "./img/red-car.jpg" },
        { "carId": 3, "carName": "Mazda", "price": 2700, "image": "./img/silver-car.jpg" }
    ]

    state = {
        carCart: []
    }

    addToCart = (productClick) => {
        let productCart = {
            carId: productClick.carId,
            carName: productClick.carName,
            price: productClick.price,
            image: productClick.image,
            amount: 1
        }

        let productCartUpdate = [...this.state.carCart];
        let index = productCartUpdate.findIndex(pCart => pCart.carId === productCart.carId);
        if (index !== -1) {
            productCartUpdate[index].amount += 1;
        } else {
            productCartUpdate.push(productCart);
        }
        this.setState({ carCart: productCartUpdate });
    }

    deleteFromCart = (carId) => {
        let productCartUpdate = [...this.state.carCart];
        let index = productCartUpdate.findIndex(spGH => spGH.carId === carId);
        if (index !== -1) {
            productCartUpdate.splice(index, 1);
        }
        this.setState({ carCart: productCartUpdate });
    }

    changeAmount = (carId, change) => {
        let productCartUpdate = [...this.state.carCart];
        let index = productCartUpdate.findIndex(spGH => spGH.carId === carId);
        if (index !== -1) {
            if (change) {
                productCartUpdate[index].amount += 1;
            } else {
                if (productCartUpdate[index].amount > 1) {
                    productCartUpdate[index].amount -= 1;
                } else {
                    alert('Số lượng tối thiểu là 1 !!!');
                }
            }
        }
        this.setState({ carCart: productCartUpdate });
    }

    render() {
        return (
            <div>
                <DsCar arrCar={this.arrCar} addToCart={this.addToCart}></DsCar>
                <ModalCart carCart={this.state.carCart} deleteFromCart={this.deleteFromCart} changeAmount={this.changeAmount}></ModalCart>
            </div>
        )
    }
}
