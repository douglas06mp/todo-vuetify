<template>
    <nav>
      <v-snackbar v-model="showSnackbar" top color="secondary" :timeout="4000">
        <span class="title mx-auto">Added successfully!</span>
      </v-snackbar>
      <AppBar :links="links" :isDrawerOpen="isDrawerOpen" @emitToggle="toggleDrawer" />
      <NavigationDrawer :links="links" :isDrawerOpen="isDrawerOpen" />
    </nav>
</template>

<script>
import NavigationDrawer from './nav/NavigationDrawer'
import AppBar from './nav/AppBar'
export default {
  data() {
    return {
      isDrawerOpen: false,
      links: [
        { icon: 'mdi-monitor-dashboard', text: 'Overview', route: '/' },
        { icon: 'mdi-folder-open', text: 'Ongoing', route: '/ongoing' },
        { icon: 'mdi-account-group', text: 'Completed', route: '/completed' }
      ]
    }
  },
  methods: {
    toggleDrawer(value){
      this.isDrawerOpen = value
    }
  },
  computed: {
    showSnackbar:{
      get(){ return this.$store.getters.showSnackbar },
      set(){}
    }
  },
  components: {
    NavigationDrawer,
    AppBar
  }
}
</script>
