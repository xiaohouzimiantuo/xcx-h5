<template>
  <div class="picker_com">
    <picker v-if="env == 'wx'"
        @change="bindChange"
        :range="types"
        :value="0"
    >
        <view class="picker">
            <span class="label">银行</span>
            <span class="middle">{{type}}</span>
        </view>
    </picker>
    <section v-else class="picker" @click="showPicker">
        <span class="label">银行</span>
        <span class="middle">{{type}}</span>
    </section>
    
    <section v-if="env != 'wx'" class="picker_info" :class="{show: pickerShow}">
        <van-picker :show-toolbar="true" :columns="types" @cancel="cancel" @confirm="confirm"/>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      env: process.env._ENV,
      types: ['公司', '个人'],
      type: '',
      pickerShow: false,
    };
  },
  created() {
      this.type = this.types[0];
      this.$emit("value", this.types[0]);
  },
  methods: {
    //   wx
    bindChange(e) {
      const value = e.target.value;
      this.type = this.types[value];
      this.$emit("value", this.types[value]);
    },
    //   h5
    showPicker() {
      this.pickerShow = true;
    },
    confirm(value) {
        this.type = value;
        this.$emit('value', value);
        this.pickerShow = false;
    },
    cancel() {
      this.pickerShow = false;
    },
  }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.picker {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  @include flex(flex-start);
  z-index: 1;
}
.picker_info {
  position: fixed;
  width: 100vw;
  bottom: -100%;
  left: 0;
  transition: all 0.5s ease;
  background: $white;
  z-index: 99;
}
.show {
  bottom: 0;
}
.label {
  width: rem(80);
  flex-shrink: 0;
  margin-top: rem(12);
}
.middle {
  margin-top: rem(12);
  width: 100%;
  color: #999999;
}
</style>
