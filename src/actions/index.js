import { ADD_DATA, DELETE_DATA, EDIT_DATA, SAVE_DATA } from "../constant";


export const addData = (domain, range) => {
    const action = {
        type: ADD_DATA,
        domain,
        range
    }
    console.log('action in addData', action)
    return action
}

export const deleteData = (id) => {
    const action = {
        type: DELETE_DATA,
        id
    }
    console.log('action in delete', action)
    return action
}

export const editData = (index) => {
    const action ={
        type: EDIT_DATA,
        index
    }
    console.log('action in editData', action)
    return action
}

export const saveData = (index, e_domain, e_range) => {
    const action = {
        type: SAVE_DATA,
        index,
        e_domain,
        e_range
    }
    console.log('action in saveData', action)

    return action
}