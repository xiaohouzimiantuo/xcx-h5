<template>
  <div class="mine">
    <header class="header">
        <div class="img_box">
            <img src="../../assets/imgs/avatar.png" alt="" class="img">
        </div>
        <div class="userinfo">
            <p class="phone">13554122005</p>
            <div class="level">
                <img src="../../assets/imgs/star.png" alt="" class="star">
                <span class="text">G1会员</span>
                <img src="../../assets/imgs/more@2x.png" alt="" class="right">
            </div>
        </div>
        <div class="set_btn">
            <img src="../../assets/imgs/setting@2x.png" alt="" class="img">
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
   
    <ul class="status_entry">
        <li class="entry_item">
            <img src="../../assets/imgs/wait_pay.png" alt="" class="waitpay">
            <span class="text">待付款</span>
        </li>
        <li class="entry_item">
            <img src="../../assets/imgs/wait_express.png" alt="" class="waitexpress">
            <span class="text">待发货</span>
        </li>
        <li class="entry_item">
            <img src="../../assets/imgs/already_express.png" alt="" class="alreadyexpress">
            <span class="text">已发货</span>
        </li>
        <li class="entry_item">
            <img src="../../assets/imgs/already_end.png" alt="" class="alreadyend">
            <span class="text">已结束</span>
        </li>
    </ul>

    <ol class="info_list">
        <li class="info_item">
            <div class="left_content">
                <span>发票管理</span>
            </div>
            <div class="right_arrow">
                <img src="../../assets/imgs/right_arrow@2x.png" alt="" class="img">
            </div>
        </li>
        <li class="info_item">
            <div class="left_content">
                <span>地址管理</span>
            </div>
            <div class="right_arrow">
                <img src="../../assets/imgs/right_arrow@2x.png" alt="" class="img">
            </div>
        </li>
        <li class="info_item">
            <div class="left_content">
                <span>银行卡管理</span>
            </div>
            <div class="right_arrow">
                <img src="../../assets/imgs/right_arrow@2x.png" alt="" class="img">
            </div>
        </li>
        <li class="info_item">
            <div class="left_content">
                <span>客服中心</span>
                <span>15085275634</span>
            </div>
            <div class="right_arrow">
                <img src="../../assets/imgs/right_arrow@2x.png" alt="" class="img">
            </div>
        </li>
        <li class="info_item">
            <div class="left_content">
                <span>我的收藏</span>
            </div>
            <div class="right_arrow">
                <img src="../../assets/imgs/right_arrow@2x.png" alt="" class="img">
            </div>
        </li>
        <li class="info_item">
            <div class="left_content">
                <span>浏览足迹</span>
            </div>
            <div class="right_arrow">
                <img src="../../assets/imgs/right_arrow@2x.png" alt="" class="img">
            </div>
        </li>
    </ol>
    
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
  padding: rem(4) rem(16);
  height: rem(83);
  display: flex;
  .img_box{
    font-size: 0;
    width: rem(65);
    height: rem(65);
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
  }
  .userinfo{
      width: 100%;
      .phone{
          font-size: rem(20);
          color: #333333;
      }
      .level{
        height: rem(20);
        width: rem(86);
        margin-top: rem(10);
        @include flex(flex-start);
        font-size: 0;
        color: #FFFFFF;
        background: #3B3E4D;
        background-image: linear-gradient(90deg, #828899 0%, #3B3E4D 100%);
        border-radius: rem(12.5);
        .star{
            width: rem(20);
            height: rem(20);
            margin-right: rem(3);
        }
        .text{
            font-size: rem(12);
        }
        .right{
            margin-left: rem(10);
            width: rem(7);
            height: rem(12);
        }
      }
  }
  .set_btn{
      flex-shrink: 0;
      width: rem(36);
      height: rem(36);
      padding: rem(9);
      box-sizing: border-box;
      margin-top: rem(-3);
      font-size: 0;
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

.status_entry{
    padding: 0 rem(16);
    margin-top: rem(20);
    margin-bottom: rem(14);
    @include flex(space-between);
    .entry_item{
        @include fc(center);
        .text{
            margin-top: rem(5);
        }
        .waitpay{
            width: rem(30);
            height: rem(22);
        }
        .waitexpress{
            width: rem(30);
            height: rem(26);
        }
        .alreadyexpress{
            width: rem(31);
            height: rem(29);
        }
        .alreadyend{
            width: rem(25);
            height: rem(30);
        }
    }
}

.info_list{
    padding: 0 rem(16);
    .info_item{
        position: relative;
        height: rem(50);
        @include flex(space-between);
        &:first-child{
            &::before {
                content: '';
                display: block;
                position: absolute;
                width: 100%;
                height:rem(1);
                top: 0;
                left: 0;
                opacity: 0.1;
                background: #000000;
            }
        }
        &::after{
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height:rem(1);
            bottom: 0;
            left: 0;
            opacity: 0.1;
            background: #000000;
        }
        .left_content{
            width: 100%;
            @include flex(space-between);
        }
        .right_arrow{
            margin-left: rem(14);
            flex-shrink: 0;
            width: rem(7);
            height: rem(12);
            font-size: 0;
        }
    }
}

</style>
