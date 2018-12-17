<template>
  <div class="info_header">
    <div class="title">
          <p class="title_name"><slot name="title"></slot></p>
          <div class="count_down" v-if="time">
            <span class="time_num">00</span>
            <i class="dot">：</i>
            <span class="time_num">14</span>
            <i class="dot">：</i>
            <span class="time_num">18</span>
          </div>
        </div>
        <div class="right_wrap">
          <slot name="more"></slot>
          
    </div>
  </div>
</template>

<script>
export default {
    props: {
        time: {
            type: String,
            default: ''
        },
        arrow: {
          type: Boolean,
          default: true
        }
    },
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.info_header{
  padding: rem(15) rem(13);
  @include flex(space-between);
  .title{
    @include flex(flex-start);
    font-size: 0;
    .title_name{
      font-size: rem(18);
    }
    .count_down{
      height: 100%;
      margin-left: rem(10);
      @include flex(center);
      font-size: rem(12);
      color: $white;
      .time_num{
        display: block;
        text-align: center;
        padding: rem(2);
        background: #333;
        border-radius: rem(2);
      }
      .dot{
        // display: block;
        // text-align: center;
        color: #333;
      }
    }
  }
  .right_wrap{
    font-size: rem(13);
    color: #999;
    @include flex(flex-start);
    .right_img{
      margin-left: rem(5);
      width: rem(5);
      height: rem(10);
    }
  }
}
</style>
