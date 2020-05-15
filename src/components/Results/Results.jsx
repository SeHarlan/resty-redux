import React from 'react';
import ReactJson from 'react-json-view';
import { useGlobalState } from '../../selectors/restySelectors';
import { useSelector } from 'react-redux';

const style = {
  backgroundColor: 'silver',
  boxShadow: 'inset 0 0 1rem rgba(0, 0, 0, 0.3)',
  padding: '1rem',
  margin: 0,
  overflow: 'scroll',
  width: '100%'
};
const Results = () => {
  const { result } = useSelector(useGlobalState);
  return (
    <ReactJson src={result} style={style}/>
  );};
  
  
export default Results;
  

