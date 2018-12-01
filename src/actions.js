const actions = {
  down: value => state => {
    return { count: state.count - value };
  },
  up: value => state => {
    return { count: state.count + value };
  }
};

export default actions;
