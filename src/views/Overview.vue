<template>
  <div class="dashboard px-12 pt-8">
    <h1 class="subheading grey--text text--darken-3">Overview</h1>
    <v-container class="mt-8 py-5">
      <SortButton @emitSort="sortBy" />
      <v-card flat v-for="listItem in todoList" :key="listItem.title" elevation="4" shaped :color="priorityBackground(listItem.priority)">
        <EditButton :listItem="listItem" />
        <CardsContent :listItem="listItem" />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import SortButton from '@/components/overview/SortButton'
import EditButton from '@/components/overview/EditButton'
import CardsContent from '@/components/overview/CardsContent'
export default {
  computed: {
    todoList(){
      return this.$store.getters.todoList
    }
  },
  methods: {
    sortBy(value){
      this.todoList.sort((a,b) => a[value] > b[value] ? -1 : 1)
    },
    priorityBackground(number){
      switch(number){
        case 3:
          return 'priorityHigh'
        case 2:
          return 'priorityMedium'
        case 1:
          return 'priorityLow'
      }
    }
  },
  components: {
    CardsContent,
    EditButton,
    SortButton
  },
  created(){
    this.$store.dispatch('setTodoList')
  }
}
</script>

<style lang="scss">
  .v-card + .v-card {
    margin-top: 40px;
  }
</style>
