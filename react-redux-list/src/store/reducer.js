const tiger = 0

//这是reducer
const reducer = (state = tiger, action) => {
    switch (action.type) {
        case '加':
			return  state += 1
        case '减':
            return  state < 0 ? state = 0 : state -= 1
        default:
            return state;
    }
}
export default reducer