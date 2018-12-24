<template>
  <div class="login">
    <account-head />

    <section class="input_wrap">
      <div class="input_box">
        <input v-model="subData.mobile" @input="checkLogin" type="text" placeholder="请输入手机号">
      </div>
      <!-- <div class="input_box">
        <input :type="pwdShow? 'text': 'password'" placeholder="请输入密码">
        <div class="eye" @click="showPwd">
          <img v-if="!pwdShow" src="../../assets/imgs/eye_close@2x.png" alt="" class="eye_close">
          <img v-else src="../../assets/imgs/Shape@2x.png" alt="" class="eye_open">
        </div>
      </div> -->
      <div v-if="!pwdShow" class="input_box">
        <input v-model="subData.pwd" type="text" @input="checkLogin" placeholder="请输入密码">
        <div class="eye" @click="showPwd">
          <img src="../../assets/imgs/eye_close@2x.png" alt="" class="eye_close">
        </div>
      </div>
      <div v-else class="input_box">
        <input v-model="subData.pwd" @input="checkLogin" type="password" placeholder="请输入密码">
        <div class="eye" @click="showPwd">
          <img src="../../assets/imgs/Shape@2x.png" alt="" class="eye_open">
        </div>
      </div>
    </section>

    <section class="find_pwd">
        <p>找回密码</p>
    </section>

    <section class="btn_wrap">
      <div @click="toHome" class="sub_btn" :class="{can: canLogin}">登录</div>
    </section>
  </div>
</template>

<script>
import AccountHead from '@com/accountHead';
const phoneReg = /^1[34578]\d{9}$/;
export default {
  data() {
    return {
      pwdShow: false,
      canLogin: false,
      subData: {
        mobile: '',
        pwd: ''
      }
    }
  },
  methods: {
    toHome() {
      wx.redirectTo({
        url: "/pages/index/main"
      });
    },
    showPwd() {
      this.pwdShow = !this.pwdShow;
    },
    checkLogin() {
      if(phoneReg.test(this.subData.mobile) && this.subData.pwd.length >= 6) {
        this.canLogin = true;
      }else {
        this.canLogin = false;
      }
    }
  },
  components: {
    AccountHead
  }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.input_wrap{
  margin-top: rem(62);
  padding-left: rem(30);
  padding-right: rem(45);
  .input_box{
    position: relative;
    @include flex(center);
    margin-top: rem(14);
    .eye{
      flex-shrink: 0;
      width: rem(34);
      font-size: 0;
      height: 100%;
      padding-right: rem(5);
      @include flex(center);
      .eye_close{
        height: rem(16);
      }
      .eye_open{
        height: rem(22);
      }
    }
    input{
      width: 100%;
      font-size: rem(16);
      padding: rem(15) rem(10) rem(15) rem(12);
    }
    &:first-child{
      margin-top: 0;
    }
    &::after{
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
.find_pwd{
  padding-top: rem(14);
  padding-right: rem(45);
  @include flex(flex-end);
  font-size: rem(12);
}
.btn_wrap{
  margin-top: rem(50);
  padding: 0 rem(50);
  .sub_btn{
    @include flex(center);
    width: 100%;
    height: rem(44);
    background: #DFDFDF;
    border-radius: rem(22);
    color: #FFFFFF;
  }
  .can{
    background: #0088FF;
    background-image: linear-gradient(90deg, #20B3FF 0%, #0088FF 100%);
  }
}
</style>
