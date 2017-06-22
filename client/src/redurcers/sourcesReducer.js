const initialState = {
  sources:[]
}

export default (state=initialState, action) => {

    switch (action.type) {
      case 'loadData_PENDING': {
        return {...state, sources:[] }; break; }
      case 'loadData_FULFILLED': {
        return {...state, sources:action.payload.data.sources }; break; }
      default: { return state; break; }
    }
}
