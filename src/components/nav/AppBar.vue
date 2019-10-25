<template>
  <v-app-bar flat app color="primary">
    <v-app-bar-nav-icon class="white--text text--darken-3" @click.stop="toggle(!drawer)"></v-app-bar-nav-icon>

    <v-toolbar-title class="text-uppercase white--text text--darken-3">
      <span class="font-weight-light">Todo</span>
      <span class="font-weight-black">List</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on }">
        <v-btn text color="white darken-3" height="80%" v-on="on">
          Menu
          <v-icon right>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <!-- <v-btn text color="white darken-3" height="80%">
      <span>Sign Out</span>
       <v-icon right>mdi-logout-variant</v-icon>
    </v-btn> -->
  </v-app-bar>
</template>

<script>
export default {
  props: {
    links: Array,
    isDrawerOpen: Boolean
  },
  computed: {
    drawer(){
      return this.isDrawerOpen 
    }
  },
  methods: {
    toggle(value){
      this.$emit('emitToggle', value)
    }
  }
}
</script>