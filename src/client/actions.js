import merge from 'deepmerge';
import axios from 'axios';

// TODO: Add config and get this working both locally and on server
const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  timeout: 5000
});

const actions = {
  fetchEntity: entity => async (_, actions) => {
    actions.updateCommunicationStatus({ entity, status: 'requested' });
    api
      .get(`/${entity}`)
      .then(res => actions.fetchEntitySuccess({ entity, data: res.data }))
      .catch(error => actions.fetchEntityError({ entity, error }));
  },
  updateCommunicationStatus: ({ entity, status }) => state => {
    return merge(state, { communication: { status: { [entity]: status } } });
  },
  fetchEntitySuccess: ({ entity, data }) => state => {
    return merge(state, {
      data: { [entity]: data },
      communication: { status: { [entity]: 'success' } }
    });
  },
  fetchEntityError: ({ entity, error }) => state => {
    console.error(error);
    return merge(state, {
      data: { [entity]: [] },
      communication: { status: { [entity]: 'error' } }
    });
  },
  setSelectedConference: selectedConference => state => {
    return merge(state, { control: { selectedConference } });
  }
};

export default actions;
