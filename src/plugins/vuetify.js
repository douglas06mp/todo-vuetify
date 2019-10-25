import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#12cbc4',
        secondary: '#ff9f1a',
        blue: '#009ce5',
        red: '#ff3838',
        priorityHigh: '#ffe6ff',
        priorityMedium: '#ffffdf',
        priorityLow: '#e8f3f1',
        ongoing: '#cccccc',
        complete: '#ffeacc',
      }
    }
  }
});
