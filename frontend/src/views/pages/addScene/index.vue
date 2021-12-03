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

        <p>Cômodos selecionados</p>
        <chips
          v-for="(name, index) in chipNames"
          :key="index"
          :text="name"
          @input="reAddFunctionText({ evetnData: $event })"
        />

        <p>Selecione a intensidade da luz</p>
        
        <!-- TODO o step é para caso não seja dimerizável, 100 ligado, 0 desligado -->
        <v-layout
          justify-center
          row
        >
        <div :class="chipNames.lenght > 2 ? 'scroll-wrapper' : ''">
          <v-flex xs4 v-for="(chipName, index) in chipNames" :key="index">
            <p class="centralizer">{{ chipName }}</p>
            <v-slider
              v-model="sliderValue[index]"
              vertical
              step="100"
            ></v-slider>
          </v-flex>
        </div>
        </v-layout>


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
      items: ['Sala de estar', 'Quarto', 'Quintal', 'Corredor'],
      selected: null,
      chipNames: [],
      sliderValue: [100, 100, 100, 100]
    };
  },
  methods: {
    addChip() {
      this.chipNames.push(this.selected);
      this.items = this.items.filter((e) => e != this.selected);
    },
    // TODO fazer essas funções do chips dentro dos chips
    reAddFunctionText({ evetnData }) {
      this.items.push(evetnData);
      this.selected = null;
      this.chipNames = this.chipNames.filter((e) => e != evetnData)
    },
  },
  
}
</script>
