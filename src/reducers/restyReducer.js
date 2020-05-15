const initialState = {
  selectedOption: 'GET',
  json: '',
  url: '',
  name: '',
  password: '',
  bearerToken: '',
  history: [],
  fetchData: null,
  result: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'setSelectedOption':
      return { ...state, selectedOption: action.payload };
    case 'setJson':
      return { ...state, json: action.payload };
    case 'setUrl': 
      return { ...state, url: action.payload };
    case 'setName':
      return { ...state, name: action.payload };
    case 'setPassword':
      return { ...state, password: action.payload };
    case 'setBearerToken':
      return { ...state, bearerToken: action.payload };
    case 'setHistory':
      return { ...state, history: [...state.history, action.payload] };
    case 'setFetchData': 
      return { ...state, fetchData: action.payload };
    case 'setResult':
      return { ...state, result: action.payload };
    default:
      return state;
  }
}
