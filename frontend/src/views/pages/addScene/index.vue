<template>
  <v-container class="addScene">
    <h1>Logo</h1>
    <span class="title-sec">
      Editar/Adicionar
      <bottom-span></bottom-span>
    </span>

    <v-layout wrap>
      <v-flex xs12>
        <v-text-field label="Nome da Cena" hide-details="auto"></v-text-field>
        <p>Escolher cômodos</p>
        <v-select :items="items" @input="addChip" v-model="selected" label="Cômodos"></v-select>

        <p>Funções selecionadas</p>
        <chips
          v-for="(name, index) in chipNames"
          :key="index"
          :text="name"
          @input="reAddFunctionText({ evetnData: $event })"
        />

        <p>Selecione a intensidade da luz</p>
        
        <v-row>
          <v-col cols="2">
            <p class="centralizer">Sala</p>
            <v-slider
              v-model="sliderValue[0]"
              vertical
            ></v-slider>
          </v-col>
          <v-col cols="2">
          <p class="centralizer">Quarto</p>
            <v-slider
              disabled
              v-model="sliderValue[1]"
              vertical
            ></v-slider>
          </v-col>
        </v-row>


      <v-btn class="reverse white-text" color="danger" elevation="1">Limpar</v-btn>
      <router-link :to="{ path: '/' }">
        <v-btn class="reverse" color="primary" elevation="1">Salvar</v-btn>
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
      items: ['Sala de estar', 'Quarto'],
      selected: null,
      chipNames: [],
      sliderValue: [100, 100]
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
  
}
</script>
