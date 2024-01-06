<template>
    <PageHeader title="پیشخوان "/>
    <v-app-bar color="#F5F7F9" :elevation="0" class="text-center">
        <v-app-bar-title class="text-center" color="#09224E">پیشخوان</v-app-bar-title>
        <v-btn icon>
            <v-icon icon="mdi-chevron-left" color="#09224E"></v-icon>
        </v-btn>
    </v-app-bar>
    <v-card max-width="500px" color="warning" class="rounded-lg">
        <v-row align="center">
            <v-col cols="6" class="text-center">
                <v-icon icon="mdi-wifi" class="mdi-wifi-icon text-center text-subtitle-1"></v-icon>
                <v-card-text class="text-h5">98%</v-card-text>
            </v-col>
            <v-col cols="6" class="text-right">
                <v-card-text class="text-h5 mt-2">192.168.4.1
                    <div class="text-caption mt-1">آدرس آی پی</div>
                </v-card-text>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row align="center">
            <v-col cols="6" class="text-center">
                <v-icon icon="mdi-poll" class="mdi-poll-icon text-center text-subtitle-1"></v-icon>
                <v-card-text class="text-h5">98%</v-card-text>
            </v-col>
            <v-col cols="6" class="text-right">
                <v-card-text class="text-h5 mt-2">IR-MCI
                    <div class="text-caption mt-1">اپراتور</div>
                </v-card-text>

            </v-col>
        </v-row>
    </v-card>
    <v-alert class="time-misconfiguration-alarm mt-6" color="#fff" type="warning">
        تاریخ دستگاه تنظیم نیست. به <a href="#" class="setting-link">تنظیمات </a> مراجعه کنید
    </v-alert>
    <v-row class="mt-6">
        <v-col cols="6">
            <v-card class="rounded-lg">
                <v-card-item>
                    <div class="bg-icon-right mt-2">
                        <v-icon icon="mdi-camera-timer" class="text-center mt-2 mr-2" color="#fff"></v-icon>
                    </div>
                    <v-icon icon="mdi-white-balance-sunny" class="text-left white-balance-sunny-icon mt-4"
                        color="#FDE50E"></v-icon>
                </v-card-item>
                <v-card-text>
                    <div class="mt-6">device 1</div>
                </v-card-text>
                <v-card-item>
                    <v-switch inset color="warning"></v-switch>
                </v-card-item>
            </v-card>
        </v-col>
        <v-col cols="6">
            <v-card class="rounded-lg">
                <v-card-item>
                    <div class="bg-icon-left mt-2">
                        <v-icon icon="mdi-camera-timer" class="text-center mt-2 mr-2" color="#fff"></v-icon>
                    </div>
                    <v-icon icon="mdi-moon-waning-crescent" class="text-left white-balance-sunny-icon mt-4"
                        color="#1E88E5"></v-icon>
                </v-card-item>
                <v-card-text>
                    <div class="mt-6">device 2</div>
                </v-card-text>
                <v-card-item>
                    <v-switch inset color="warning"></v-switch>
                </v-card-item>
            </v-card>
        </v-col>  
    </v-row>        
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
export default {
    components:{PageHeader},
    data() {
        return {

        }
    }
}
</script>

<style>
/* .app-container  {
    background: #F5F7F9
}
.system-bar{
    background: #F5F7F9
} */

.setting-link {
    color: #FF9800;
    text-decoration: none
}

.bg-icon-right {
    background: #FF9800;
    border-radius: 5px;
    width: 38px;
    height: 38px;
    float: right;
}

.bg-icon-left {
    background: #09224E;
    border-radius: 5px;
    width: 38px;
    height: 38px;
    float: right;

}

.time-misconfiguration-alarm {
    border: 1px solid #FF9800;
}

.time-misconfiguration-alarm .v-alert__content {
    color: #09224E;
}

.time-misconfiguration-alarm .v-alert__prepend {
    color: #FF9800;
}

.mdi-wifi-icon {
    float: right;
    margin-top: 20px;
    margin-right: 30px;
}

.mdi-poll-icon {
    float: right;
    margin-top: 20px;
    margin-right: 30px;
}


.camera-timer {
    color: #ffff;
}

.white-balance-sunny-icon {
    float: left;
}
</style>