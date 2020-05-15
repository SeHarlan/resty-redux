import React from 'react'; 
import RadioButton from './RadioButton';
import style from './Form.css';
import { useSelector } from 'react-redux';
import { useHandleChange, setFetchData } from '../../actions/restyActions';
import { useGlobalState } from '../../selectors/restySelectors';
import { useDispatch } from 'react-redux';
import { useFetchData } from '../../hooks/restyHooks';


const Form = () => {
  const { 
    url: urlInput, 
    json: jsonInput, 
    name: usernameInput, 
    password: passwordInput, 
    bearerToken: bearerTokenInput, 
    selectedOption = 'GET', 
    fetchData
  } = useSelector(useGlobalState);
  
  const dispatch = useDispatch();

  const HandleChange = (e, toChange) => dispatch(useHandleChange(e, toChange));

  const HandleSubmit = (e) => {
    e.preventDefault();
    const data = {
      url: urlInput,
      method: selectedOption,
      json: jsonInput,
      username: usernameInput,
      password: passwordInput,
      bearerToken: bearerTokenInput
    };

    dispatch(setFetchData(data));
  };

  useFetchData(fetchData);

  const radios = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].map(method => (
    <RadioButton key={method} value={method} selectedOption={selectedOption} onOptionChange={(e) => HandleChange(e, 'setSelectedOption')} />));

  return (
    <form className={style.Form} onSubmit={HandleSubmit}>

      <input type="text" name="url" value={urlInput} onChange={(e) => HandleChange(e, 'setUrl')} placeholder="URL"/>
      <section>

        {radios}
        <button type="submit">Fetch</button>
      </section>
      <section className={style.Json}>
        <textarea name="json" value={jsonInput} cols="30" rows="10" onChange={(e) => HandleChange(e, 'setJson')} placeholder="Raw JSON body"></textarea>
        <div className={style.Headers}>
          <h3>Basic Authorization</h3>
          <span>Username: </span><input type="text" name="username" value={usernameInput} onChange={(e) => HandleChange(e, 'setName')} placeholder="Username"/>
      
          <span>Password: </span><input type="text" name="password" value={passwordInput} onChange={(e) => HandleChange(e, 'setPassword')} placeholder="Password"/>
        
          <span>Bearer Token: </span><input type="text" name="bearerToken" value={bearerTokenInput} onChange={(e) => HandleChange(e, 'setBearerToken')} placeholder="Bearer Token" />
        </div>
      </section>
    </form>);
};

export default Form;
