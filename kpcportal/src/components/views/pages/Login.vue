<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="4">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1 class="text-center">
                    <img
                      src="http://203.223.44.122:8056/Content/images/Logo.png"
                      alt
                      style="width: 100px; height: 100px;"
                    />
                  </h1>
                  <p class="text-center font-moul" style="color: #e9da6d;">
                    ប្រព័ន្ធគ្រប់គ្រងទិន្នន័យ
                    <br />អង្គភាពច្រកចេញចូលតែមួយ
                  </p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-user"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      type="text"
                      class="font-bat"
                      :placeholder="holder.email"
                      v-model="model.username"
                      @keypress.enter="emailPressHandler"
                      @focus="holderFocus('email')"
                      @blur="holderBlur('email', 'អីម៉ែល')"
                    />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <i class="icon-lock"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      type="password"
                      class="font-bat"
                      :placeholder="holder.password"
                      v-model="model.password"
                      ref="password"
                      @keypress.enter="clickLoginHandler"
                      @focus="holderFocus('password')"
                      @blur="holderBlur('password', 'លេខសំងាត់')"
                    />
                  </b-input-group>
                  <b-row>
                    <b-col cols="12 text-center">
                      <b-button
                        variant="primary gold"
                        class="px-4 btn-sm btn-block font-kulen"
                        @click="clickLoginHandler"
                      >ចូលប្រព័ន្ធ</b-button>
                    </b-col>
                    <br />
                    <br />
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import CryptoJS from 'crypto-js';
export default {
  name: "Login",
  data: function() {
    return {
      model: {
        grant_type: "password",
        username: "",
        password: ""
      },
      holder: {
        email: "អីម៉ែល",
        password: "លេខសំងាត់"
      }
    };
  },
  created: function() {
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("jwt@user");
    sessionStorage.removeItem("jwt@exp");
  },
  methods: {
    clickLoginHandler: function() {
      let _this = this;
      let loading = this.$loading.show();
      axios({
        method: 'POST',
        url: 'http://203.223.44.122:8058/account/login',
        data: qs.stringify(this.model),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function(res) {
          sessionStorage.setItem('jwt', CryptoJS.AES.encrypt(res.data.access_token,'jwtaccess'));
          sessionStorage.setItem('jwt@user', CryptoJS.AES.encrypt(res.data.userName,'jwtaccess'));
          sessionStorage.setItem('jwt@exp', CryptoJS.AES.encrypt(res.data['.expires'],'jwtaccess'));
          _this.$router.push('/Admin');
      }).finally(function() {
          loading.hide();
      });
    },
    emailPressHandler: function() {
      this.$refs.password.focus();
    },
    holderFocus(field) {
      this.holder[field] = "";
    },
    holderBlur(field, value) {
      this.holder[field] = value;
    }
  }
};
</script>
<style scoped>
.card-group > .card {
  border: none;
  box-shadow: none;
  border-radius: 3px;
}
.form-control {
  box-shadow: none;
  height: 35px;
}
.form-control:focus {
  background: rgba(8, 86, 171, 0.1);
}
.card-body {
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
}
.gold {
  background: rgb(233, 218, 109);
  border-color: #dec821;
  box-shadow: none;
}
</style>
