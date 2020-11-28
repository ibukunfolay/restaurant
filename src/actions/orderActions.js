import { ORDER_ITEM_LIST } from "../constants/orderConstants"
const { default: Axios } = require("axios")

const listOrder = () => async (dispatch)=>{
    try {
        const {data} = await Axios.get('https://indapi.kumba.io/webdev/assignment')
        dispatch({type: ORDER_ITEM_LIST, payload: {
            name: data.items.name,
            category: data.items.category,
            price: data.items.price,
            currency: data.items.currency,
            tax_pct: data.items.tax_pct,
            quantity: data.items.quantity,
        }})
        
    } catch (error) {
        
    }
}

export {listOrder}