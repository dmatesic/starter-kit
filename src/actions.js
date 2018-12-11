import DataAccess from './lib/data-access';

const actions = {
  fetchData: () => async (_, actions) => {
    const dataAccess = new DataAccess();
    await dataAccess.init();
    actions.fetchDataSuccess(dataAccess);
  },
  fetchDataSuccess: (dataAccess) => () => {
    return { dataAccess };
  },
  setSelectedConference: (selectedConference) => () => {
    return { selectedConference };
  }
};

export default actions;
