import { h } from 'hyperapp';
import Loading from '../loading';
import Conferences from './component';

export default ({ state: { data, communication, control }, actions }) => {
  if (!communication.status.conferences) actions.fetchEntity('conferences');

  if (!data.conferences) return <Loading />;

  return (
    <Conferences
      conferences={data.conferences}
      selectedConference={control.selectedConference}
      setSelectedConference={actions.setSelectedConference}
    />
  );
};
