
import data from "../data.json"
let initialState={
    items: data,
    total:0,
    cart:[]
}

export const Reducer=(state=initialState,action)=>{
        switch(action.type){
            case "addtocart":
                let Item = state.items.find(({id})=>id===action.payload)
                let copyItems=state.items.map(item=>{
                    if(item.id===action.payload){
                        item.inventory=item.inventory-1
                        item.number=item.number+1
                        return item
                    }else{
                        return item
                    }
                })
                if(state.cart.includes(Item)){
                    return {...state,items:copyItems,total:state.total+Item.price}
                }else{
                    return {items:copyItems,cart:[...state.cart,Item],total:state.total+Item.price}
                }
               


            case "removeitem":
                let findItem= state.items.find(({id})=>id===action.payload)
                 let CopyCart=[...state.cart]
                let index=CopyCart.indexOf(findItem)
                 
                if(findItem.number>1){
                    CopyCart.map(item=>{
                        if(item.id===findItem.id){
                            item.number=item.number-1
                            return item
                        }else{
                            return item
                        }
                    })
                }else{
                 CopyCart.splice(index,1)
                }
                
            

            
                let copyItems1=state.items.map(item=>{
                    if(item.id===action.payload){
                        item.inventory=item.inventory+1
                        return item
                    }else{
                        return item
                    }
                })
                return {items:copyItems1,cart:CopyCart, total:state.total-findItem.price}

            case "deleteall":
               let resetItems=state.items.map(item=>{
                   item.inventory=item.inventory+item.number
                   item.number=0
                   return item
               })
                    return {items:resetItems,cart:[],total:0}
            default:
                return state
        }
}
