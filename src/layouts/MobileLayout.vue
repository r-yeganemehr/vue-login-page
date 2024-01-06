<template>
    <v-app>
        <v-locale-provider rtl>
            <v-system-bar class="system-bar" >
                <v-icon icon="mdi-wifi-strength-4" ></v-icon>
                <v-icon icon="mdi-signal" class="ms-1"></v-icon>
                <v-icon icon="mdi-battery" class="ms-1"></v-icon>
                <span class="ms-2">{{time}}</span> 
            </v-system-bar>
            <v-container class="app-container">
                <router-view />
            </v-container>
        </v-locale-provider>
    </v-app>
</template>
<script>
import {defineComponent} from "vue";
export default defineComponent({
    data() {
        return {
            time: ""
        }
    },
    methods:{
        getTime(){
            let now = new Date()
            let hour = now.getHours();
            let minute = now.getMinutes();
            if (hour < 10) {
                hour = "0" + hour;
                }
                if (minute < 10) {
                  minute = "0" + minute;
                }
            this.time = `${hour}:${minute}` 
        },
    },  
    mounted(){
        setInterval(this.getTime , 1000);
    }    
    
})
</script>

<style>
.system-bar{
    direction: ltr;
}
</style>
