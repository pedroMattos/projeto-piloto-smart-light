<template>
  <v-container
    class="login-area"
    grid-list-xs
    fluid
  >
  <v-layout wrap>
    <v-flex xs12>
      <v-text-field
        label="Email"
        :rules="rules"
        hide-details="auto"
        ></v-text-field>
    </v-flex>
  </v-layout>
  <v-layout wrap>
    <v-flex xs12>
      <v-text-field
        label="Senha"
        :rules="rules"
        hide-details="auto"
        ></v-text-field>
    </v-flex>
  </v-layout>
  <v-row>
    <v-col align="end" cols="12" offset-sm="6">
      <a href="#">Esqueci minha senha</a>
    </v-col>
  </v-row>
  <v-btn
    block
    color="secondary"
    elevation="1"
  >Login</v-btn>
  </v-container>
</template>

<script>

export default {
  name: 'Login',
};
</script>
