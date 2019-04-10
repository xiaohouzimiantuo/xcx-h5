<template>
  <div class="more">
    <!-- 平铺列表 -->
    <section>
      <info-head>
        <p slot="title">蟹类专区</p>
      </info-head>
      <ul class="info_list">
        <li class="list_item" v-for="i in 4" :key="i">
          <div class="img_wrap">
            <!-- <img class="img" src="http://scell.qiyuanlian.top/static/img/zaisheng.6d33348.png" alt=""> -->
            <span class="label">热卖</span>
          </div>
          <div class="info_wrap">
            <h2 class="title">鲍鱼象拔蚌螃蟹 生蚝很好吃</h2>
            <p class="tip">法国品牌 | 过敏包退 | 官方直售</p>
            <div class="bottom">
              <section class="price">
                <p class="money">
                  <span class="unit">￥</span>378.00
                </p>
                <p class="unit">/500g</p>
              </section>
              <section class="cart">
                <img class="img" src="../../assets/imgs/sel/cart_bright@2x.png" alt>
              </section>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import InfoHead from "@com/infoHead";
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {
    InfoHead
  }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.more {
  color: #333333;
}

.info_list {
  padding: 0 rem(13);
  .list_item {
    // @include flex(flex-start);
    display: flex;
    justify-content: flex-start;
    padding: rem(10) 0;
    border-bottom: rem(1) solid #eeeeee;
    &:last-child {
      border-bottom: 0;
    }
    &:first-child {
      padding-top: 0;
    }
    .img_wrap {
      background: #f5f5f5;
      position: relative;
      flex-shrink: 0;
      width: rem(100);
      height: rem(100);
      .label {
        display: block;

        padding: rem(2) rem(6);
        position: absolute;
        top: 0;
        left: 0;
        font-size: rem(10);
        color: $white;
        border-bottom-right-radius: rem(10);
        background: #20b3ff;
        background-image: linear-gradient(90deg, #20b3ff 0%, #0088ff 100%);
      }
    }
  }
  .info_wrap {
    flex: 1;
    margin-left: rem(16);
    font-family: "PingFangSC-Regular";
    .title {
      @include line-clamp(1);
      font-family: "PingFangSC-Medium";
      font-size: rem(17);
      color: #333333;
    }
    .tip {
      margin-top: rem(10);
      font-size: rem(12);
      color: #999999;
    }
    .bottom {
      margin-top: rem(15);
      @include flex(space-between);
      .price {
        @include flex(flex-start);
        .money {
          font-family: "PingFangSC-Medium";
          font-size: rem(18);
          color: #ff3b30;
          .unit {
            margin: 0;
            font-size: rem(12);
            color: #ff3b30;
          }
        }
        .unit {
          margin-left: rem(10);
          font-size: rem(13);
          color: #999;
        }
      }
      .cart {
        box-sizing: border-box;
        width: rem(36);
        height: rem(36);
        padding: rem(8);
        border-radius: 50%;
        border: rem(1) solid #0088ff;
      }
    }
  }
}
</style>
