import React, { Component, PropTypes } from 'react';
import store from './../store';
import { increment } from './../AC';
import RaisedButtonExampleSimple from './button';

const style = {
    margin: 12,
};

export default class Counter extends Component{
    static PropTypes = {

    };

    state = {
        counter: store.getState().count
    };

    componentDidMount() {
        store.subscribe(this.handleStoreChange)
    }

    render() {
        return(
            <div>
                <h2>{ this.state.counter }</h2>
                <a href="#!" className="increment" onClick={ this._handlerIncrement }>increment me</a>

                <RaisedButtonExampleSimple />
            </div>
        );
    }

    _handlerIncrement = (event) => {
        event.preventDefault();

        store.dispatch(increment());
    };

    handleStoreChange = () => {
        this.setState({
            counter: store.getState().count
        })
    };
}