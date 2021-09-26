<template>
  <v-container class="home">
    <h1>Logo</h1>
    <span class="title-sec">
      Cenas
      <bottom-span></bottom-span>
    </span>

    <section class="scroll-wrapper">
      <v-layout class="sec">
        <v-flex v-for="(scene, index) in scenes" :key="index" cols="3">
          <div @click="snackbar = scene" class="cena-card">{{ scene.name }}</div>
        </v-flex>
      </v-layout>
      <!-- <v-row class="sec">
        <v-col v-for="(scene, index) in scenes" :key="index" cols="3">
          <div @click="snackbar = scene" class="cena-card">{{ scene.name }}</div>
        </v-col>
      </v-row> -->
    </section>
    <router-link :to="{ name: 'addScene' }">
      <v-btn
        class="reverse"
        block
        color="primary"
        elevation="1"
      >Adicionar nova Cena</v-btn>
    </router-link>
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

    <router-link :to="{ name: 'newPiece' }">
      <v-btn
        class="reverse"
        block
        color="primary"
        elevation="1"
      >Solicitar Novo Cômodo</v-btn>
    </router-link>

    <v-snackbar
      v-model="snackbar.show"
    >
      {{ `${snackbar.name} vai receber uma ação` }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="indigo"
          text
          v-bind="attrs"
          @click="snackbar.show = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
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
      // conversar sobre instruções
      // se escolher comodo com dimerização aparece modal
      // se não, só liga e desliga
      pieces: [
        { name: 'Quarto Suite', deviceInstruction: { id: 1, dimmer: false, dimmerValue: null, instruction: !'insctruction' } },
        { name: 'Área externa', deviceInstruction: { id: 1, dimmer: false, dimmerValue: null, instruction: !'insctruction' }  },
        { name: 'Sala de estar', deviceInstruction: { id: 1, dimmer: false, dimmerValue: null, instruction: !'insctruction' }  },
        { name: 'Cozinha', deviceInstruction: { id: 1, dimmer: false, dimmerValue: null, instruction: !'insctruction' }  },
        { name: 'Banheiro suite', deviceInstruction: { id: 1, dimmer: false, dimmerValue: null, instruction: !'insctruction' }  },
        { name: 'Quarto corredor', deviceInstruction: { id: 1, dimmer: false, dimmerValue: null, instruction: !'insctruction' }  },
        { name: 'Corredor', deviceInstruction: { id: 1, dimmer: false, dimmerValue: null, instruction: !'insctruction' }  },
        { name: 'Garagem', deviceInstruction: { id: 1, dimmer: false, dimmerValue: null, instruction: !'insctruction' }  },
      ],
      scenes: [
        { name: 'Cinema', devicesInstructions: [
          { id: 1, dimmer: true, dimmerValue: 40, intruction: 'on' },
          { id: 2, dimmer: false, dimmerValue: null, intruction: 'off' },
          { id: 3, dimmer: false, dimmerValue: null, intruction: 'off' },
        ], show: true},
        { name: 'Dormir', devicesInstructions: [
          { id: 1, dimmer: false, dimmerValue: null, intruction: 'off' },
          { id: 2, dimmer: false, dimmerValue: null, intruction: 'off' },
          { id: 3, dimmer: true, dimmerValue: 20, intruction: 'on' },
        ], show: true},
        { name: 'Off', devicesInstructions: [
          { id: 1, dimmer: false, dimmerValue: null, intruction: 'off' },
          { id: 2, dimmer: false, dimmerValue: null, intruction: 'off' },
          { id: 3, dimmer: false, dimmerValue: null, intruction: 'off' },
        ], show: true},
        { name: 'Externo', devicesInstructions: [
          { id: 1, dimmer: false, dimmerValue: null, intruction: 'off' },
          { id: 2, dimmer: false, dimmerValue: null, intruction: 'on' },
          { id: 3, dimmer: false, dimmerValue: null, intruction: 'off' },
        ], show: true},
      ],
      snackbar: { show: false }
    }
  },
};
</script>
