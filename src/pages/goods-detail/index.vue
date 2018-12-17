<template>
  <div class="detail">
    <section class="det_img">
      <!-- <img class="img" src="" alt=""> -->
    </section>
    <section class="det_content">
      <div class="goods_info">
        <h3 class="title">商品标题商品标题商品标题商品标题商品商品标题商品标题商品标题</h3>
        <div class="info">
          <p class="now_pice">
            <span class="money">￥387</span>
            <span>/500g</span>
          </p>
          <p class="sales">
            <span>销量：</span>
            <span class="count">823箱</span>
          </p>
        </div>
      </div>
      <div class="det_item">
        <div class="info">已选：12-18到港；18.0千克/箱；4级(10-29条/箱)</div>
        <div class="arrow">
          <img class="img" src="../../assets/imgs/right_arrow.png" alt>
        </div>
      </div>
      <div class="description">
        <h4 class="title">产品说明</h4>
        <ul>
          <li class="des_item">
            <p class="label">捕捞方式：</p>
            <p>野生</p>
          </li>
          <li class="des_item">
            <p class="label">原产地：</p>
            <p>加拿大</p>
          </li>
          <li class="des_item">
            <p class="label">发票设置：</p>
            <p>提供增值税发票</p>
          </li>
          <li class="des_item">
            <p class="label">预计航班号：</p>
            <p>AC025 预计14:25落地</p>
          </li>
        </ul>
      </div>

      <div class="det_item">
        <div class="info">图文详情</div>
        <div class="arrow">
          <img class="img" src="../../assets/imgs/right_arrow.png" alt>
        </div>
      </div>
      <div class="det_item">
        <div class="info">
          <p class="label">配送费用</p>
          <p class="sketch">厦门 运费单价：¥0/箱 起送费：¥0</p>
        </div>
        <div class="arrow">
          <img class="img" src="../../assets/imgs/right_arrow.png" alt>
        </div>
      </div>
      <div class="det_item no_border">
        <div class="info">
          <p class="label">成交记录</p>
          <p class="sketch">69条</p>
        </div>
        <div class="arrow">
          <img class="img" src="../../assets/imgs/right_arrow.png" alt>
        </div>
      </div>
    </section>

    <section class="foot_fixed">
      <div class="icon_box">
        <div class="headset">
          <img src="../../assets/imgs/headset2x.png" alt class="img">
        </div>
        <div class="cart">
          <img src="../../assets/imgs/cart@2x.png" alt class="img">
        </div>
      </div>
      <div class="btns">
        <button class="add">加入购物车</button>
        <button class="buy">立即购买</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.img {
  width: 100%;
  height: 100%;
}
.det_img {
  width: 100%;
  height: rem(375);
  background: #f5f5f5;
}
.det_content {
  padding: rem(15) rem(16) rem(70);
}
.goods_info {
  border-bottom: rem(1) solid #d6d6d6;
  .title {
    font-size: rem(16);
    color: #333333;
    line-height: rem(20);
  }
  .info {
    margin-top: rem(15);
    padding-bottom: rem(10);
    @include flex(space-between);
    font-size: rem(13);
    color: #999999;
    .now_pice {
      .money {
        margin-right: rem(5);
        font-size: rem(18);
        color: #ff3b30;
      }
    }
    .sales {
      .count {
        margin: 0 rem(10);
      }
    }
  }
}
.det_item {
  @include flex(space-between);
  padding: rem(15) 0;
  font-size: rem(14);
  color: #333333;
  border-bottom: rem(1) solid #d6d6d6;
  .info {
    width: 100%;
    @include line-clamp(1);
    @include flex(space-between);
    .label {
      flex-shrink: 0;
    }
    .sketch {
      width: 100%;
      padding-right: rem(10);
      text-align: right;
      font-size: rem(12);
      color: #999999;
      @include line-clamp(1);
    }
  }
  .arrow {
    flex-shrink: 0;
    width: rem(10);
    height: rem(16);
  }
}
.description {
  padding-top: rem(15);
  font-size: rem(14);
  color: #333333;
  border-bottom: rem(1) solid #d6d6d6;
  .des_item {
    @include flex(flex-start);
    padding: rem(12) 0;
    font-size: rem(12);
    .label {
      display: block;
      width: rem(80);
      margin-right: rem(20);
      color: #999;
    }
  }
}
.no_border {
  border: 0;
}

.foot_fixed {
  width: 100%;
  height: rem(50);
  @include flex(space-between);
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0 rem(15);
  box-sizing: border-box;
  background: $white;
  .icon_box{
    @include flex(center);
    height: 100%;
    .headset,
    .cart {
      flex-shrink: 0;
      width: rem(60);
      height: 100%;
      @include flex(center);
      .img {
        width: rem(20);
        height: rem(20);
      }
    }
  }
  .btns {
    margin-left: rem(20);
    @include flex(center);
    button {
      @include flex(center);
      // width: rem(98);
      // height: rem(30);
      padding: rem(4) rem(14);
      border-radius: rem(20);
      font-size: rem(14);
    }
    .add {
      border: rem(1) solid #0088ff;
      background: $white;
      color: #0088ff;
    }
    .buy {
      margin-left: rem(14);
      background-image: linear-gradient(90deg, #20b3ff 0%, #0088ff 100%);
      color: $white;
    }
  }
}
</style>
