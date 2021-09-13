<template>
  <v-container class="new-piece">
    <h1>Logo</h1>
    <span class="title-sec large">
      Solicitar Cômodo
      <bottom-span></bottom-span>
    </span>

    <v-layout wrap>
      <v-flex xs12>
        <v-text-field label="Nome do Cômodo" hide-details="auto"></v-text-field>
        <v-text-field label="Número de pontos de iluminação" hide-details="auto"></v-text-field>
        <v-select :items="items" @input="addChip" v-model="selected" label="Funções"></v-select>

        <p>Funções selecionadas</p>
        <chips
          v-for="(name, index) in chipNames"
          :key="index"
          :text="name"
          :fixed="index == 0 ? true : false"
          @input="reAddFunctionText({ evetnData: $event })"
        />

      <router-link :to="{ path: '/' }">
        <v-btn class="reverse" block color="primary" elevation="1">Enviar solicitação</v-btn>
      </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BottomSpan from '../../../components/svg/v1/bottomSpan';
import Chips from '../../../components/chips';

export default {
  components: {
    BottomSpan,
    Chips,
  },

  data() {
    return {
      items: ['Dimerizador', 'Teste'],
      selected: null,
      chipNames: ['Controladora por smartphone'],
    };
  },
  methods: {
    addChip() {
      this.chipNames.push(this.selected);
      this.items = this.items.filter((e) => e != this.selected);
      this.$forceUpdate();
    },
    reAddFunctionText({ evetnData }) {
      this.items.push(evetnData);
      this.selected = null;
    },
  },
};
</script>
