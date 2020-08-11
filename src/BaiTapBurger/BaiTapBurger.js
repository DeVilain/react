import React, { Component } from 'react'
import BurgerComponent from './BurgerComponent'
import MenuComponent from './MenuComponent'

export default class BaiTapBurger extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="text-danger text-center mt-5">Bài tập Burger</h2>
                <div className="row mt-5">
                    <div className="col-7">
                        <BurgerComponent></BurgerComponent>
                    </div>
                    <div className="col-5">
                        <MenuComponent></MenuComponent>
                    </div>
                </div>
            </div>
        )
    }
}
