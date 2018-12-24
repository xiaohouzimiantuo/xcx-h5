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
            default: 0  //0 登录 1 注册
        }
    },
    methods: {
      toLogin() {
          if(this.currentPage == 'login') return;
          wx.redirectTo({
            url: '/pages/login/main'
          });
      },
      toRegister() {
          if(this.currentPage == 'register') return;
          wx.redirectTo({
            url: '/pages/register/main'
          });
      },
    },
    onLoad() {
        const pages = getCurrentPages();
        const currentPage = pages[pages.length-1];
        const url = currentPage.route.substr(6).replace(/\/main/, '');
        this.currentPage = url;
    }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.header{
  height: rem(40);
  padding-left: rem(30);
  @include flex(flex-start);
  font-size: rem(14);
  color: #333333;
  .login_text{
    margin-right: rem(25);
  }
  .active{
    @include fc(center);
    position: relative;
    font-size: rem(20);
    color: #0088FF;
    &::after{
      content: "";
      display: block;
      margin-top: rem(4);
      width: rem(20);
      height: rem(2);
      background: #0088FF;
      border-radius: rem(2);
    }
  }
}
</style>
