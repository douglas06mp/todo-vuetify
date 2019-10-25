<template>
  <v-speed-dial top right absolute direction="left" open-on-hover transition="scale-transition" id="editBtn">
    <template v-slot:activator>
      <v-btn small color="blue" dark fab elevation="0">
        <v-icon>mdi-account-edit</v-icon>
      </v-btn>
    </template>
    <v-btn fab dark small color="red" @click="deleteTodo(listItem.id)">
      <v-icon>mdi-delete</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  props: {
    listItem: Object
  },
  methods: {
    deleteTodo(id){
      this.$store.dispatch('deleteTodo', id)
    }
  }
}
</script>

<style lang="scss">
  #editBtn {
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  }
</style>