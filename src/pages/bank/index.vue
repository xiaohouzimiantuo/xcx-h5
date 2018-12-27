<template>
  <div class="bank">
    <header class="head">
      银行卡管理
    </header>
    <ul v-if="listShow" class="card_list">
        <li class="card_info">
            <p>中国银行</p>
            <p>6227******767</p>
        </li>
        <li class="card_info">
            <p>建设银行</p>
            <p>6227******767</p>
        </li>
    </ul>
    <section v-else class="empty">
        <img src="../../assets/imgs/empty@2x.png" alt="" class="empty_img">
        <span>这里空空如也～</span>
    </section>
    <section @click="toAdd" class="add">
      添加银行卡
    </section>
  </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [],
        };
    },
    computed: {
        listShow() {
            if(this.cards.length > 0) return true;
            return false;
        }
    },
    methods: {
        toAdd() {
            wx.navigateTo({
                url: '/pages/add-bank/main'
            });
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.bank {
  padding-bottom: rem(50);
  font-size: rem(14);
  color: #333333;
}
.head {
  @include lh(rem(40));
  padding-left: rem(16);
  font-size: rem(20);
  color: #333333;
  margin-bottom: rem(10);
}
.card_list{
    position: relative;
    padding: 0 rem(16);
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
        position: relative;
        padding: rem(10) rem(8);
        line-height: rem(25);
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
    }
}
.empty{
    @include fc(center);
    margin-top: rem(80);
    color: #7F807F;
    .empty_img{
        width: rem(70);
        height: rem(60);
        margin-bottom: rem(26);
    }
}
.add {
  width: 100%;
  height: rem(50);
  @include flex(center);
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: rem(16);
  color: #0088ff;
  background: #ffffff;
  box-shadow: 0 rem(-2) rem(8) 0 rgba(0, 0, 0, 0.1);
}
</style>
