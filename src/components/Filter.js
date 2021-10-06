import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
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

