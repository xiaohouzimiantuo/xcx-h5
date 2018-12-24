<template>
  <div class="slider_content">
    <ul class="slider_list">
        <li class="slider_item" @click="toDetail" v-for="(item, index) in items" :key="index">
        <section class="img_wrap">
            <!-- <img class="img" src="http://scell.qiyuanlian.top/static/img/zaisheng.6d33348.png" alt=""> -->
            <span class="label">
                热卖
            </span>
        </section>
        <section class="name">野生象拔蚌</section>
        <section class="price">
            <p class="money">￥378.00</p>
            <p class="unit">/500g</p>
        </section>
        </li>
    </ul>

  </div>
</template>

<script>

export default {
  data () {
    return {
        env: process.env._ENV,
        items: [
            1,2,3,4,5,6
        ]
    }
  },
  methods: {
      toDetail() {
          wx.navigateTo({
            url: '/pages/goods-detail/main'
          });
      }
  }
  
}
</script>

<style lang="scss" scoped>
@import '~@css/mixin.scss';
swiper{
    height: rem(200);
}
.slider_content{
    position: relative;
    &::after{
        content: "";
        display: block;
        width: 100%;
        height: rem(10);
        position: absolute;
        bottom: 0;
        left: 0;
        background: $white;
    }
}
.slider_list{
    padding-bottom: rem(20);
    overflow-x: auto;
    width: 100%;
    box-sizing: border-box;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    // &::-webkit-scrollbar { width: 0 !important }
    @include flex(flex-start);
    -moz-overflow-scrolling: touch;
    -o-overflow-scrolling: touch;
    -ms-overflow-scrolling: touch;
    -webkit-overflow-scrolling: touch;
}
.slider_item{
    flex-shrink: 0;
    width: rem(125);
    overflow: hidden;
    margin-right: rem(10);
    .img_wrap{
        width: 100%;
        height: rem(125);
        position: relative;
        text-align: center;
        background: #f5f5f5;
        .label{
            display: block;

            padding: rem(2) rem(6);
            position: absolute;
            top: 0;
            left: 0;
            font-size: rem(10);
            color: $white;
            border-bottom-right-radius: rem(10);
            background: #20B3FF;
            background-image: linear-gradient(90deg, #20B3FF 0%, #0088FF 100%);
        }
    }
    .name{
        margin: rem(10) 0 rem(7);
        font-size: rem(16);
    }
    .price{
    @include flex(flex-start);
    .money{
        font-size: rem(18);
        color: #FF3B30;
    }
    .unit{
        margin-left: rem(14);
        font-size: rem(13);
        color: #999;
    }
    }
}
</style>
