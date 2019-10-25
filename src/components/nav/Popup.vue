<template>
  <v-dialog max-width="600px" v-model="showDialog">
    <template v-slot:activator="{ on }">
      <v-btn depressed v-on="on" class="text-uppercase secondary">add new todo</v-btn>
    </template>
    <v-card>
      <v-card-title class="text-uppercase title">new todo</v-card-title>
      <v-card-text class="mt-5">
        <v-form ref="form" lazy-validation>
          <v-text-field label="Title" prepend-icon="mdi-folder" v-model="title" :rules="inputRules" autofocus validate-on-blur></v-text-field>
          <v-textarea label="Description" v-model="description" prepend-icon="mdi-file-edit" :rules="inputRules" validate-on-blur></v-textarea>
          <v-row>
            <v-col cols="6">
              <v-menu max-width="290px" transition="scale-transition">
                <template v-slot:activator="{ on }">
                  <v-text-field :value="formattedDate" label="Date" prepend-icon="mdi-calendar-check" v-on="on" :rules="requiredRules"></v-text-field>
                </template>
                <v-date-picker v-model="deadlineDate"></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="6">
              <v-menu ref="time" :return-value.sync="deadlineTime" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="290px" >
                <template v-slot:activator="{ on }">
                  <v-text-field :value="deadlineTime" label="Time" prepend-icon="mdi-clock" v-on="on" :rules="requiredRules"></v-text-field>
                </template>
                <v-time-picker v-model="deadlineTime" full-width scrollable format="24hr" @click:minute="$refs.time.save(deadlineTime)"></v-time-picker>
              </v-menu>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-select label="Priority" v-model="priority" :items="priorityList" prepend-icon="mdi-star" item-text="text" item-value="value" :rules="requiredRules"></v-select>
            </v-col>
            <v-col cols="6" class="d-flex justify-end align-center">
             <v-btn depressed large class="primary" @click.prevent="addTodo" :loading="isSubmitting">Add</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      title: '',
      description: '',
      deadlineDate: null,
      deadlineTime: null,
      priority: null,
      priorityList: [
        { text: 'High', value: 3 },
        { text: 'Medium', value: 2 },
        { text: 'Low', value: 1 },
      ],
      inputRules: [
        v => !!v  || 'This area is required',
        v => v.length >=3 || 'Minimum length is 3 characters'
      ],
      requiredRules: [
        v => !!v || 'This area is required'
      ]
    }
  },
  methods: {
    addTodo(){
      if(this.$refs.form.validate()){
        this.$store.dispatch('addStart')
        const newTodo = {
          title: this.title,
          description: this.description,
          deadlineDate: this.formattedDate,
          deadlineTime: this.deadlineTime,
          priority: this.priority,
          done: false
        }
        this.$store.dispatch('addTodo', newTodo)
      }
    }
  },
  computed: {
    formattedDate(){
      return this.deadlineDate? moment(this.deadlineDate).format('Do MMM YYYY') : ''
    },
    isSubmitting(){
      return this.$store.getters.isSubmitting
    },
    showDialog:{
      get(){ return this.$store.getters.showDialog },
      set() {}
    }
  }
}
</script>