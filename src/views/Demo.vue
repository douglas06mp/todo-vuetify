<template>
  <div>
    <p class="pink blue--text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat quod nesciunt maiores magni reiciendis voluptas beatae laudantium quas at? Ipsum odio ab iste. Maxime corporis illum eveniet natus perferendis.</p>
    <p class="red lighten-4 teal--text text--darken-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi consequuntur quibusdam aut veniam delectus repellat commodi cupiditate non doloremque quos laudantium odio unde minus, dicta molestiae repellendus explicabo distinctio recusandae.</p>
    <h1 class="display-4 font-weight-bold">Display-4</h1>
    <h1 class="display-1 font-italic">Display-1</h1>
    <h1 class="headline">Headline</h1>
    <h1 class="caption font-weight-black">Caption</h1>
    <v-btn rounded class="blue-grey amber--text">Button</v-btn>
    <v-btn depressed color="cyan">Button</v-btn>
    <v-btn text color="lime darken-3">Button</v-btn>
    <v-btn tile color="green accent-3">
      <v-icon left>mdi-email</v-icon>
      <span>Email</span>
    </v-btn>
    <v-btn small dark color="indigo darken-3">
      <v-icon left>mdi-alert-circle</v-icon>
      <span>Alert</span>
    </v-btn>
    <v-btn x-large color="deep-orange lighten-4">
      <span>Copy</span>
      <v-icon right large>mdi-content-copy</v-icon>
    </v-btn>
    <v-btn fab depressed dark color="red accent-4">
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <h1 class="display-2 hidden-md-and-down">Hidden md and down</h1>
    <h1 class="display-2 hidden-lg-only">Hidden lg only</h1>
    <h1 class="display-2 hidden-sm-and-up">Hidden sm and up</h1>
  </div>
</template>