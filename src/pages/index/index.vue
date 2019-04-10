<template>
  <div class="login">
    <account-head/>

    <section class="input_wrap">
      <div class="input_box">
        <input v-model="subData.mobile" type="number" placeholder="请输入手机号">
      </div>
      <!-- <div class="input_box">
        <input :type="pwdShow? 'text': 'password'" placeholder="请输入密码">
        <div class="eye" @click="showPwd">
          <img v-if="!pwdShow" src="../../assets/imgs/eye_close@2x.png" alt="" class="eye_close">
          <img v-else src="../../assets/imgs/Shape@2x.png" alt="" class="eye_open">
        </div>
      </div>-->
      <div v-if="pwdShow" class="input_box">
        <input v-model="subData.pwd" type="text" placeholder="请输入密码">
        <div class="eye" @click="showPwd">
          <img src="../../assets/imgs/eye_close@2x.png" alt class="eye_close">
        </div>
      </div>
      <div v-else class="input_box">
        <input v-model="subData.pwd" type="password" placeholder="请输入密码">
        <div class="eye" @click="showPwd">
          <img src="../../assets/imgs/Shape@2x.png" alt class="eye_open">
        </div>
      </div>
    </section>

    <section class="find_pwd">
      <p>找回密码</p>
    </section>

    <section class="btn_wrap">
      <div @click="login" class="sub_btn" :class="{can: canLogin}">登录</div>
    </section>
    <container></container>
  </div>
</template>

<script>
import AccountHead from "@com/accountHead";
const phoneReg = /^1[34578]\d{9}$/;
import { _login } from "@/http/apis";
export default {
  data() {
    return {
      pwdShow: false,
      subData: {
        mobile: "",
        pwd: ""
      }
    };
  },
  computed: {
    canLogin() {
      return phoneReg.test(this.subData.mobile) && this.subData.pwd.length >= 6;
    }
  },
  created() {
    this._store.get("token") && this._router.replace("/pages/shop/main");
  },
  methods: {
    login() {
      if (!this.canLogin) return this._toast("请检查账号和密码");
      const data = {
        username: this.subData.mobile,
        pw: this.subData.pwd,
        logintype: "1",
        client_type: "2"
      };
      _login(data).then(data => {
        const token = data.data.token;
        this._store.set("token", token);
        this._toast(data.message);
        this._router.replace("/pages/shop/main");
      });
    },
    showPwd() {
      this.pwdShow = !this.pwdShow;
    }
  },
  components: {
    AccountHead
  }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.input_wrap {
  margin-top: rem(62);
  padding-left: rem(30);
  padding-right: rem(45);
  .input_box {
    position: relative;
    @include flex(center);
    margin-top: rem(14);
    .eye {
      flex-shrink: 0;
      width: rem(20);
      height: rem(20);
      font-size: 0;
      height: 100%;
      padding-right: rem(5);
      @include flex(center);
      .eye_close {
        height: rem(20);
      }
      .eye_open {
        height: rem(20);
      }
    }
    input {
      width: 100%;
      font-size: rem(16);
      padding: rem(15) rem(10) rem(15) rem(12);
    }
    &:first-child {
      margin-top: 0;
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: rem(1);
      bottom: 0;
      left: 0;
      opacity: 0.1;
      background: #000000;
    }
  }
}
.find_pwd {
  padding-top: rem(14);
  padding-right: rem(45);
  @include flex(flex-end);
  font-size: rem(12);
}
.btn_wrap {
  margin-top: rem(50);
  padding: 0 rem(50);
  .sub_btn {
    @include flex(center);
    width: 100%;
    height: rem(44);
    background: #dfdfdf;
    border-radius: rem(22);
    color: #ffffff;
  }
  .can {
    background: #0088ff;
    background-image: linear-gradient(90deg, #20b3ff 0%, #0088ff 100%);
  }
}
</style>