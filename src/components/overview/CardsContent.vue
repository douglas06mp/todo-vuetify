<template>
  <v-row class="listItem px-8 py-4 mx-0" align="center">
    <v-col cols="12" sm="2" lg="1" class="mr-n12">
      <v-checkbox class="mt-5" color="blue" v-model="listItem.done" @click="updateTodo({id: listItem.id, value: !listItem.done})"></v-checkbox>
    </v-col>
    <v-col cols="12" sm="10" lg="2">
      <div class="subtitle-2 grey--text text--darken-2">Title</div>
      <div class="title">{{ listItem.title }}</div>
    </v-col>
    <v-col cols="12" sm="12" lg="5">
      <div class="subtitle-2 grey--text text--darken-2">Description</div>
      <div class="title">{{ listItem.description }}</div>
    </v-col>
    <v-col cols="12" sm="6" lg="3">
      <div class="subtitle-2 grey--text text--darken-2">Deadline</div>
      <div class="title">{{ listItem.deadlineTime }} - {{ listItem.deadlineDate }}</div>
    </v-col>
    <v-col cols="12" sm="6" lg="1">
      <div class="subtitle-2 grey--text text--darken-2">Priority</div>
      <v-rating length="3" :value="listItem.priority" readonly color="red" background-color="grey"></v-rating>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    listItem: Object
  },
  methods: {
    updateTodo(obj){
      this.$store.dispatch('updateTodo', obj)
    }
  }
}
</script>