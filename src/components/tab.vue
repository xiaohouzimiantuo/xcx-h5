<template>
  <div class="tab">
    <div @click="toHome" class="item" :class="{cur: active == 0}">
        <img v-if="active == 0" class="img" :src="imgs.home" alt="">
        <img v-else class="img" :src="imgs.home_dark" alt="">
        <span >首页</span>
    </div>
    <div @click="toCart" class="item" :class="{cur: active == 1}">
        <img v-if="active == 1" class="img" :src="imgs.cart" alt="">
        <img v-else class="img" :src="imgs.cart_dark" alt="">
        <span >购物车</span>
    </div>
    <div @click="toMine" class="item" :class="{cur: active == 2}">
        <img v-if="active == 2" class="img" :src="imgs.mine" alt="">
        <img v-else class="img" :src="imgs.mine_dark" alt="">
        <span >我的</span>
    </div>
  </div>
</template>

<script>
import home from '@imgs/sel/home_bright@2x.png';
import cart from '@imgs/sel/cart_bright@2x.png';
import mine from '@imgs/sel/mine_bright@2x.png';
import home_dark from '@imgs/nor/home_dark@2x.png';
import cart_dark from '@imgs/nor/cart_dark@2x.png';
import mine_dark from '@imgs/nor/mine_dark@2x.png';
export default {
    props: ['active'],
  data () {
    return {
        currentPage: '',
        imgs: {
            home,
            cart,
            mine,
            home_dark,
            cart_dark,
            mine_dark
        },  
    }
  },
  methods: {
      toHome() {
          if(this.currentPage == 'index') return;
          wx.redirectTo({
            url: '/pages/index/main'
          });
      },
      toCart() {
          if(this.currentPage == 'cart') return;
          wx.redirectTo({
            url: '/pages/cart/main'
          });
      },
      toMine() {
          if(this.currentPage == 'mine') return;
          wx.redirectTo({
            url: '/pages/mine/main'
          });
      },
  },
  onLoad() {
    const pages = getCurrentPages();
    const currentPage = pages[pages.length-1];
    const url = currentPage.route.substr(6).replace(/\/main/, '');
    this.currentPage = url;
  }
}
</script>

<style lang="scss" scoped>
@import '~@css/mixin.scss';
.tab{
    width: 100%;
    height: rem(50);
    position: fixed;
    left: 0;
    bottom: 0;
    @include flex(center);
    box-sizing: border-box;
    padding: 0 rem(15);
    background: rgba(250,250,250,0.90);
    box-shadow: inset 0 0 0 0 #EDEDED;
    .item{
        width: 33.333%;
        height: 100%;
        flex: 1;
        color: $tab_nor;
        font-size: rem(12);
        @include fc(center);
        .img{
            width: rem(25);
            height: rem(25);
        }
    }
    .cur{
        color: $default;
    }
}
</style>
