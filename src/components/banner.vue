<template>
  <div class="banner">
   <swiper v-if="env == 'wx'"
    :indicator-dots="options.dots"
    :autoplay="options.autoplay"
    :interval="options.interval"
    :duration="options.duration"
    >
        <swiper-item v-for="(img, index) in options.imgs" :key="index">
            <image :src="img" class="slide-image" />
        </swiper-item>
    </swiper>
    <van-swipe v-else 
    :show-indicators="options.dots"
    :autoplay="options.interval"
    :duration="options.duration"
    >
        <van-swipe-item v-for="(img, index) in options.imgs" :key="index">
            <img :src="img" alt="" class="slide-image" />
        </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

export default {
  data () {
    return {
        env: process.env._ENV,
        options: {
            dots: true, //指示点
            autoplay: true, //自动切换
            interval: 5000, //自动切换时间
            duration: 500, //动画时长
            imgs: [
                'http://scell.qiyuanlian.top/static/img/banner001.7b232ac.png',
                'http://scell.qiyuanlian.top/static/img/news_banner.39562f5.png',
                'http://scell.qiyuanlian.top/static/img/banner.359d061.png'
            ]
        }
    }
  },
  created() {
      
  }
  
}
</script>

<style lang="scss" scoped>
@import '~@css/mixin.scss';
.van-swipe{
    height: rem(150);
}
.slide-image{
    width: 100%;
    height: 100%;
}
</style>
