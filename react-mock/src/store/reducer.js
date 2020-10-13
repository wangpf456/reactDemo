const defaultState = { // 默认数据
    inputValue: 'focusdroid',
    list: [ '北京', '上海', ],
    disabled: false
}
// reducer 只能接受state，决不能修改state
let reducer = (state, action) => {
    if(!state) state = defaultState
    switch(action.type){
        case 'AA':
            state.disabled = action.value
            return state
        default: 
            return state
    }
}
export default reducer;