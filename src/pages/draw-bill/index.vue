<template>
  <div class="draw">
    <header class="head">
        <p class="money">0.00</p>
        <div class="right_content" @click="toInvoice">
            <p>发票抬头</p>
            <div class="right_arrow">
                <img src="../../assets/imgs/right_arrow@2x.png" alt="" class="img">
            </div>
        </div>
    </header>
    <p class="total">总金额（元）</p>

    <ul class="tab">
        <li @click="changeTab(0)" class="tab_item" :class="{active: tabIndex == 0}">
            <p class="tab_text">待开票</p>
            <div class="line"></div>
        </li>
        <li @click="changeTab(1)" class="tab_item" :class="{active: tabIndex == 1}">
            <p class="tab_text">已开票</p>
            <div class="line"></div>
        </li>
    </ul>

    <div class="content hide" :class="{show: tabIndex == 0}">
        <section class="grow">
            <div class="grow_title">
                <tick :value="0" />
                <p class="grow_name">极鲜仓配</p>
            </div>
            <ul>
                <li class="grow_item">
                <div class="select_box">
                    <tick :value="1" />
                </div>
                <div class="content">
                    <div class="img_box">
                    </div>
                    <div class="info">
                    <p class="title">商品标题商品标题商品标题商品asdfasdf</p>
                    <p class="tip"><span class="c1">12-14到港</span><span>18kg/箱</span></p>
                    <div class="bottom">
                        <p class="price">￥378.00</p>
                        <count></count>
                    </div>
                    </div>
                </div>
                </li>
                <li class="grow_item">
                <div class="select_box">
                    <tick :value="1" />
                </div>
                <div class="content">
                    <div class="img_box">
                    </div>
                    <div class="info">
                    <p class="title">商品标题商品标题商品标题商品asdfasdf</p>
                    <p class="tip"><span class="c1">12-14到港</span><span>18kg/箱</span></p>
                    <div class="bottom">
                        <p class="price">￥378.00</p>
                        <count></count>
                    </div>
                    </div>
                </div>
                </li>
            </ul>
        </section>
    </div>
    <div class="content hide" :class="{show: tabIndex == 1}">
        <section class="grow">
            <div class="grow_title">
                <tick :value="0" />
                <p class="grow_name">极鲜仓配</p>
            </div>
            <ul>
                <li class="grow_item">
                <div class="select_box">
                    <tick :value="1" />
                </div>
                <div class="content">
                    <div class="img_box">
                    </div>
                    <div class="info">
                    <p class="title">商品标题商品标题商品标题商品asdfasdf</p>
                    <p class="tip"><span class="c1">12-14到港</span><span>18kg/箱</span></p>
                    <div class="bottom">
                        <p class="price">￥378.00</p>
                        <count></count>
                    </div>
                    </div>
                </div>
                </li>
                <li class="grow_item">
                <div class="select_box">
                    <tick :value="1" />
                </div>
                <div class="content">
                    <div class="img_box">
                    </div>
                    <div class="info">
                    <p class="title">商品标题商品标题商品标题商品asdfasdf</p>
                    <p class="tip"><span class="c1">12-14到港</span><span>18kg/箱</span></p>
                    <div class="bottom">
                        <p class="price">￥378.00</p>
                        <count></count>
                    </div>
                    </div>
                </div>
                </li>
            </ul>
        </section>
        <section class="grow">
            <div class="grow_title">
                <tick :value="0" />
                <p class="grow_name">极鲜仓配</p>
            </div>
            <ul>
                <li class="grow_item">
                <div class="select_box">
                    <tick :value="1" />
                </div>
                <div class="content">
                    <div class="img_box">
                    </div>
                    <div class="info">
                    <p class="title">商品标题商品标题商品标题商品asdfasdf</p>
                    <p class="tip"><span class="c1">12-14到港</span><span>18kg/箱</span></p>
                    <div class="bottom">
                        <p class="price">￥378.00</p>
                        <count></count>
                    </div>
                    </div>
                </div>
                </li>
                <li class="grow_item">
                <div class="select_box">
                    <tick :value="1" />
                </div>
                <div class="content">
                    <div class="img_box">
                    </div>
                    <div class="info">
                    <p class="title">商品标题商品标题商品标题商品asdfasdf</p>
                    <p class="tip"><span class="c1">12-14到港</span><span>18kg/箱</span></p>
                    <div class="bottom">
                        <p class="price">￥378.00</p>
                        <count></count>
                    </div>
                    </div>
                </div>
                </li>
            </ul>
        </section>
    </div>
    
    <section @click="tipShow = false" :class="{tip_hide: !tipShow}" class="tip_wrap">请在确认收货后2个月内申请发票</section>
    <section class="bottom">
        <div class="left_content">
            <tick /> 
            <p class="text">全选</p>
        </div>
        <div class="right_content">
            <p>¥258.00</p>
            <div class="btn">
                申请开票
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import Count from '@com/count';
import Tick from '@com/tick';
export default {
  data() {
    return {
      tabIndex: 0,
      tipShow: true
    };
  },
  methods: {
    changeTab(index) {
      this.tabIndex = index;
    },
    toInvoice() {
        wx.navigateTo({
            url: '/pages/invoice/main'
        });
    }
  },
  components: {
      Count,Tick
  }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.draw {
  font-size: rem(14);
  color: #333333;
  padding-bottom: rem(70);
}
.head {
  @include flex(space-between);
  padding: rem(10) rem(16);
  color: #333333;
  font-size: rem(18);
  .money {
    font-size: rem(20);
    font-weight: bold;
  }
  .right_content {
    @include flex(center);
  }
}

.tab {
  padding-top: rem(20);
  height: rem(30);
  @include flex(flex-start);
  .tab_item {
    margin-left: rem(25);
    flex-shrink: 0;
    flex-grow: 0;
    font-family: "PingFangSC-Regular";
    &:first-child {
      margin-left: 0;
    }
    @include fc(center);
    .line {
      margin-top: rem(2);
      width: 0;
      height: rem(2);
      background: #333333;
      border-radius: rem(2);
      transition: all 0.3s ease;
    }
  }
  .active {
    font-family: "PingFangSC-Medium";
    font-weight: bold;
    .line {
      width: rem(14);
    }
  }
}

.total {
  padding-left: rem(16);
  font-size: rem(14);
  color: #666666;
}
.tab {
  padding-left: rem(16);
}

.grow{
  padding: 0 rem(12);
  .grow_title{
    height: rem(44);
    @include flex(space-between);
    background: #FBFBFA;
    .grow_name{
      margin-left: rem(12);
    }
  }
  .grow_item{
    @include flex(flex-start);
    .select_box{
      flex-shrink: 0;
      padding-left: rem(3);
      margin-right: rem(15);
      @include flex(center);
    }
    .content{
      width: 100%;
      padding: rem(12) 0;
      @include flex(flex-start);
      .img_box{
        flex-shrink: 0;
        width: rem(80);
        height: rem(80);
        background: #F5F4F4;
        border-radius: rem(2);
        margin-right: rem(10);
        font-size: 0;
      }
      .info{
        width: 100%;
        .title{
          @include line-clamp(1);
        }
        .tip{
          font-size: rem(12);
          color: #666666;
          .c1{
            margin-right: rem(10);
          }
        }
        .bottom{
          margin-top: rem(16);
          padding-right: rem(3);
          @include flex(space-between);
          .price{
            font-size: rem(16);
          }
        }
      }
    }
  }
}
.right_arrow {
  margin-left: rem(7);
  flex-shrink: 0;
  width: rem(7);
  height: rem(12);
  font-size: 0;
}
.hide{
    display: none;
}
.show{
    display: block!important;
}

.bottom{
    width: 100%;
    height: rem(50);
    box-sizing: border-box;
    padding: 0 rem(16);
    @include flex(space-between);
    position: fixed;
    bottom: 0;
    left: 0;
    background: #FFFFFF;
    border-top: rem(1) solid #EDEDED;
    .left_content{
        @include flex(center);
        color: #666;
        .text{
            margin-left: rem(12);
        }
    }
    .right_content{
        @include flex(center);
        color: #0088FF;
        .btn{
            @include flex(center);
            width: rem(112);
            height: rem(36);
            background: #0088FF;
            background-image: linear-gradient(90deg, #20B3FF 0%, #0088FF 100%);
            border-radius: rem(25);
            color: #FFFFFF;
            margin-left: rem(14);
        }
    }
}

.tip_wrap{
    width: 100%;
    height: rem(34);
    box-sizing: border-box;
    padding: 0 rem(16);
    position: fixed;
    bottom: rem(50);
    left: 0;
    transition: all .3s ease;
    @include flex(flex-start);
    background: #FFB742;
    color: #FFFFFF;
}
.tip_hide{
    left: 100%;
}
</style>
