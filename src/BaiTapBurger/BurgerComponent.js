import React, { Component } from 'react'
import './Burger.css'
import { connect } from 'react-redux'

class BurgerComponent extends Component {
    renderBurger = ()=>{
        let {burger}= this.props;
        return Object.entries(burger).map(([item, value], index)=>{
            let foodSpace = [];
            for(let i =0; i<value; i++ ){
                foodSpace.push(<div className={item} key={index}></div>)
            }
            return foodSpace;
        })
    }

    render() {
        return (
            <div>
                <div className="breadTop"></div>
                {this.renderBurger()}
                <div className="breadBottom"></div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        burger: state.BurgerReducer.burger,
    }
}

export default connect(mapStateToProps)(BurgerComponent);
