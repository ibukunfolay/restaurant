import { ORDER_ITEM_LIST } from "../constants/orderConstants"

function orderReducer(state={orderItems: []}, action){
    switch (action.type){

        case ORDER_ITEM_LIST:
            const item = action.payload
            return{orderItems: item}
        default:
            return state

    }

}

export {orderReducer}