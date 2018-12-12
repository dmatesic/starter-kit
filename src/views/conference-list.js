import { h } from 'hyperapp';

export default ({ conferences, selectedConference, setSelectedConference }) => {
  return (
    <div>
      {conferences.map((conference) => {
        return (
          <a onclick={() => setSelectedConference(conference.id)}>
            <div
              class={`py-2 px-4 mb-2 border border-grey border-solid rounded cursor-pointer hover:bg-grey-lighter
					${selectedConference === conference.id && 'bg-grey-lighter'}`}
            >
              <div class="font-bold">{conference.name}</div>
              <div class="italic mb-2">Founded in {conference.founded}</div>
              <div>{conference.headquarters}</div>
            </div>
          </a>
        );
      })}
    </div>
  );
};
