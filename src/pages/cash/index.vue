<template>
  <div class="cash">
    <header class="head">
      提现
    </header>
    
    <section class="container">
      <div class="card">
        <p>添加银行卡</p>
        <div class="right_arrow">
            <img src="../../assets/imgs/right_arrow@2x.png" alt="" class="img">
        </div>
      </div>

      <div class="amount">
        <header class="title">提现金额</header>
        <div class="input_box">
          <span class="unit">￥</span>
          <input type="text" class="money" placeholder="当前余额88.00">
          <span class="isall">全部提现</span>
        </div>
      </div>
      <div class="remark">
        备注：每天可申请提现3次，每次超过5000需要人工审核，每天可提现总金额50000
      </div>
    </section>

    <div class="btn_wrap">
      <div class="btn" :class="{can: canSub}">提现</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canSub: true
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.right_arrow {
  margin-left: rem(14);
  flex-shrink: 0;
  width: rem(7);
  height: rem(12);
  font-size: 0;
}
.cash {
  font-size: rem(14);
  color: #333333;
  padding-bottom: rem(50);
}
.head {
  @include lh(rem(40));
  padding-left: rem(16);
  font-size: rem(20);
  color: #333333;
  font-weight: bold;
}
.container {
  margin-top: rem(10);
  padding-left: rem(16);
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: rem(2);
    background: #000;
    opacity: 0.1;
  }
}

.card{
  height: rem(54);
  padding-left: rem(8);
  margin-right: rem(16);
  position: relative;
  @include flex(space-between);
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: rem(1);
    background: #000;
    opacity: 0.1;
  }
}

.amount{
  margin-top: rem(20);
  font-size: rem(16);
  .title{
    font-weight: bold;
  }
  .input_box{
    margin-top: rem(10);
    padding: rem(8) 0;
    position: relative;
    @include flex(space-between);
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: rem(2);
      background: #000;
      opacity: 0.1;
    }
    .unit{
      flex-shrink: 0;
    }
    .money{
      margin-left: rem(6);
      width: 100%;
    }
    .isall{
      margin-right: rem(16);
      flex-shrink: 0;
      color: #0088FF;
    }
  }
}
.remark{
  margin-top: rem(10);
  padding-right: rem(16);
  color: #999999;
}

.btn_wrap{
  padding: rem(50);
  margin-top: rem(60);
  .btn{
    width: 100%;
    height: rem(44);
    @include flex(center);
    font-size: rem(16);
    color: #FFFFFF;
    background: #DFDFDF;
    border-radius: rem(22);
  }
  .can{
    background: #0088FF;
    background-image: linear-gradient(90deg, #20B3FF 0%, #0088FF 100%);
  }
}

</style>
