// organization inspired by http://jamesknelson.com/5-types-react-application-state/
const state = {
  data: {
    conferences: null,
    institutions: null
  },
  communication: {
    status: {
      conferences: null,
      institutions: null
    }
  },
  control: {
    selectedConference: null
  }
};

export default state;
