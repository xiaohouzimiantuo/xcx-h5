<template>
  <div class="cashier">
    <header class="title">余额充值</header>
    <section class="input_box">
      <span class="label">待支付金额</span>
      <span class="money">￥10.00</span>
    </section>

    <section class="pay_path">
      <div class="path_title">支付方式</div>
      <ul class="paths">
        <li class="path" @click="choosePath(0)">
          <img src="../../assets/imgs/wechart.png" alt="" class="path_img">
          <span class="path_text">微信支付</span>
          <img :src="select == 0? checkedImg: uncheckedImg" alt="" class="select_img">
        </li>
        <li class="path" @click="choosePath(1)">
          <img src="../../assets/imgs/alipay.png" alt="" class="path_img">
          <span class="path_text">支付宝支付</span>
          <img :src="select == 1? checkedImg: uncheckedImg" alt="" class="select_img">
        </li>
      </ul>
    </section>
    <section class="btn_wrap">
      <div class="sub_btn">确认支付</div>
    </section>
  </div>
</template>
<script>
import uncheckedImg from '@/assets/imgs/unchecked@2x.png';
import checkedImg from '@/assets/imgs/tick@2x.png';
export default {
  data() {
    return {
      uncheckedImg,
      checkedImg,
      select: 0, //0微信支付 1支付宝支付
    };
  },
  methods: {
    choosePath(index) {
      this.select = index;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.cashier{
  padding: 0 rem(16);
  font-size: rem(14);
  color: #333333;
}
.title {
  @include flex(flex-start);
  height: rem(40);
  font-size: rem(20);
}
.input_box {
  position: relative;
  margin-top: rem(14);
  @include flex(space-between);
  font-size: rem(14);
  .label {
    flex-shrink: 0;
  }
  .money{
      font-size: rem(18);
      color: #0088FF;
  }
}

.pay_path{
  margin-top: rem(20);
  .path_title{
    padding: rem(6) 0;
  }
  .paths{
    .path{
      position: relative;
      padding: rem(13) rem(1) rem(9) rem(10);
      @include flex(space-between);
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: rem(1);
        position: absolute;
        bottom: 0;
        left: 0;
        opacity: 0.1;
        background: #000000;
      }
      .path_img{
        width: rem(30);
        height: rem(30);
        flex-shrink: 0;
      }
      .path_text{
        display: block;
        width: 100%;
        margin-left: rem(14);
      }
      .select_img{
        width: rem(20);
        height: rem(20);
        flex-shrink: 0;
      }
    }
  }
}

.btn_wrap{
  margin-top: rem(50);
  padding: 0 rem(34);
  .sub_btn{
    @include flex(center);
    width: 100%;
    height: rem(44);
    background: #0088FF;
    background-image: linear-gradient(90deg, #20B3FF 0%, #0088FF 100%);
    border-radius: rem(22);
    color: #FFFFFF;
  }
}

</style>
