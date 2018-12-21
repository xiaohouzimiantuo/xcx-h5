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
      <div class="det_item" @click="select = true">
        <div class="info">已选：12-18到港；18.0千克/箱；4级(10-29条/箱)</div>
        <div class="arrow">
          <img class="img" src="../../assets/imgs/right_arrow@2x.png" alt>
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
          <img class="img" src="../../assets/imgs/right_arrow@2x.png" alt>
        </div>
      </div>
      <div class="det_item">
        <div class="info">
          <p class="label">配送费用</p>
          <p class="sketch">厦门 运费单价：¥0/箱 起送费：¥0</p>
        </div>
        <div class="arrow">
          <img class="img" src="../../assets/imgs/right_arrow@2x.png" alt>
        </div>
      </div>
      <div class="det_item no_border">
        <div class="info">
          <p class="label">成交记录</p>
          <p class="sketch">69条</p>
        </div>
        <div class="arrow">
          <img class="img" src="../../assets/imgs/right_arrow@2x.png" alt>
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
          <span class="count">9</span>
        </div>
      </div>
      <div class="btns">
        <div class="add btn">加入购物车</div>
        <div class="buy btn">立即购买</div>
      </div>
    </section>

    <section class="spec_content" :class="{show: select}">
      <div class="product">
        <div class="img_box"><img class="img" src="../../assets/imgs/more@2x.png" alt=""></div>
        <div class="product_info">
          <p>
            <span class="price">￥378</span>
            <span>/500g</span>
            <span>￥5943.34/箱</span>
          </p>
          <p class="other">请选择规格属性</p>
        </div>
        <div class="close" @click="select = false">
          <img class="img" src="../../assets/imgs/close@2x.png" alt="">
        </div>
      </div>

      <div class="spec_item">
        <h5 class="title">到港日期</h5>
        <ul class="infos">
          <li class="item"><p class="inner active">12-18到港</p></li>
          <li class="item"><p class="inner">12-18到港</p></li>
          <li class="item"><p class="inner">12-18到港</p></li>
        </ul>
      </div>
      <div class="spec_item">
        <h5 class="title">包装规格</h5>
        <ul class="infos">
          <li class="item"><p class="inner active">12-18到港</p></li>
          <li class="item"><p class="inner">12-18到港</p></li>
          <li class="item"><p class="inner">12-18到港</p></li>
        </ul>
      </div>
      <div class="spec_item">
        <h5 class="title">级别</h5>
        <ul class="infos">
          <li class="item"><p class="inner active">12-18到港</p></li>
          <li class="item"><p class="inner">12-18到港</p></li>
          <li class="item"><p class="inner">12-18到港</p></li>
        </ul>
      </div>
      <div class="spec_item">
        <h5 class="title">数量</h5>
        <div class="count">
          <count></count>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Count from '@com/count';
export default {
  data() {
    return {
      select: false
    };
  },
  methods: {
    showSpec() {
      this.select  = true;
    }
  },
  components: {
    Count
  }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
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
    width: rem(7);
    height: rem(12);
    @include flex(center);
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
  // padding: 0 rem(15);
  box-sizing: border-box;
  background: $white;
  .icon_box{
    @include flex(center);
    height: 100%;
    .headset,
    .cart {
      position: relative;
      flex-shrink: 0;
      width: rem(60);
      height: 100%;
      @include flex(center);
      .img {
        width: rem(30);
        height: rem(30);
      }
      .count{
        display: block;
        width: rem(16);
        height: rem(16);
        @include flex(center);
        position: absolute;
        right: rem(10);
        top: rem(5);
        border-radius: 50%;
        background: #0088ff;
        color: $white;
        font-size: rem(10);
      }
    }
  }
  .btns {
    margin-left: rem(20);
    margin-right: rem(16);
    @include flex(center);
    .btn {
      @include flex(center);
      // width: rem(98);
      // height: rem(30);
      padding: rem(5) rem(14);
      border-radius: rem(20);
      font-size: rem(12);
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

.spec_content{
  box-sizing: border-box;
  padding: rem(18) rem(15);
  position: fixed;
  width: 100%;
  bottom: -100%;
  left: 0;
  transition: all .5s ease;
  background: $white;
  border-top-left-radius: rem(20);
  border-top-right-radius: rem(20);
  .product{
    height: rem(88);
    @include flex(flex-start);
    .img_box{
      flex-shrink: 0;
      width: rem(88);
      height: rem(88);
    }
    .product_info{
      align-self: flex-end;
      width: 100%;
      font-size: rem(14);
      color: #3F3F3F;
      .price{
        font-size: rem(18);
        color: #FF3B30;
        margin-right: rem(5);
      }
      .other{
        margin-top: rem(18);
        margin-left: rem(14);
        color: #333;
      }
    }
    .close{
      flex-shrink: 0;
        align-self: flex-start;
        width: rem(18);
        height: rem(18);
      }
  }


  .spec_item{
    margin-top: rem(20);
    .title{
      font-size: rem(14);
      color: #333333;
    }
    .infos{
      @include flex(flex-start);
      flex-wrap: wrap;
      font-size: rem(14);
      .item{
        flex-shrink: 0;
        padding: rem(8) 0;
        margin-right: rem(20);
        .inner{
          padding: rem(8);
          border: rem(1) solid #7F7F7F;
          border-radius: rem(2);
        }
        .active{
          border: rem(1) solid #0088FF;
          color: #0088FF;
        }
      }
    }
    .count{
      margin-top: rem(8);
    }
  }
}
.show {
  bottom: rem(50);
}
</style>
