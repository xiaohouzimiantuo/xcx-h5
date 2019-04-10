<template>
  <div class="register">
    <account-head :active="1"/>

    <section class="input_wrap">
      <div class="input_box">
        <input v-model="subData.mobile" type="text" placeholder="请输入手机号">
      </div>

      <!-- 密码 -->
      <div v-if="pwdShow" class="input_box">
        <input v-model="subData.pwd" type="text" placeholder="请输入密码">
        <div class="eye" @click="showPwd">
          <img src="../../assets/imgs/Shape@2x.png" alt class="eye_close">
        </div>
      </div>
      <div v-else class="input_box">
        <input v-model="subData.pwd" type="password" placeholder="请输入密码">
        <div class="eye" @click="showPwd">
          <img src="../../assets/imgs/eye_close@2x.png" alt class="eye_open">
        </div>
      </div>

      <!-- 验证码 -->
      <div class="input_box">
        <input v-model="subData.code" type="number" placeholder="短信验证码">
        <div @click="sendCode" class="code_btn" :class="{sending: count > 0}">{{codeInfo}}</div>
      </div>
    </section>

    <section class="agreement">
      <img @click="read" v-if="readed" src="../../assets/imgs/closexian@2x.png" alt class="agr_img">
      <img @click="read" v-else src="../../assets/imgs/un@2x.png" alt class="agr_img">
      <span>找回密码</span>
      <span class="blue_text">《蓝星人水产公约》</span>
    </section>

    <section class="btn_wrap">
      <div @click="register" class="sub_btn" :class="{can: canRegister}">注册</div>
    </section>
    <container></container>
  </div>
</template>

<script>
import { _register, _sendCode } from "@/http/apis";
import AccountHead from "@com/accountHead";
const phoneReg = /^1[34578]\d{9}$/;
export default {
  data() {
    return {
      pwdShow: false,
      count: 0,
      readed: false,
      subData: {
        mobile: "",
        pwd: "",
        code: ""
      }
    };
  },
  computed: {
    codeInfo() {
      return this.count > 0 ? `重新获取${this.count}s` : "发送验证码";
    },
    canRegister() {
      return (
        phoneReg.test(this.subData.mobile) &&
        this.subData.pwd.length >= 6 &&
        this.subData.code.length >= 6 &&
        this.readed
      );
    }
  },
  methods: {
    showPwd() {
      this.pwdShow = !this.pwdShow;
    },
    read() {
      this.readed = !this.readed;
    },
    sendCode() {
      // type=0&mobile=18760410125&flag=register
      if (this.count > 0) return;
      if (!phoneReg.test(this.subData.mobile))
        return this._toast("请检查手机号");
      const data = {
        mobile: this.subData.mobile,
        type: 0,
        flag: "register"
      };
      _sendCode(data).then(res => {
        this._toast(res.message);
        clearInterval(this.timer);
        this.count = 59;
        this.timer = setInterval(() => {
          if (this.count > 0) {
            this.count--;
          } else {
            clearInterval(this.timer);
          }
        }, 1000);
      });
    },
    register() {
      if (!this.canRegister) return this._toast("请填写完整");
      const data = {
        tel: this.subData.mobile, //电话
        pw: this.subData.pwd, //密码
        smscode: this.subData.code, //验证码 888888
        code: "", //邀请码
        login_imei: "", //手机识别号
        client_type: "2", //客户端来源 1、pc；2、H5；3、ios；4、android
        project: "FISH" //项目标识
      };
      _register.call(this, data).then(res => {
        this._toast(res.message);
        this._router.replace("/pages/index/main");
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
.input_wrap {
  margin-top: rem(62);
  padding-left: rem(30);
  padding-right: rem(45);
  .input_box {
    position: relative;
    @include flex(center);
    margin-top: rem(14);
    .code_btn {
      flex-shrink: 0;
      font-size: rem(16);
      color: #0088ff;
    }
    .sending {
      color: #b1b1b1;
    }
    .eye {
      flex-shrink: 0;
      width: rem(20);
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
.agreement {
  padding-top: rem(14);
  padding-left: rem(30);
  @include flex(flex-start);
  font-size: rem(12);
  .agr_img {
    width: rem(18);
    height: rem(18);
    margin-right: rem(10);
  }
  .blue_text {
    color: #0088ff;
  }
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
