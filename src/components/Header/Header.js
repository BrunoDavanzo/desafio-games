import React, { Component } from 'react'

import '../Header/Header.css'

export default class header extends Component {
    render() {
        return (
            <div className="header">
                <div className="title">
                    <h1>Game Over</h1>
                    {/* <label>
                        Order by:
                        <select className="form-control" value={this.props.sort} onChange={this.props.handleChangeSort}>
                            <option value="select">Select</option>
                            <option value="price">Price</option>
                            <option value="score">Score</option>
                            <option value="name">Name</option>
                        </select>
                    </label> */}
                </div>
            </div>
        )
    }
}

