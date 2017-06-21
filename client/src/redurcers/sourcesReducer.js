const initialState = {
  sources:[]
}

export default (state=initialState, action) => {
  console.log('actions-------',action);
    switch (action.type) {
      case 'loadData_PENDING': {
        console.log('masuk sono---');
        return {...state, sources:[] }; break; }
      case 'loadData_FULFILLED': {
        console.log('masuk sini---');
        return {...state, sources:action.payload.data.sources }; break; }
      default: { return state; break; }
    }
}
