import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { customFetch } from '../services/custom';

export const useFetchData = (fetchData) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if(!fetchData) return; 
    dispatch({ type: 'setResult', payload: ['...Loading (or Nothing Found)'] });
    customFetch(fetchData).then(res => {
      if(res === []) {
        dispatch({ type: 'setResult', payload: ['No Results Found'] });
      } else {
        dispatch({ type: 'setResult', payload: res });
        dispatch({ type: 'setHistory', payload: fetchData });
      }
    });
  }, [fetchData]);
};
