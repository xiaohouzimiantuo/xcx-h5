<template>
  <div class="info_header">
    <div class="title">
      <p class="title_name">
        <slot name="title"></slot>
      </p>
      <div class="count_down" v-if="time">
        <span class="time_num">00</span>
        <i class="dot">：</i>
        <span class="time_num">14</span>
        <i class="dot">：</i>
        <span class="time_num">18</span>
      </div>
    </div>
    <div class="right_wrap" v-if="more.address" @click="toMore">
      <div class="right_wrap">
        {{more.name}}
        <img class="right_img" src="../assets/imgs/more@2x.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 倒计时展示
    time: {
      type: String,
      default: ""
    },
    more: {
      type: Object,
      default() {
        return new Object();
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    toMore() {
      if (!this.more.address) return wx.showToast({ title: "没有更多" });
      wx.navigateTo({
        url: this.more.address
      });
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.info_header {
  padding: rem(15) rem(13);
  @include flex(space-between);
  .title {
    @include flex(flex-start);
    font-size: 0;
    .title_name {
      font-family: "PingFangSC-Medium";
      font-size: rem(18);
    }
    .count_down {
      height: 100%;
      margin-left: rem(10);
      @include flex(center);
      font-size: rem(12);
      color: $white;
      .time_num {
        display: block;
        text-align: center;
        padding: rem(2);
        box-sizing: border-box;
        min-width: rem(18);
        text-align: center;
        background: #333;
        border-radius: rem(2);
      }
      .dot {
        // display: block;
        // text-align: center;
        color: #333;
      }
    }
  }
  .right_wrap {
    font-family: "PingFangSC-Regular";
    font-size: rem(13);
    color: #999;
    @include flex(flex-start);
    .right_img {
      margin-left: rem(5);
      width: rem(5);
      height: rem(10);
    }
  }
}
</style>
