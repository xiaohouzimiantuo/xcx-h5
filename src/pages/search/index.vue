<template>
  <div class="search">
    <!-- 头部搜索部分 -->
    <header class="head_wrap">
      <div class="input_wrap">
        <img class="input_img" src="../../assets/imgs/magnifier@2x.png" alt="">
        <input @click="toSearch" class="search" type="text" placeholder="搜索你感兴趣的东西">
      </div>
      <div class="msg_wrap">
        <span>搜索</span>
      </div>
    </header>
    <section>
      <info-head :arrow="false">
        <p slot="title">搜索记录</p>
      </info-head>
      <ul class="history_list">
        <li class="his_item">象拔蚌</li>
        <li class="his_item">龙虾</li>
        <li class="his_item">海鲜大礼包</li>
        <li class="his_item">海鲜海鲜</li>
      </ul>
    </section>
  </div>
</template>

<script>
import InfoHead from '@com/infoHead';
export default {
  data() {
    return {};
  },
  created() {},
  methods: {

  },
  components: {
      InfoHead
  }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.search {
  color: #333333;
  .head_wrap {
    height: rem(40);
    padding: 0 rem(13);
    box-sizing: border-box;
    @include flex(space-between);
    font-size: rem(14);
    .local,
    .input_wrap,
    .msg_wrap {
      @include flex(flex-start);
    }
    .local {
      flex-shrink: 0;
      .local_img {
        width: rem(16);
        height: rem(18);
        margin-right: rem(5);
      }
    }
    .input_wrap {
      padding: 0 rem(10);
      margin-left: rem(10);
      margin-right: rem(8);
      width: 100%;
      background: #f4f4f4;
      border-radius: rem(2);
      height: rem(30);
      .input_img {
        font-size: rem(13);
        margin-right: rem(10);
        width: rem(12);
        height: rem(12);
      }
      .search {
        height: 100%;
        width: 100%;
        background: #f4f4f4;
      }
    }
    .msg_wrap {
      flex-shrink: 0;
      margin-left: rem(6);
      margin-right: rem(6);
      font-size: rem(14);
      color: #0088FF;
      .msg_img {
        width: rem(18);
        height: rem(18);
      }
    }
  }
  .history_list{
      @include flex(flex-start);
      flex-wrap: wrap;
      padding: 0 rem(13);
      .his_item{
          flex-shrink: 0;
          margin-right: rem(12);
          margin-bottom: rem(12);
          padding: rem(2) rem(20);
          background: #F4F4F4;
          border-radius: rem(3);
          font-size: rem(13);
          color: #666666;
      }
  }
}
</style>
