import { createStore } from "redux";

const INITIAL_VALUE={
    counter:0,
    toggle_value:false,
};
const counterReducer=(store=INITIAL_VALUE,action)=>{
    if(action.type==="Increment"){
        return {...store,counter:store.counter+1};
    }
    else if(action.type==="Decrement"){
        return {...store,counter:store.counter-1};
    }
    else if(action.type==="Add"){
        return {...store,counter:store.counter+Number(action.payload)};
    }
    else if(action.type==="Subtract"){
        return {...store,counter:store.counter-Number(action.payload)};
    }
    else if(action.type==="Toggle"){
        return {...store,toggle_value:!store.toggle_value};
    }
    
    return store;
}

const counterStore=createStore(counterReducer);

export default counterStore;