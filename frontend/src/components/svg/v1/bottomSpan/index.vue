<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 193 2">
    <g transform="translate(-91.5 -164)">
      <line
        x2="85"
        transform="translate(199.5 164.5)"
        fill="none"
        :stroke="stroke"
        stroke-width="1"
      />
      <line
        x2="85"
        transform="translate(91.5 164.5)"
        fill="none"
        :stroke="stroke"
        stroke-width="1"
      />
      <circle cx="1" cy="1" r="1" transform="translate(187 164)" :fill="fill" />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    width: { type: Number || String, default: 193 },
    height: { type: Number || String, default: 2 },
    fill: { type: String, default: "#fff" },
    stroke: { type: String, default: "#fbfbfb" }
  }
};
</script>
