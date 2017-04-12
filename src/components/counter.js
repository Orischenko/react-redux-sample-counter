import React, { Component, PropTypes } from 'react';
import store from './../store';
import { increment } from './../AC';

export default class Counter extends Component{
    static PropTypes = {

    };

    state = {
        counter: store.getState().count
    };

    componentDidMount() {
        store.subscribe(this._handlerStoreChange)
    }

    render() {
        return(
            <div>
                <h2>{ this.state.counter }</h2>
                <a href="#!" className="increment" onClick={ this._handlerIncrement }>increment me</a>
            </div>
        );
    }

    _handlerIncrement = (event) => {
        event.preventDefault();

        store.dispatch(increment());
    };

    _handlerStoreChange = () => {
        this.setState({
            counter: store.getState().count
        })
    }
}