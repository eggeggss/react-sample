/* eslint-disable */
export default (state=10, action)=>{
    switch(action.type){
        case 'INCREASE':
            return state+1;
        default :
            return state;
    }
}