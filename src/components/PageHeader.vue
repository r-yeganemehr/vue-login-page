<template>
    <v-card class="navbar mt-6"  flat height="50px" rounded="0">
    <v-toolbar density="compact" color="white">
      <v-toolbar-title class="title-header-page text-center" >{{ title }}</v-toolbar-title>
      <v-icon icon="mdi-chevron-left" color="#1A237E"></v-icon>
    </v-toolbar>
  </v-card>

</template>
<script>
import {defineComponent} from "vue";
export default defineComponent({
    props: {
        title: {
            require: true,
            type: String
        },
    },
      
    
     
})
</script>
<style>


</style>