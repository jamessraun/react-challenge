import { combineReducers } from 'redux'

import articlesReducer from './articlesReducer'
import sourcesReducer from './sourcesReducer'

export default combineReducers({ articlesReducer, sourcesReducer })
