export const setFetchData = data => dispatch => {
  dispatch({
    type: 'setFetchData',
    payload: data
  });
};

export const useHandleChange = ({ target }, toChange)  => dispatch=> {
  dispatch({ type: toChange, payload: target.value });
};
