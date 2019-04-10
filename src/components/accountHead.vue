<template>
  <header class="header">
    <p @click="toLogin" class="login_text" :class="{active: active == 0}">登录</p>
    <p @click="toRegister" :class="{active: active == 1}">注册</p>
  </header>
</template>

<script>
export default {
  props: {
    active: {
      type: Number,
      default: 0 //0 登录 1 注册
    }
  },
  methods: {
    toLogin() {
      console.log(this._router.getPath());
      if (this._router.getPath() == "/pages/index/main") return;
      this._router.replace("/pages/index/main");
    },
    toRegister() {
      if (this._router.getPath() == "/pages/register/main") return;
      this._router.replace("/pages/register/main");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.header {
  height: rem(40);
  padding-left: rem(30);
  @include flex(flex-start);
  font-size: rem(14);
  color: #333333;
  .login_text {
    margin-right: rem(25);
  }
  .active {
    @include fc(center);
    position: relative;
    font-family: "PingFangSC-Medium";
    font-size: rem(20);
    color: #0088ff;
    &::after {
      content: "";
      display: block;
      margin-top: rem(4);
      width: rem(20);
      height: rem(2);
      background: #0088ff;
      border-radius: rem(2);
    }
  }
}
</style>
