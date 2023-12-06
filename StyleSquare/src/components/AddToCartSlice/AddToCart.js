const reducer = (state,action)=>{
    if(action.type === 'add-to-cart'){
        const newItem = {
            id:action.payload.id,
            name:action.payload.name,
            quantity:1,
            price:action.payload.price,
        }

        console.log(state.item); // Clear
        state.item.map((item)=>{
            const {id} = item
            console.log(id)
        })
        console.log(typeof(newItem.id)); // Clear`
        console.log(typeof(state.item.id)); // undefined because It is collection of many items not a single Item

        // check whether the item already exist or not 

        const exitingItem  = state.item.find((item)=>{
            const {id} = item;
            console.log(typeof(id));
            return id === newItem.id // fixed

            // if (id === newItem.id) {
            //     console.log('same');
            // }
            // console.log(typeof(newItem.id));
            // console.log('I m work');
        })

        console.log(exitingItem);

        if(exitingItem){
            // clear
            console.log('It already exist');
            const updatedCart = state.item.map((item)=>{

                if(item.id === newItem.id){
                    console.log('same id');
                    return {...item,quantity:item.quantity+1};
                }
                return item;
            })

            return {...state,item:updatedCart}
        }else{
            return {...state,item:[...state.item,newItem]};
        }
    }
    if(action.type==='Remove-Item'){
        return{
            ...state,
            item:state.item.filter((currElem)=>{
                return currElem.id !== action.payload
            })
        }
    }
    if(action.type === 'clear-cart'){
        return{
            ...state,
            item:[]
        }
    }
    if(action.type==='increment'){
        let updatedCart = state.item.map((item)=>{
            if(item.id===action.payload){
                return{...item,quantity:item.quantity+1}
            }
            return item;
        })
        return {...state,item:updatedCart}
    }

    if(action.type==='decrement'){
        let updatedCart = state.item.map((curElem)=>{
            if(curElem.id==='action.payload'){
                return {...curElem,quantity:curElem.quantity-1}
                // if this statement is true then decrement quantity
            }
            return curElem;
        })
        .filter((curElem)=>{
            curElem.quantity !== 0
        })
        return {...state,item:updatedCart};
    }
    return state;
}

export default reducer