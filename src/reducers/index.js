import { ADD_DATA, DELETE_DATA, EDIT_DATA, SAVE_DATA } from "../constant";

const addData = action => {
  let { domain, range } = action;
  console.log("action: ", action);
  return {
    id: Math.random(),
    domain,
    range
  };
};

const deleteDataById = (state = [], id) => {
  const datas = state.filter(data => data.id !== id);
  console.log("new reducer: ", datas);
  return datas;
};

const editData = (state = [], index) => {
  let datas = state.map((data, i) =>
    i === index ? { ...data, editStatus: true } : data
  );
  return datas;
};

const saveData = (state = [], index) => {
  let datas = state.map((data, i) =>
    i === index
      ? {
          ...data,
          editStatus: false,
          domain: state.e_domain,
          range: state.e_range
        }
      : data
  );
  return datas;
};

const datas = (state = [], action) => {
  let datas = [];
  switch (action.type) {
    case ADD_DATA:
      datas = [...state, addData(action)];
      console.log("datas as state: ", datas);
      return datas;
    case DELETE_DATA:
      datas = deleteDataById(state, action.id);
      return datas;
    case EDIT_DATA:
      datas = editData(state, action.index);
      return datas;
    case SAVE_DATA:
      datas = saveData(state, action.index);
      return datas;
    default:
      return state;
  }
};
export default datas;
