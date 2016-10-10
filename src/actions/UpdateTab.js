import * as types from '../constants/actionTypes';

export function UpdateTab(tab) {
    return {
        type: types.UpdateTab,
        data:tab
    }
}