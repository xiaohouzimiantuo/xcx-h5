<template>
  <div class="home">
    <!-- 头部搜索部分 -->
    <header class="head_wrap">
      <div class="local">
        <img class="local_img" src="../../assets/imgs/pos@2x.png" alt>
        <span>厦门</span>
      </div>
      <div @click="toSearch" class="input_wrap">
        <img class="input_img" src="../../assets/imgs/magnifier@2x.png" alt>
        <input disabled class="search" type="text" placeholder="搜索你感兴趣的东西">
      </div>
      <div class="msg_wrap">
        <img class="msg_img" src="../../assets/imgs/msg@2x.png" alt>
      </div>
    </header>
    <!-- banner -->
    <banner></banner>

    <!-- 商品详情 -->
    <section class="slider_wrap">
      <info-head :more="{address: '/pages/more/main',name: '更多'}">
        <p slot="title">海鲜大礼包</p>
      </info-head>
      <div class="slider_list_wrap">
        <slider-list/>
      </div>
    </section>
    <section class="slider_wrap">
      <info-head :time="'aaa'" :more="{address: '/pages/more/main',name: '更多'}">
        <p slot="title">好货限时抢</p>
      </info-head>
      <div class="slider_list_wrap">
        <slider-list/>
      </div>
    </section>
    <section class="slider_wrap">
      <info-head :more="{address: '/pages/more/main',name: '更多'}">
        <p slot="title">商城现货</p>
      </info-head>
      <div class="slider_list_wrap">
        <slider-list/>
      </div>
    </section>
    <section class="slider_wrap">
      <info-head :more="{address: '/pages/more/main',name: '更多'}">
        <p slot="title">猜你喜欢</p>
      </info-head>
      <div class="slider_list_wrap">
        <slider-list/>
      </div>
    </section>

    <!-- 平铺列表 -->
    <section>
      <info-head :more="{address: '/pages/more/main',name: '更多'}">
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
    <section>
      <info-head :more="{address: '/pages/more/main',name: '更多'}">
        <p slot="title">龙虾专区</p>
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

    <!-- 底部导航 -->
    <tab :active="0"></tab>

    <container></container>
  </div>
</template>

<script>
// import mixin from '@/mixin';
import Tab from "@com/tab";
import Banner from "@com/banner";
import SliderList from "@com/sliderList";
import InfoHead from "@com/infoHead";
import { _shopIndex } from "@/http/apis";
export default {
  data() {
    return {};
  },
  created() {
    _shopIndex().then(res => {});
  },
  methods: {},
  components: {
    Tab,
    Banner,
    SliderList,
    InfoHead
  }
  // mixins:[mixin]
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.home {
  padding-bottom: rem(70);
  color: #333333;
  .head_wrap {
    height: rem(40);
    padding: 0 rem(13);
    box-sizing: border-box;
    @include flex(space-between);
    font-size: rem(14);
    .local,
    .input_wrap,
    .msg_wrap {
      @include flex(flex-start);
    }
    .local {
      flex-shrink: 0;
      .local_img {
        width: rem(16);
        height: rem(18);
        margin-right: rem(5);
      }
    }
    .input_wrap {
      padding: 0 rem(10);
      margin-left: rem(10);
      margin-right: rem(8);
      width: 100%;
      background: #f4f4f4;
      border-radius: rem(2);
      height: rem(30);
      .input_img {
        font-size: rem(13);
        margin-right: rem(10);
        width: rem(13);
        height: rem(13);
      }
      .search {
        height: 100%;
        width: 100%;
        background: #f4f4f4;
      }
    }
    .msg_wrap {
      flex-shrink: 0;
      .msg_img {
        width: rem(18);
        height: rem(18);
      }
    }
  }
}

.slider_list_wrap {
  margin-left: rem(13);
  position: relative;
  overflow: hidden;
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
