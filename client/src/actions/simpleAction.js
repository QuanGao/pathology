// const simpleAction = () => {
//   return (dispatch) => {
//     dispatch({
//       type: 'SIMPLE_ACTION',
//       payload: 'result_of_simple_action'
//     })
//   }
// }
const simpleAction = () => {
  return {
      type: 'SIMPLE_ACTION',
      payload: 'result_of_simple_action'
    }
}
export default simpleAction;