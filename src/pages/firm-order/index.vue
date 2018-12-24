<template>
  <div class="order">
    <header class="head">
      订单
    </header>
    <section class="tip">您有2个订单待付款</section>
    
    <ul class="tab">
      <li @click="changeTab(0)" class="tab_item" :class="{active: tabIndex == 0}">
        <p class="tab_text">待付款</p>
        <div class="line"></div>
      </li>
      <li @click="changeTab(1)" class="tab_item" :class="{active: tabIndex == 1}">
        <p class="tab_text">待发货</p>
        <div class="line"></div>
      </li>
      <li @click="changeTab(2)" class="tab_item" :class="{active: tabIndex == 2}">
        <p class="tab_text">已发货</p>
        <div class="line"></div>
      </li>
      <li @click="changeTab(3)" class="tab_item" :class="{active: tabIndex == 3}">
        <p class="tab_text">已结束</p>
        <div class="line"></div>
      </li>
    </ul>


    <ol>
      <li class="info_list">
        <header class="list_head">
          <p>202大排档</p>
          <div v-if="tabIndex == 0" class="btn btn_bg">立即付款</div>
          <div v-if="tabIndex == 1" class="btn btn_bor">取消订单</div>
          <div v-if="tabIndex == 2" class="btn btn_bor">联系客服</div>
          <div v-if="tabIndex == 3" class="btn btn_bg">再次购买</div>
        </header>
        <ul class="goods_list">
          <li class="goods_item">
            <div class="img_box"><img src="../../assets/imgs/avatar.png" alt="" class="img"></div>
            <div class="goods_info">
              <header class="title">商品标题商品标题商品标题商品商品题商品商品</header>
              <p class="goods_detail">12-18到港；18.0千克/箱；4级(10-29条/箱)</p>
              <div class="goods_count">
                <span class="price">
                  ¥258.00
                </span>
                <span class="count">数量x1</span>
              </div>
            </div>
          </li>
        </ul>
      </li>
      <li class="info_list">
        <header class="list_head">
          <p>202大排档</p>
          <div v-if="tabIndex == 0" class="btn btn_bg">立即付款</div>
          <div v-if="tabIndex == 1" class="btn btn_bor">取消订单</div>
          <div v-if="tabIndex == 2" class="btn btn_bor">联系客服</div>
          <div v-if="tabIndex == 3" class="btn btn_bg">再次购买</div>
        </header>
        <ul class="goods_list">
          <li class="goods_item">
            <div class="img_box"><img src="../../assets/imgs/avatar.png" alt="" class="img"></div>
            <div class="goods_info">
              <header class="title">商品标题商品标题商品标题商品商品题商品商品</header>
              <p class="goods_detail">12-18到港；18.0千克/箱；4级(10-29条/箱)</p>
              <div class="goods_count">
                <span class="price">
                  ¥258.00
                </span>
                <span class="count">数量x1</span>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0
    };
  },
  methods: {
    changeTab(index) {
      this.tabIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.order{
  font-size: rem(14);
  color: #333333;
}
.head{
  @include lh(rem(40));
  padding-left: rem(16);
  font-size: rem(20);
  color: #333333;
}
.tip{
  padding-left: rem(16);
  font-size: rem(14);
  color: #666666;
}
.tab{
  margin-top: rem(10);
  height: rem(30);
  padding-left: rem(16);
  @include flex(flex-start);
  .tab_item{
    margin-left: rem(25);
    flex-shrink: 0;
    flex-grow: 0;
    font-family: 'PingFangSC-Regular';
    &:first-child{
      margin-left: 0;
    }
    @include fc(center);
    .line{
      margin-top: rem(2);
      width: 0;
      height: rem(2);
      background: #333333;
      border-radius: rem(2);
      transition: all .3s ease;
    }
  }
  .active{
    font-family: 'PingFangSC-Medium';
    font-weight: bold;
    .line{
      width: rem(14);
    }
  }
}


.info_list{
  margin-top: rem(-1);
  .list_head{
    height: rem(44);
    @include flex(space-between);
    padding: 0 rem(12) 0 rem(16);
    background: #F8F8F8;
    font-size: rem(16);
    font-weight: bold;
    .btn{
      width: rem(98);
      height: rem(30);
      @include flex(center);
      font-size: rem(14);
      font-weight: normal;
      border-radius: rem(15);
    }
    .btn_bg{
      color: $white;
      background: #0088FF;
      background-image: linear-gradient(90deg, #20B3FF 0%, #0088FF 100%);
    }
    .btn_bor{
      color: #0088FF;
      border: rem(1) solid #0088FF;
    }
  }
  .goods_list{
    padding: 0 rem(15);
  }
  .goods_item{
    padding: rem(15) 0;
    @include flex(flex-start);
    border-bottom: rem(1) solid #D9D9D9;
    .img_box{
      width: rem(80);
      height: rem(80);
      flex-shrink: 0;
      font-size: 0;
      // background: #F5F4F4;
      border-radius: rem(2);
    }
    .goods_info{
      width: 100%;
      margin-left: rem(10);
      .title{
        @include line-clamp(1);
      }
      .goods_detail{
        margin-top: rem(4);
        font-size: rem(12);
        color: #666666;
      }
      .goods_count{
        margin-top: rem(15);
        @include flex(space-between);
        .price{
          font-size: rem(16);
        }
        .count{
          font-size: rem(14);
          color: #666666;
        }
      }
    }
  }
}
</style>
