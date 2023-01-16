import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) =>{
    if(action.type==="INCREMENT"){
        return state+1; 
    }
    if(action.type==="DECREMENT"){
        if(state==0){
            alert("it's Zero");
        }else{
        return state-1;
        } 
    }
    return state; 
}
const Tryreducre = () =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
    <div className="bg-danger mx-auto mt-5  py-5" style={{width:"30%"}}>
    <h1 className="text-center py-4">{state}</h1>
    <div className="d-flex justify-content-between">
            <button className="btn btn-primary w-50 mx-3" onClick={()=>dispatch({type: "INCREMENT"})}>INC</button>
            <button  className="btn btn-info w-50 mx-3"  onClick={()=>dispatch({type: "DECREMENT"})}>DEC</button>
        </div>
    </div>
 );
}
export default Tryreducre;