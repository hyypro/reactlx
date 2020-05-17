import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import promise from 'redux-promise' // 可以让 action 以异步的方式去写
import thunk from 'redux-thunk' // action 函数方式写
import { persistReducer } from 'redux-persist' // 合并 reduce
import storage from 'redux-persist/lib/storage' // 创建 store
// 多层对象 做数据持久化
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { login, table, home } from '@/reducer'

// 我要对哪些 reduce 的 state 做数据持久化
const rootPersistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  // 白名单 [reducer 目录内的 reduce 文件名]
  whitelist: ['login', 'table',],  
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// 抽离出一个需要持久化的公共 reduce
const myPersistReducer = persistReducer(
  rootPersistConfig,
  combineReducers({
    login,
    table,
    home
  }
))

// createStore(reduce, 中间件)
const store = createStore(
  myPersistReducer,
  composeEnhancers(applyMiddleware(thunk, promise))
)

export { store }