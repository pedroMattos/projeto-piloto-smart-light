<template>
  <v-container class="home">
    <h1>Logo</h1>
    <span class="title-sec">
      Cenas
      <bottom-span></bottom-span>
    </span>

    <v-row class="sec">
      <v-col cols="3">
        <div class="cena-card">Cinema</div>
      </v-col>
      <v-col cols="3">
        <div class="cena-card">Dormir</div>
      </v-col>
      <v-col cols="3">
        <div class="cena-card">Off</div>
      </v-col>
      <v-col cols="3">
        <div class="cena-card">Nova</div>
      </v-col>
    </v-row>
<br>
    <span class="title-sec">
      Cômodos
      <bottom-span></bottom-span>
    </span>
    
    <v-row class="sec">
      <v-col cols="3" v-for="(piece, index) in pieces" :key="index">
        <div class="cena-card">{{ piece.name }}</div>
      </v-col>
    </v-row>

    <v-btn
      class="reverse"
      block
      color="primary"
      elevation="1"
    >Solicitar Novo Cômodo</v-btn>
  </v-container>
</template>

<script>
import BottomSpan from '../components/svg/v1/bottomSpan'

export default {
  name: 'Home',
  components: {
    BottomSpan
  },
  data() {
    return {
      pieces: [
        { name: 'Quarto Suite' },
        { name: 'Área externa' },
        { name: 'Sala de estar' },
        { name: 'Cozinha' },
        { name: 'Banheiro suite' },
        { name: 'Quarto corredor' },
        { name: 'Corredor' },
        { name: 'Garagem' },
      ]
    }
  },
};
</script>
