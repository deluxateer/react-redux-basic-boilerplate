import { SAMPLE_FETCH, SAMPLE_SUBMIT } from '../actions/types';

const initialState = {
  sampleItems: [
    { id: 1, name: '', phone: '' },
    { id: 2, name: '', phone: '' },
    { id: 3, name: '', phone: '' },
    { id: 4, name: '', phone: '' }
  ],
  sampleSubmitInfo: {
    id: '',
    name: '',
    phone: ''
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SAMPLE_FETCH:
      // write code to update state with data in action.payload
      return {
        ...state
        // , newData
      }

    case SAMPLE_SUBMIT:
      // write code to update state with data in action.payload
      return {
        ...state
        // , newData
      }

    default:
      return state;
  }
}