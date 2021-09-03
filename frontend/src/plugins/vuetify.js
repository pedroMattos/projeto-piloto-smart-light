import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

/**
 * fazer arquivo de cores
 */
export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        secondary: '#564D42',
        primary: '#F2AF5C'
      }
    }
  },
});
