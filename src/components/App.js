import React, { useReducer } from 'react';
import reducer, { initialState } from '../reducers';
import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import { applyNumber, changeOperation } from '../actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const applyNumHandler = (value) => {
    dispatch(applyNumber(value));
  }

  const operationHandler = (operation) => {
    dispatch(changeOperation(operation));
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {applyNumHandler(1)}} value={1}/>
              <CalcButton onClick={() => {applyNumHandler(2)}} value={2}/>
              <CalcButton onClick={() => {applyNumHandler(3)}} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {applyNumHandler(4)}} value={4}/>
              <CalcButton onClick={() => {applyNumHandler(5)}} value={5}/>
              <CalcButton onClick={() => {applyNumHandler(6)}} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {applyNumHandler(7)}} value={7}/>
              <CalcButton onClick={() => {applyNumHandler(8)}} value={8}/>
              <CalcButton onClick={() => {applyNumHandler(9)}} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {operationHandler("+")}} value={"+"}/>
              <CalcButton onClick={() => {operationHandler("*")}} value={"*"}/>
              <CalcButton onClick={() => {operationHandler("-")}} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
