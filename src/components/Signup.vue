<template>
  <PageHeader title="ثبت نام" />
  <v-img class="page-header-avatar" :width="150" aspect-ratio="1/1" cover src="../assets/login.svg"></v-img>
  <div class="text-indigo-darken-4 text-center" color="light-blue-darken-4">لطفا شماره موبایل و رمز عبور خود را وارد
    نمایید:
  </div>
  <v-form @submit.prevent="submitForm" v-model="valid">
    <div class=" text-medium-emphasis text-indigo-darken-4 mt-6">شماره موبایل</div>
    <v-text-field v-model.lazy="phone.value" density="compact" type="number" :error-messages="phone.error" :rules="[validatePhone]" placeholder="09123456789" variant="outlined" 
    maxlength="11" append-inner-icon="mdi-phone-outline" color="#1A237E">
    </v-text-field>
    <div class="text-indigo-darken-4" color="light-blue-darken-4">رمز عبور</div>
    <v-text-field v-model.lazy="password" density="compact" class="login-password" :type="show1 ? 'text' : 'password'" :rules="[getPassword]"
      placeholder="رمز عبور" variant="outlined" append-inner-icon="mdi-lock-outline">
    </v-text-field>
    <div class="text-indigo-darken-4" color="light-blue-darken-4">تکرار رمز عبور</div>
    <v-text-field v-model.lazy="repeatPass" density="compact" :type="show1 ? 'text' : 'password'" :rules="[repeatPassword]"
      placeholder="تکرار رمز عبور" variant="outlined" append-inner-icon="mdi-lock-outline">
    </v-text-field>
    <v-btn type="submit" size="large" block class="mt-6 text-center" color="warning" :loading="loading" :disabled="isSubmit || !valid">ثبت نام
    </v-btn>
  </v-form>
</template>

<script>
import {defineComponent} from "vue";
import { sendCode } from '@/helper/functions.js';
import PageHeader from "@/components/PageHeader.vue";
export default defineComponent({
  components: {PageHeader},
  data() {
    return {
      phone: {
        value: "",
        error: ""
      },
      password: "",
      show1: false,
      repeatPass: "",
      isSubmit: false,
      valid: false,
      loading: false,
    }
  },
  methods: {
    validatePhone(phone) {
      if (phone.length > 13 || phone.length < 10) {
        return "شماره موبایل صحیح نیست";
      }
      if (phone.length == 13) {
        if (!phone.startsWith("+98")) {
          return "شماره موبایل صحیح نیست";
        }
      }
    },
    getPassword(password) {
      if (password.length > 10 || password.length < 5) {
        return "رمز عبور صحیح نیست"
      }
    },
    repeatPassword(repeat) {
      if (repeat != this.password) {
        return "تکرار رمز عبور صحیح نیست"
      }
    },
    async submitForm() {
      this.loading = true;
      try {
        this.isSubmit = true;
        const data = await sendCode(this.phone.value);
        const userPhone = "98." + this.phone.value.substring(1)
        this.$router.push({ name: "SendCode", query: { cellphone: userPhone, digits: data.digits} });
      }
      catch (e) {
        this.isSubmit = false;
        if (e.message == "phone-is-missing") {
          this.phone.error = "شماره موبایل وارد شده صحیح نیست"
        }
      } finally {
        this.loading = false;
      }
    },
  }
})
</script>

<style>
.title-header-page{
  color: "#1A237E";
}
.page-header-avatar {
  margin: 10px auto
}
/* input[type=number] {
  -moz-appearance: textfield;
} */

</style>
