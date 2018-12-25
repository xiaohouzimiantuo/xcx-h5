<template>
  <div class="address">
    <header class="head">
      收货地址
    </header>
    <ul class="info_list">
      <li class="info_item">
          <p class="left_content">设为默认地址</p>
          <div class="right_content">
              <switch :checked="checked" v-if="env == 'wx'" @click="switchChange" color="#0088FF" />
              <van-switch v-else v-model="checked" active-color="#0088FF" />
          </div>
      </li>
      <li class="info_item">
          <input type="text" placeholder="填写收货人姓名" class="left_content">
      </li>
      <li class="info_item">
          <input type="number" placeholder="请输入手机号码" class="left_content">
      </li>
      <li class="info_item">
          <!-- <p class="left_content unchoose">请选择地区</p> -->
          <p class="left_content">
              <!-- <span class="block">福建省</span>
              <span class="block">厦门市</span>
              <span class="block">思明区</span> -->
              <picker class="picker"
        mode="region"
        @change="bindRegionChange"
        :value="region"
        :custom-item="customItem"
    >
        <view class="picker">
        当前选择：{{region[0]}}，{{region[1]}}，{{region[2]}}
        </view>
    </picker>
          </p>
          <div class="right_content">
              <p>选择</p>
              <img src="../../assets/imgs/more@2x.png" alt="" class="right_arrow">
          </div>
      </li>
      <li class="info_item">
          <input type="text" placeholder="请输入详细地址" class="left_content">
      </li>
    </ul>
    <picker
        mode="region"
        @change="bindRegionChange"
        :value="region"
        :custom-item="customItem"
    >
        <view class="picker">
        当前选择：{{region[0]}}，{{region[1]}}，{{region[2]}}
        </view>
    </picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
        env: process.env._ENV,
        checked: true,
        region: ['广东省', '广州市', '海珠区'],
        customItem: '全部'
    };
  },
  methods: {
      switchChange() { //小程序switch不支持v-model
          this.checked = !this.checked;
      },
      bindRegionChange() {
          console.log(123)
      }
  },
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.address {
  font-size: rem(14);
  color: #333333;
}
.head {
  @include lh(rem(40));
  padding-left: rem(16);
  font-size: rem(20);
  color: #333333;
  margin-bottom: rem(30);
}
.right_arrow{
    width: rem(7);
    height: rem(12);
    margin-left: rem(10);
    flex-shrink: 0;
}
.info_list{
    padding: 0 rem(15);
    border-top: rem(1) solid #d9d9d9;
    .info_item{
        height: rem(50);
        border-bottom: rem(1) solid #d9d9d9;
        @include flex(space-between);
        .left_content{
            @include flex(flex-start);
            width: 100%;
            height: 100%;
            color: #333333;
            .block{
                margin-right: rem(10);
            }
        }
        input::-webkit-input-placeholder{
            font-size: rem(14);
            color: #7F807F;
        }
        .unchoose{
            color: #7F807F;
        }
        .right_content{
            flex-shrink: 0;
            @include flex(center);
        }
    }
}
</style>
