export function explore(state={}, action){
    switch(action.type){
        case  'EXPLORE' :{
            debugger;
            return {...state,data:action.data}
        }
        default:
            return state;
    }
  
}