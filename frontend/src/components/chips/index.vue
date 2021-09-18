<template>
    <v-chip
      v-if="show"
      class="ma-2"
      :color="fixed ? 'grey' : 'primary'"
      :text-color="fixed ? 'white' : 'black'"
      @click="handleCloseEvent"
    >
      {{ text }}
  </v-chip>
</template>

<script>
export default {
  name: 'chips',
  props: {
    text: { type: String, default: '' },
    fixed: { type: Boolean, default: false }
  },
  data() {
    return {
      show: true,
    }
  },
  methods: {
    handleCloseEvent() {
      !this.fixed && (this.show = false)
      this.$emit('input', this.text)
    }
  },
}
</script>
