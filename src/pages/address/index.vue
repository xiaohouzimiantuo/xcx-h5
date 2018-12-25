<template>
  <div class="address">
    <header class="head">
      收货地址
    </header>
    <ul class="address_list">
      <li class="list_item">
        <div class="user_info">
          <p class="name">任丑丑</p>
          <p class="phone">13507020525</p>
          <p class="default">默认地址</p>
        </div>
        <div>
          福建省厦门市思明区软件园二期望海路11号楼
        </div>
      </li>
      <li class="list_item">
        <div class="user_info">
          <p class="name">任丑丑</p>
          <p class="phone">13507020525</p>
        </div>
        <div>
          福建省厦门市思明区软件园二期望海路11号楼
        </div>
      </li>
    </ul>
    
    <section @click="toNewAdd" class="add">
      新增地址
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0
    };
  },
  methods: {
    toNewAdd() {
      wx.navigateTo({
        url: "/pages/new-address/main"
      });
    }
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
