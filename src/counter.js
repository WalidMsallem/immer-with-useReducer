import React, { Component ,useReducer } from 'react'
import {countReducer as reducer} from './Reducers'

function Counter() {
 
const [state , dispatch]= useReducer(reducer, {count: 0} )
    return (
        <div className="container">
            <button onClick = {()=> {
                dispatch({type : 'PLUS' })
            }}>plus</button>
            <span>{state.count}</span>
            <button onClick = {()=> {
                dispatch({type : 'MOIN' })
            }}>moin</button>
        </div>
    )
}
 
 
  export default  Counter




 