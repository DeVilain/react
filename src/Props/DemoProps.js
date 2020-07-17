import React, { Component } from 'react'
import Child from './Child'

export default class DemoProps extends Component {
    render() {
        let product = {
            id: 1,
            name: 'Iphone X',
            price: 2000,
            image: 'https://picsum.photos/100'
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Child productProps={product}></Child>
                    </div>
                </div>
            </div>
        )
    }
}
