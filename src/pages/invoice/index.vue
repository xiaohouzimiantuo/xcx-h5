<template>
  <div class="invoice">
    <header class="head">
      发票管理
    </header>
    <ul v-if="isEmpty" class="container">
        <li class="item">
            <p>普票(企业)</p>
            <p class="com">厦门蓝星人科技有限公司</p>
        </li>
    </ul>


    <section v-else class="empty">
        <img src="../../assets/imgs/empty@2x.png" alt="" class="empty_img">
        <span>这里空空如也～</span>
    </section>

    <section @click="toAdd" class="add">
      新增抬头
    </section>
  </div>
</template>

<script>
export default {
    data() {
        return {
            list: [1]
        };
    },
    computed: {
        isEmpty() {
            if(this.list.length > 0) return true;
            return false;
        }
    },
    methods: {
        toAdd() {
            wx.navigateTo({
                url: '/pages/rise/main'
            });
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.invoice {
  font-size: rem(14);
  color: #333333;
  padding-bottom: rem(100);
}
.head {
  @include lh(rem(40));
  padding-left: rem(16);
  font-size: rem(20);
  color: #333333;
  font-weight: bold;
}
.container {
  margin-top: rem(10);
  padding-left: rem(16);
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: rem(2);
    background: #000;
    opacity: 0.1;
  }
  .item{
      padding: rem(10) 0 rem(8) rem(8);
      margin-right: rem(16);
      font-size: rem(16);
      position: relative;
      line-height: rem(25);
      &:after{
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
      .com{
          font-size: rem(14);
          color: #151515;
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
