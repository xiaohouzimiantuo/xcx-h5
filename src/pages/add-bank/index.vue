<template>
  <div class="bank">
    <header class="head">
      添加银行卡
    </header>
    <ul class="info_list">
        <li class="card_info">
            <!-- <span class="label">卡类型</span>
            <input readonly type="text" class="middle" placeholder="请选择"> -->
            <type-pick  @value="getType"/>
            <img src="../../assets/imgs/down.png" alt="" class="down">
        </li>
        <li class="card_info">
            <span class="label">持卡人</span>
            <input type="text" class="middle" placeholder="请输入">
        </li>
        <li class="card_info">
            <span class="label">卡号</span>
            <input type="text" class="middle" placeholder="请输入">
        </li>
        <li class="card_info">
            <bank-pick @value="getBank"/>
            <img src="../../assets/imgs/down.png" alt="" class="down">
        </li>
    </ul>

    <section class="btn_wrap">
      <div class="sub_btn" :class="{can}">确定</div>
    </section>
  </div>
</template>

<script>
import bankPick from '@com/bankPicker';
import typePick from '@com/typePicker';
export default {
    data() {
        return {
            can: false,
            bank: ''
        };
    },
    methods: {
        getBank(value) {
            console.log(value);
            this.bank = value;
        },
        getType(value) {
            console.log(value);
            this.type = value;
        }
    },
    components: {
        bankPick, typePick
    }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.bank {
  padding-bottom: rem(50);
  font-size: rem(16);
  color: #333333;
}
.head {
  @include lh(rem(40));
  padding-left: rem(16);
  font-size: rem(20);
  color: #333333;
  margin-bottom: rem(10);
}
.info_list{
    position: relative;
    padding-left: rem(16);
    margin-top: rem(10);
    &::before{
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: rem(1);
        background: #000;
        opacity: 0.1;
    }
    .card_info{
        padding-top: rem(24);
        padding-right: rem(16);
        padding-bottom: rem(7);
        min-height: rem(24);
        position: relative;
        @include flex(space-between);
        &::before{
            content: "";
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: rem(1);
            background: #000;
            opacity: 0.1;
        }
        input::-webkit-input-placeholder { /* WebKit browsers */ 

        color: #999999;

        } 

        input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 

        color: #999999;

        } 

        input::-moz-placeholder { /* Mozilla Firefox 19+ */ 

        color: #999999;

        } 

        input:-ms-input-placeholder { /* Internet Explorer 10+ */ 

        color: #999999;

        } 
        .label{
            width: rem(80);
            flex-shrink: 0;
        }
        .middle{
            width: 100%;
        }
        .down{
            width: rem(14);
            height: rem(8);
            flex-shrink: 0;
        }
    }
}
.btn_wrap{
  margin-top: rem(100);
  padding: 0 rem(50);
  .sub_btn{
    @include flex(center);
    width: 100%;
    height: rem(44);
    background: #DFDFDF;
    border-radius: rem(22);
    color: #FFFFFF;
  }
  .can{
    background: #0088FF;
    background-image: linear-gradient(90deg, #20B3FF 0%, #0088FF 100%);
  }
}
</style>
