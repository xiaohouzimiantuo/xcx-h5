<template>
  <div class="address">
    <header class="head">
      提现
    </header>
    
  </div>
</template>

<script>
import Tick from '@com/tick';
export default {
  data() {
    return {
      tabIndex: 0
    };
  },
  components: {
      Tick
  }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.address {
  font-size: rem(14);
  color: #333333;
  padding-bottom: rem(50);
}
.head {
  @include lh(rem(40));
  padding-left: rem(16);
  font-size: rem(20);
  color: #333333;
  margin-bottom: rem(30);
}
.address_list {
  padding: 0 rem(15);
  border-top: rem(1) solid #d9d9d9;
  .list_item {
    padding: rem(15) 0;
    border-bottom: rem(1) solid #d9d9d9;
    @include flex(space-between);
    .content{
        width: 100%;
        margin-left: rem(10);
    }
    .user_info {
      margin-bottom: rem(10);
      @include flex(space-between);
      .name {
        flex-shrink: 0;
        margin-right: rem(20);
      }
      .phone {
        width: 100%;
        @include line-clamp(1);
      }
      .default {
        flex-shrink: 0;
        color: #7f807f;
      }
    }
  }
}
</style>
