import { h } from 'hyperapp';

export default ({ institutions }) => {
  return (
    <div>
      {institutions.map(institution => {
        return (
          <div id={`institution-${institution.id}`} class="pb-2 mb-2 border-b">
            <div>
              <span class="font-bold">{institution.name}</span>{' '}
              {institution.nickname}
            </div>
            <div class="italic mb-2">Founded in {institution.founded}</div>
            <div>{institution.location}</div>
          </div>
        );
      })}
    </div>
  );
};
