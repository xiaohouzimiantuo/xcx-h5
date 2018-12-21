<template>
  <div class="cart">
    <header class="header">
      <p class="name">购物车</p>
      <p>删除</p>
    </header>
    
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
              <!-- <img src="" alt="" class="img"> -->
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
              <!-- <img src="" alt="" class="img"> -->
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
              <!-- <img src="" alt="" class="img"> -->
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
              <!-- <img src="" alt="" class="img"> -->
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
              <!-- <img src="" alt="" class="img"> -->
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
              <!-- <img src="" alt="" class="img"> -->
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
              <!-- <img src="" alt="" class="img"> -->
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
              <!-- <img src="" alt="" class="img"> -->
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


    <section class="settlement">
      <div class="selected">
        <tick :value="0" />
        <p class="tip">已选(3)</p>
      </div>
      <div class="result">
        <p class="money">￥378.00</p>
        <div class="sub">结算(3)</div>
      </div>
    </section>
    <!-- 底部导航 -->
    <tab :active="1"></tab>
  </div>
</template>

<script>
import Tab from '@com/tab';
import Count from '@com/count';
import Tick from '@com/tick';
export default {
    components: {
      Tab,Count,Tick
    }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.cart{
  padding-bottom: rem(70);
  font-size: rem(14);
  color: #333333;
}
.header{
  padding: 0 rem(16);
  height: rem(40);
  @include flex(space-between);
  .name{
    font-size: rem(20);
  }
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
.settlement{
  @include flex(space-between);
  margin-top: rem(20);
  height: rem(50);
  padding: 0 rem(15);
  .selected{
    @include flex(flex-start);
    .tip{
      margin-left: rem(14);
    }
  }
  .result{
    @include flex(space-between);
    .money{
      color: #0088FF;
      margin-right: rem(14);
    }
    .sub{
      @include flex(center);
      width: rem(112);
      height: rem(36);
      background: #0088FF;
      background-image: linear-gradient(90deg, #20B3FF 0%, #0088FF 100%);
      border-radius: rem(25);
      color: $white;
    }
  }
}
</style>
