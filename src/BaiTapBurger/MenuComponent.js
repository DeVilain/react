import React, { Component } from 'react'
import { connect } from 'react-redux'

class MenuComponent extends Component {
    renderMenu = () => {
        let { menu, burger } = this.props;
        return Object.entries(menu).map(([food, price], index) => {
            return (
                <tr>
                    <td>{food}</td>
                    <td>
                        <button className="btn btn-success" onClick={()=>{
                            this.props.dispatch({
                                type: 'TANG_GIAM_SL',
                                food,
                                price: 1,
                                tangGiam: true
                            })
                        }}>+</button>
                        {burger[food]}
                        <button className="btn btn-danger" onClick={()=>{
                            this.props.dispatch({
                                type: 'TANG_GIAM_SL',
                                food,
                                price: -1,
                                tangGiam: false
                            })
                        }}>-</button>
                    </td>
                    <td>{price*burger[food]}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>Thức ăn</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMenu()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td><b style={{fontSize: 25}}>Tổng tiền:</b></td>
                            <td><b style={{fontSize: 25}}>{this.props.total}</b> </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.BurgerReducer.menu,
        burger: state.BurgerReducer.burger,
        total: state.BurgerReducer.total
    }
}

export default connect(mapStateToProps)(MenuComponent);
