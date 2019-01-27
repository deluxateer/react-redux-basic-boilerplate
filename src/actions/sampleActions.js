import { SAMPLE_FETCH, SAMPLE_SUBMIT } from './types';

export const fetchInfo = sampleSubmitInfo => dispatch => {
  dispatch({
    type: SAMPLE_FETCH,
    payload: sampleSubmitInfo
  });
}

export const submitInfo = sampleSubmitInfo => dispatch => {
  dispatch({
    type: SAMPLE_SUBMIT,
    payload: sampleSubmitInfo
  });
}