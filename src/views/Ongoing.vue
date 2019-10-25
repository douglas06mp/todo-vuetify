<template>
  <div class="project py-8 px-12">
    <h1 class="subheading grey--text text--darken-3">Waiting For You to Finish</h1>
    <v-container class="mt-8 my-5">
      <v-card flat v-for="listItem in ongoingList" :key="listItem.title" elevation="4" shaped color="ongoing">
        <EditButton :listItem="listItem" />
        <CardsContent :listItem="listItem" />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import EditButton from '@/components/overview/EditButton'
import CardsContent from '@/components/overview/CardsContent'
export default {
  computed: {
    ongoingList(){
        return  this.$store.getters.todoList.filter(item => item.done === false)
    }
  },
  components: {
    CardsContent,
    EditButton
  },
  created(){
    this.$store.dispatch('setTodoList')
  }
}
</script>
