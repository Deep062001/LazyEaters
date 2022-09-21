// eslint-disable-next-line import/no-anonymous-default-export
export default (cartItems = [], action) => {
    switch (action.type) {
        case 'GET_ITEMS':
            return action.payload;
        case 'ADD_ITEM':
            // return (cartItems.map(item=> item.id).find(action.payload.id))? cartItems.map(item=>{
            //     if(item.id===action.payload.id){
            //         return {...item, quantity: [item["quantity"]+1]}
            //     }
            //     else{
            //         return item;
            //     }
            // }):
            // [...cartItems, {...action.payload, quantity: 1}];
            return [...cartItems, action.payload];
        default:
            return cartItems;
    }
};