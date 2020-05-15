
// export default {

//   namespace: 'example',

//   state: {},

//   subscriptions: {
//     setup({ dispatch, history }) {  // eslint-disable-line
//     },
//   },

//   effects: {
//     *fetch({ payload }, { call, put }) {  // eslint-disable-line
//       yield put({ type: 'save' });
//     },
//   },

//   reducers: {
//     save(state, action) {
//       return { ...state, ...action.payload };
//     },
//   },

// };

// 变量声明 var 是函数作用域， let 和 const 是块级作用域
const DELAY = 1000;
let count = 0;
count = count + 1;

// 模板字符串
const user = 'world';
console.log('hello ${user}'); 


