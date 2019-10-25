<template>
  <v-navigation-drawer temporary v-model="drawer" app class="primary">
    <v-row class="flex-column">
      <v-col class="d-flex flex-column align-center mt-5">
        <v-avatar size="80">
          <img src="@/assets/dog.jpg">
        </v-avatar>
        <p class="white--text title font-weight-bold mt-3">Pug</p>
      </v-col>
      <v-col class="d-flex flex-column align-center mb-5">
        <Popup />
      </v-col>
    </v-row>

    <v-list shaped>
      <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
        <v-list-item-icon>
          <v-icon class="white--text">{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="white--text">
            {{ link.text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import Popup from './Popup'
export default {
  props: {
    links: Array,
    isDrawerOpen: Boolean
  },
  computed: {
    drawer:{
      get(){ return this.isDrawerOpen },
      set(){}
    }
  },
  components: {
    Popup
  }
}
</script>