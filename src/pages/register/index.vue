<template>
  <div class="register">
    <account-head :active="1"/>

    <section class="input_wrap">
      <div class="input_box">
        <input v-model="subData.mobile" @input="checkRegister" type="text" placeholder="请输入手机号">
      </div>

      <!-- 密码 -->
      <div v-if="!pwdShow" class="input_box">
        <input v-model="subData.pwd" type="text" @input="checkRegister" placeholder="请输入密码">
        <div class="eye" @click="showPwd">
          <img src="../../assets/imgs/eye_close@2x.png" alt="" class="eye_close">
        </div>
      </div>
      <div v-else class="input_box">
        <input v-model="subData.pwd" @input="checkRegister" type="password" placeholder="请输入密码">
        <div class="eye" @click="showPwd">
          <img src="../../assets/imgs/Shape@2x.png" alt="" class="eye_open">
        </div>
      </div>

      <!-- 验证码 -->
      <div class="input_box">
        <input v-model="subData.code" @input="checkRegister" type="number" placeholder="短信验证码">
        <div @click="sendCode" class="code_btn" :class="{sending: count > 0}">
          {{codeInfo}}
        </div>
      </div>
    </section>

    <section class="agreement">
        <img @click="read" v-if="readed" src="../../assets/imgs/closexian@2x.png" alt="" class="agr_img">
        <img @click="read" v-else src="../../assets/imgs/un@2x.png" alt="" class="agr_img">
        <span>找回密码 </span>
        <span class="blue_text">《蓝星人水产公约》 </span>
    </section>

    <section class="btn_wrap">
      <div @click="toLogin" class="sub_btn" :class="{can: canRegister}">注册</div>
    </section>
  </div>
</template>

<script>
import AccountHead from '@com/accountHead';
import { setInterval, clearTimeout, clearInterval } from 'timers';
const phoneReg = /^1[34578]\d{9}$/;
export default {
  data() {
    return {
      pwdShow: false,
      canRegister: false,
      count: 0,
      codeInfo: '发送验证码',
      readed: false,
      subData: {
        mobile: '',
        pwd: '',
        code: ''
      }
    }
  },
  methods: {
    showPwd() {
      this.pwdShow = !this.pwdShow;
    },
    checkRegister() {
      if(phoneReg.test(this.subData.mobile) && this.subData.pwd.length >= 6 && this.subData.code.length >= 6) {
        this.canRegister = true;
      }else {
        this.canRegister = false;
      }
    },
    read() {
      this.readed = !this.readed;
    },
    sendCode() {
      if(this.count > 0) return;
      clearInterval(this.timer);
      this.count = 59;
      this.codeInfo = `重新获取${this.count}s`;
      this.timer = setInterval(() => {
        if(this.count > 0) {
          this.count--;
          this.codeInfo = `重新获取${this.count}s`;
        }else {
          clearInterval(this.timer);
          this.codeInfo = '发送验证码';
        }
      }, 1000);
    },
    toLogin() {
      wx.redirectTo({
        url: '/pages/login/main'
      });
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
    .code_btn{
      flex-shrink: 0;
      font-size: rem(16);
      color: #0088FF;
    }
    .sending{
      color: #B1B1B1;
    }
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
.agreement{
  padding-top: rem(14);
  padding-left: rem(30);
  @include flex(flex-start);
  font-size: rem(12);
  .agr_img{
    width: rem(18);
    height: rem(18);
    margin-right: rem(10);
  }
  .blue_text{
    color: #0088FF;
  }
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
