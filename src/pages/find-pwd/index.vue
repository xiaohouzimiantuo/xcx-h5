<template>
  <div class="find-pwd">
    <header class="header">找回密码</header>
  </div>
</template>

<script>
import AccountHead from "@com/accountHead";
const phoneReg = /^1[34578]\d{9}$/;
export default {
  data() {
    return {};
  },
  methods: {},
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
