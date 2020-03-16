import React from 'react'
import { connect } from 'react-redux'

function Cart(props) {
    const {cart,total,dispatch}= props

    const removeItem=(id)=>{
         dispatch({type:"removeitem",payload:id})
    }
    const removeAll=()=>{
        dispatch({type:"deleteall"})
    }
    return (
        <div>
            <ul>
        {cart.map(item=>{
            return(
                <div key={item.id}>
                <li> {item.title} | {item.price} | x {item.number}} </li>
                <button onClick={()=>removeItem(item.id)}>Remove Item</button>
                <button onClick={()=>removeAll()}>Delete All</button>
                </div>
            )
        })}
            </ul>

            Total: {total}
        </div>
    )
}


const mapStateToProps=(state)=>{
    return state
}

export default connect(mapStateToProps)(Cart)