import { h } from 'hyperapp';
import Loading from './loading';
import ConferenceList from './conference-list';
import InstitutionList from './institution-list';

export default (state, actions) => {
	if (!state.dataAccess) {
		actions.fetchData();

		return <Loading />;
	}

	return (
		<div class="flex">
			<div class="w-1/3 p-5">
				<ConferenceList
					conferences={state.dataAccess.get('conference')}
					selectedConference={state.selectedConference}
					setSelectedConference={actions.setSelectedConference}
				/>
			</div>
			<div class="w-2/3 p-5">
				<InstitutionList
					institutions={state.dataAccess.get('institution', { conferenceId: state.selectedConference })}
				/>
			</div>
		</div>
	);
};
