import React, { Component } from 'react'
import '../components/Header.css'

export default class header extends Component {
    render() {
        return (
            <div className="list">
                <div className="bd">
                    <h1>Game Over</h1>
                    <label>
                        Order by:
                        <select className="form-control" value={this.props.sort} onChange={this.props.handleChangeSort}>
                            <option value="">Select</option>
                            <option value="price">Price</option>
                            <option value="score">Score</option>
                            <option value="name">Name</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}

