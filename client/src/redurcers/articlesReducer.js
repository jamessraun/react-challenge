const initialState = {
  articles : [],
  source:''
}

export default (state = initialState, action) => {

  switch (action.type) {
    case 'submitHandle_PENDING': {return { ...state, articles:[], source:'' }; break; }
    case 'submitHandle_FULFILLED': {return { ...state, articles:action.payload.data.articles, source:action.payload.data.source }; break; }
    default : { return state; break; }
  }

}
