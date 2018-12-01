import { h } from "hyperapp";

export default (state, actions) => (
  <div class="m-5">
    <h1>{state.count}</h1>
    <button
      class="bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded"
      onclick={() => actions.down(1)}
    >
      -
    </button>
    <button
      class="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded"
      onclick={() => actions.up(1)}
    >
      +
    </button>
  </div>
);
