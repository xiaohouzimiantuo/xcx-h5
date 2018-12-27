<template>
  <div class="pay">
    <header class="head">
      付款结果
    </header>
    
    <section class="container">
        <div class="result">
            <img src="../../assets/imgs/green_right.png" alt="" class="res_img">
            <span>付款成功</span>
        </div>
        <p class="last_time">
            预计9月28日前送达
        </p>
        <div class="btn_wrap">
            <div class="check_btn btn">查看订单</div>
            <div class="stroll_btn btn">继续逛</div>
        </div>
    </section>

    <section class="user_info">
        <p>王小姐 <span class="tel">159****9173</span></p>
        <p>福建省厦门市思明区观音山营运中心7号楼18层</p>
    </section>
    
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.pay {
  padding-bottom: rem(50);
  padding-left: rem(16);
  padding-right: rem(16);
  font-size: rem(14);
  color: #333333;
}
.head {
  @include lh(rem(40));
  font-size: rem(20);
  color: #333333;
  margin-bottom: rem(30);
}

.container{
    margin-top: rem(32);
    @include fc(center);
    .result{
        @include flex(center);
        font-size: rem(22);
        color: #2DAC53;
        .res_img{
            width: rem(26);
            height: rem(18);
            margin-right: rem(6);
        }
    }
    .last_time{
        margin-top: rem(6);
        color: #808080;
    }
    .btn_wrap{
        margin-top: rem(26);
        @include flex(center);
        .btn{
            padding: rem(8) rem(20);
            border: rem(1) solid #979797;
            border-radius: rem(2);
            margin-left: rem(25);
            &:first-child{
                margin-left: 0;
            }
        }
    }
}
.user_info{
    margin-top: rem(30);
    .tel{
        margin-left: rem(22);
    }
}
</style>
