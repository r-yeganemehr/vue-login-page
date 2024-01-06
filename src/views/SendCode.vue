<template>
    <PageHeader title="ارسال کد" />
    <v-img class="page-header-avatar" :width="150" aspect-ratio="1/1" cover src="../assets/sendcode.svg"></v-img>
    <v-alert v-if="isAlert" type="error" title="خطای ارتباط با سرور" text="لطفا مجددا تلاش کنید" class="text-right mb-4 pa-2"></v-alert>

    <div class="text-indigo-darken-4 text-center  mt-6" color="light-blue-darken-4">
        لطفا کد <span>{{ digits }}</span> رقمی پیامک شده به شماره موبایل <span>{{ cellphone }}</span> را وارد
        نمایید:
    </div>
    <v-form @submit.prevent="sendForm">
        <v-otp-input class="otp-input " v-model="otp.value" :error="isError" :length="digits" variant="underlined"></v-otp-input>
        <div v-if="isError" class="text-subtitle-2 text-center font-weight-medium div-error">{{ otp.error }}</div>
        <v-btn type="submit" size="large" block :disabled="otp.value.length < digits" class="mt-14" :loading="loading"
            color="warning">بعدی</v-btn>
        <div class="mt-6">کدی دریافت نکردید؟ <a href="#" @click.prevent="resendCode">ارسال مجدد</a></div>
    </v-form>
</template>

<script>
import { defineComponent } from "vue";
import PageHeader from "@/components/PageHeader.vue";
import { validataCode } from "../helper/functions.js";
import { sendCode } from "../helper/functions.js"

export default defineComponent({
    components: { PageHeader },
    data: () => ({
        loading: false,
        otp: {
            value: "",
            error: ""
        },
        isError: false,
        isAlert: false,
        
    }),

    methods: {
        async sendForm() {
            this.loading = true;
            try {
        
                const data = await validataCode(this.cellphone, this.otp.value)
                this.$router.push({ name: "Dashboard" })
            }
            catch (e) {
                this.isError = true
                if (e.message === "code-is-invalid") {
                    this.otp.error = "کد وارد شده صحیح نیست"
                }
            }
            finally {
                this.loading = false;
            }
        },
        async resendCode() {
            try {    
                this.otp.value = '';
                this.isError = false;
                const data = await sendCode(this.cellphone);
                thi
            }
            catch (e) {
                this.isError = true
                if (e.message === "code-is-invalid") {
                    this.otp.error = "کد وارد شده صحیح نیست"
                }
            }
        }
    },
    computed: {
        cellphone(){
            try{
                let cellphone =  this.$route.query.cellphone;
                if(!cellphone){
                    throw new Error("server-error")
                }
                return cellphone
            }
            catch(e){
                this.isAlert= true;
            }   
        },
        digits(){
            try{
                let digits =  this.$route.query.digits;
                if(!digits){
                    throw new Error("server-error")
                } 
                return digits;
            }
            catch(e){
                this.isAlert= true;
            }
        },
    }
});
</script>

<style>
.page-header-avatar {
    margin: 10px auto
}

.otp-input {
    direction: ltr;
    color: #1A237E;
}

.div-error {
    color: #F44336;
}</style>