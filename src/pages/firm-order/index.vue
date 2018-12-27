<template>
  <div class="firm_order">
    <header class="head">
      确认订单
    </header>
    
    <section class="select_content">
        <h1 class="title">地址设置</h1>
        <div class="selector">
            <section class="selected" @click="chooseAddress">
                <div class="img_box">
                    <img src="../../assets/imgs/pos@2x.png" alt="" class="img">
                </div>
                <!-- <div class="text">
                    <p><span class="name">梁璨季</span>15944716172</p>
                    <p class="add_info">福建省厦门市思明区观音山营运中心7号楼18层</p>
                </div> -->
                <p class="un_text">暂无地址</p>
                <div class="right_arrow">
                    <img src="../../assets/imgs/right_arrow@2x.png" alt="" class="img">
                </div>
            </section>
        </div>
    </section>

    <section class="select_content">
        <h1 class="title">优惠券设置</h1>
        
        <div class="selector">
            <section class="selected">
                <div class="coupon_box">
                    <img src="../../assets/imgs/coupon.png" alt="" class="img">
                </div>
                <!-- <div class="text">
                    满300-10
                </div> -->
                <p class="un_text">暂无可用优惠券</p>
                <div class="right_arrow">
                    <img src="../../assets/imgs/right_arrow@2x.png" alt="" class="img">
                </div>
            </section>
        </div>
    </section>

    <ol>
      <li class="info_list">
        <header class="list_head">
          <p>202大排档</p>
          <p class="subtotal">
              小计：¥499.00
          </p>
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

    <div class="item_wrap">
        <section class="item">
            <p class="name">配送费用</p>
            <p>¥0.00</p>
        </section>
        <section class="item">
            <p class="name">备注</p>
            <p class="remark">请今日送达，多加冰块</p>
            <div class="right_arrow">
                <img src="../../assets/imgs/right_arrow@2x.png" alt="" class="img">
            </div>
        </section>
    </div>

    <section class="settlement">
        <p>应付：¥499.00</p>
        <div @click="toResult" class="settlement_btn">去付款</div>
    </section>
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
    },
    chooseAddress(){
      wx.navigateTo({
        url: "/pages/choose-address/main"
      });
    },
    toResult() {
      wx.navigateTo({
        url: "/pages/pay-result/main"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.firm_order {
  font-size: rem(14);
  color: #333333;
}
.head {
  @include lh(rem(40));
  padding-left: rem(16);
  font-size: rem(20);
  color: #333333;
}

.select_content {
  margin-top: rem(25);
  padding: 0 rem(16);
  .title {
    padding: rem(3);
    font-size: rem(16);
    color: #333333;
  }
}
.selector {

  .selected {
    @include flex(space-between);
    padding: rem(15) 0;
    border-bottom: rem(1) solid #d6d6d6;
    .img_box {
      width: rem(16);
      height: rem(18);
      flex-shrink: 0;
    }
    .coupon_box{
        width: rem(17);
        height: rem(13);
    }
    .text{
        width: 100%;
        margin-left: rem(16);
        .name{
            margin-right: rem(20);
        }
        .add_info{
            @include line-clamp(1);
            margin-top: rem(10);
        }
    }
    .un_text {
      width: 100%;
      margin-left: rem(16);
      font-size: rem(16);
      color: #999999;
    }
    .tip {
      flex-shrink: 0;
      margin-right: rem(10);
    }
  }
}
.right_arrow {
  flex-shrink: 0;
  width: rem(7);
  height: rem(12);
}

.info_list {
  margin-top: rem(-1);
  .list_head {
    height: rem(44);
    @include flex(space-between);
    padding: 0 rem(12) 0 rem(16);
    background: #f8f8f8;
    font-size: rem(16);
    font-weight: bold;
    .subtotal {
      font-size: rem(14);
      color: #0289fe;
      font-weight: normal;
    }
  }
  .goods_list {
    padding: 0 rem(15);
  }
  .goods_item {
    padding: rem(15) 0;
    @include flex(flex-start);
    border-bottom: rem(1) solid #d9d9d9;
    .img_box {
      width: rem(80);
      height: rem(80);
      flex-shrink: 0;
      font-size: 0;
      // background: #F5F4F4;
      border-radius: rem(2);
    }
    .goods_info {
      width: 100%;
      margin-left: rem(10);
      .title {
        @include line-clamp(1);
      }
      .goods_detail {
        margin-top: rem(4);
        font-size: rem(12);
        color: #666666;
      }
      .goods_count {
        margin-top: rem(15);
        @include flex(space-between);
        .price {
          font-size: rem(16);
        }
        .count {
          font-size: rem(14);
          color: #666666;
        }
      }
    }
  }
}
.item_wrap{
    padding: 0 rem(16);
    .item{
        padding: rem(15) 0;
        @include flex(space-between);
        font-size: rem(16);
        color: #333333;
        border-bottom: rem(1) solid #D6D6D6;
        .name{
            flex-shrink: 0;
        }
        .remark{
            width: 100%;
            margin-right: rem(10);
            text-align: right;
            @include line-clamp(1);
        }
    }
}
.settlement{
    margin-top: rem(80);
    padding: 0 rem(13) 0 rem(16);
    height: rem(50);
    @include flex(space-between);
    background: #FAFAFA;
    border-top: rem(1) solid #D9D9D9;
    border-bottom: rem(1) solid #D9D9D9;
    font-size: rem(14);
    color: #0088FF;
    .settlement_btn{
        width: rem(112);
        height: rem(36);
        @include flex(center);
        background: #0088FF;
        background-image: linear-gradient(90deg, #20B3FF 0%, #0088FF 100%);
        border-radius: rem(25);
        color: #fff;
    }
}
</style>
