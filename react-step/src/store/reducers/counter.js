import * as Types from '../action-types';//引入动作类型
let initState = {//初始状态
    number: 0
}
function counter(state = initState,action){//接收state和action两个参数,并给state赋予初始值
    switch(action.type){//判断动作类型
        case Types.INCREMENT: 
            return {number:state.number+action.count};
        case Types.DECREMENT:
            return {number:state.number-action.count < 0 ? state.number = 0 : state.number-action.count};
    }
    return state
}
export default counter