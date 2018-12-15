import { h } from 'hyperapp';
import { filter } from 'lodash';
import Loading from '../loading';
import Institutions from './component';

export default ({ state: { data, communication, control }, actions }) => {
  // TODO: Load institutions dynamically instead of on page load
  if (!communication.status.institutions) actions.fetchEntity('institutions');

  if (!data.institutions) return <Loading />;

  return (
    <Institutions
      institutions={filter(
        data.institutions,
        { conferenceId: control.selectedConference } || []
      )}
    />
  );
};
