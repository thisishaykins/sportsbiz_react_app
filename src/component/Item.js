import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, resetItem } from "../actions/itemAction";

import logo from '../assets/images/logo.svg';

const Counter = () => {
    const state = useSelector((state) => state)
    // console.log("store:", state);
    const dispatch = useDispatch();

    return (
        <div className="counter">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <h2>Number of Items in Counter: {state.itemsCount}</h2>
            <button 
                onClick={() => {
                    dispatch(addItem());
                }} 
                className="green">Add Item
            </button>
            <button 
                disabled={state.itemsCount > 0 ? false : true}
                onClick={() => {
                    dispatch(deleteItem());
                }} 
                className="red">Delete Item
            </button>
            <button 
                onClick={() => {
                    dispatch(resetItem());
                }} 
                className="blue">Reset Item
            </button>
        </div>
    )
}

export default Counter;