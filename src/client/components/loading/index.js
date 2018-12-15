import { h } from 'hyperapp';

export default () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        class="lds-ripple"
      >
        <circle
          cx="50"
          cy="50"
          r="47.719"
          fill="none"
          stroke="#000"
          stroke-width="1"
        >
          <animate
            attributeName="r"
            calcMode="spline"
            values="0;50"
            keyTimes="0;1"
            dur="1.9"
            keySplines="0 0.2 0.8 1"
            begin="-0.95s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            calcMode="spline"
            values="1;0"
            keyTimes="0;1"
            dur="1.9"
            keySplines="0.2 0 0.8 1"
            begin="-0.95s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="50"
          cy="50"
          r="26.528"
          fill="none"
          stroke="#000"
          stroke-width="1"
        >
          <animate
            attributeName="r"
            calcMode="spline"
            values="0;50"
            keyTimes="0;1"
            dur="1.9"
            keySplines="0 0.2 0.8 1"
            begin="0s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            calcMode="spline"
            values="1;0"
            keyTimes="0;1"
            dur="1.9"
            keySplines="0.2 0 0.8 1"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};
