import React from 'react'
import { connect } from 'react-redux'

function ProductList(props) {
    console.log(props.items)
    const {items,dispatch}= props

    const addtoCart=(id)=>{
        dispatch({type:"addtocart",payload:id})
    }
    return (
        <div>
            <ul>
                {items.map(item=>{
                    return(
                        <div key={item.id}> 
                        <li> {item.title} | {item.price} | x {item.inventory}} </li>
                    <button disabled={item.inventory===0} onClick={()=>addtoCart(item.id)}> {item.inventory===0? "sold out" :"Add to Cart" }</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return state
}

export default connect(mapStateToProps)(ProductList)