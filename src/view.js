import { h } from 'hyperapp';
import Conferences from './components/conferences';
import Institutions from './components/institutions';

export default (state, actions) => {
  return (
    <div class="flex">
      <div class="w-1/3 p-5">
        <Conferences state={state} actions={actions} />
      </div>
      <div class="w-2/3 p-5">
        <Institutions state={state} actions={actions} />
      </div>
    </div>
  );
};
