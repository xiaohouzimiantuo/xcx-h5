<template>
  <div class="count">
    <p class="minus" :class="{cannot: !canMinus}" @click="minus">-</p>
    <p class="num">{{count}}</p>
    <p class="plus" :class="{cannot: !canPlus}" @click="plus">+</p>
  </div>
</template>

<script>
import toast from '@com/toast';
export default {
  props: {
      value: {
          default: 1
      },
      max: {
          default: 100
      },
      min: {
          default: 1
      }
  },
  data() {
      return {
          count: 1
      };
  },
  created() {
      this.count = this.value;
    //   wx.showLoading({mask: true});
  },
  computed: {
      canPlus() {
          if(this.count < this.max) {
              return true;
          }
          return false;
      },
      canMinus() {
          if(this.count > this.min) return true;
          return false;
      }
  },
  methods: {
      plus() {
          if(this.canPlus) {
              this.count++;
          }else {
              wx.showToast({title: '不可以再加了'});
          }
      },
      minus() {
          if(this.canMinus) {
              this.count--;
          }else {
              wx.showToast({title: '不可以再减了', icon: 'loading', mask: true});
          }
      }
  }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.count{
    width: rem(102);
    height: rem(26);
    font-size: rem(14);
    @include flex(space-between);
    .minus,.plus {
        flex-shrink: 0;
        width: rem(32);
        border: rem(1) solid #666;
        border-radius: rem(2);
        text-align: center;
        @include lh(rem(26));
    }
    .num{
        width: 100%;
        text-align: center;
        @include lh(rem(26));
    }
    .cannot{
        color: #CCCCCC;
        border: rem(1) solid #CCCCCC;
    }
}

</style>
