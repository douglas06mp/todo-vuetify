<template>
  <v-row class="mb-4 px-4">
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn text color="grey darken-3" @click="sort('priority')" v-on="on">
          <v-icon left small>mdi-star</v-icon>
          <span class="body-1 text-lowercase">by priority</span>
        </v-btn>
      </template>
      <span>Sort by priority</span>
    </v-tooltip>
  </v-row>
</template>

<script>
export default {
  methods: {
    sort(value){
      this.$emit('emitSort', value)
    }
  }
}
</script>