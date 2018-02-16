/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-06 11:53:01
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-02-06 11:53:20
*/

export function createReducer(actionResponse, defaultState) {

    return (state, action) => {
        if (actionResponse.hasOwnProperty(action.type)) {
            return actionResponse[action.type](state, action);
        } else {
            return state || defaultState;
        }
    }
}
