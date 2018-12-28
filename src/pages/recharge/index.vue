<template>
  <div class="recharge">
    <header class="title">余额充值</header>
    <section class="input_box">
      <span class="label">充值金额</span>
      <input v-model="sum" @input="checkCan" type="number" placeholder="请输入充值金额">
    </section>

    <section class="btn_wrap">
      <div @click="toCashier" class="sub_btn" :class="{can}">下一步</div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sum: '',
      can: false
    };
  },
  methods: {
    checkCan() {
      if(parseFloat(this.sum) >= 0.01) {
        this.can = true;
      }else {
        this.can = false;
      }
    },
    toCashier() {
      wx.navigateTo({
        url: '/pages/cashier/main'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.recharge {
  padding: 0 rem(16);
  color: #333333;
}
.title {
  @include flex(flex-start);
  height: rem(40);
  font-size: rem(20);
  font-weight: bold;
}
.input_box {
  position: relative;
  margin-top: rem(14);
  @include flex(center);
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
  .label {
    flex-shrink: 0;
    font-size: rem(14);
  }
  input {
    width: 100%;
    padding: rem(8) rem(12);
    font-size: rem(14);
  }
}
.btn_wrap{
  margin-top: rem(100);
  padding: 0 rem(34);
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
