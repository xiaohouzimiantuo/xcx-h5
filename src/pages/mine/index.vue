<template>
  <div class="mine">
    <header class="header">
        <div class="img_box">
            <!-- <img src="" alt="" class="img"> -->
        </div>
        <div class="userinfo">

        </div>
        <div class="set_btn">
            <!-- <img src="" alt="" class="img"> -->
        </div>
    </header>
    
    <section class="assets">
        
        <div class="amount">
            <section class="amount_wrap">
                <p class="money">98.59</p>
                <p>我的余额</p>
            </section>
            <section class="amount_wrap">
                <p class="money">98.59</p>
                <p>我的积分</p>
            </section>
        </div>
        <div class="btns">
            <div class="btn add">充值</div>
            <div class="btn out">提现</div>
        </div>
    </section>
   


    
    <!-- 底部导航 -->
    <tab :active="2"></tab>
  </div>
</template>

<script>
import Tab from '@com/tab';
export default {
    components: {
        Tab
    }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.mine{
  padding-bottom: rem(70);
  font-size: rem(14);
  color: #333333;
}
.header{
  padding: 0 rem(16);
  height: rem(83);
  display: flex;
  .img_box{
    width: rem(65);
    height: rem(65);
    flex-shrink: 0;
  }
  .userinfo{
      width: 100%;
  }
}
.assets{
    width: rem(343);
    margin: rem(8) auto 0;
    background: #FFFFFF;
    box-shadow: 0 rem(2) rem(9) 0 rgba(0,0,0,0.10);
    border-radius: rem(2);
    .amount{
        flex-shrink: 0;
        position: relative;
        @include flex(center);
        height: rem(78);
        .amount_wrap{
            @include fc(center);
            width: 50%;
            color: #999999;
            .money{
                font-size: rem(18);
                color: #333333;
                margin-bottom: rem(5);
            }
        }
        &::after{
            content: "";
            display: block;
            width: 100%;
            height: rem(1);
            position: absolute;
            bottom: 0;
            left: 0;
            opacity: 0.1;
            background: #000000;
        }
    }
    .btns{
        height: rem(48);
        @include flex(center);
        .btn{
            width: rem(136);
            height: rem(32);
            @include flex(center);
            border-radius: rem(16);
        }
        .add{
            margin-right: rem(12);
            background-image: linear-gradient(90deg, #20B3FF 0%, #0088FF 100%);
            color: $white;
        }
        .out{
            margin-left: rem(12);
            border: rem(1) solid #0088FF;
            color: #0088FF;
        }
    }
}

</style>
