<template>
  <div class="detail">
    <section class="det_img">
        <!-- <img class="img" src="" alt=""> -->
    </section>
    <section class="goods_info">
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
    </section>
    <section class="spec">
      <div class="info">
        123
      </div>
      <div class="arrow"><img class="img" src="../../assets/imgs/right_arrow.png" alt=""></div>
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
.img{
    width: 100%;
    height: 100%;
}
.det_img{
    width: 100%;
    height: rem(375);
    background: #f5f5f5;
}
.goods_info{
  padding: rem(15) rem(16);
  .title{
    font-size: rem(16);
    color: #333333;
    line-height: rem(20);
  }
  .info{
    margin-top: rem(15);
    @include flex(space-between);
    font-size: rem(13);
    color: #999999;
    .now_pice{
      .money{
        margin-right: rem(5);
        font-size: rem(18);
        color: #FF3B30;
      }
    }
    .sales{
      .count{
        margin: 0 rem(10);
      }
    }
  }
}
</style>
