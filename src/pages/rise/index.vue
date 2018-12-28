<template>
  <div class="rise">
    <header class="head">
      发票抬头
    </header>
    <section class="container">
        <ul class="tab">
            <li @click="changeTab(0)" class="tab_item" :class="{active: tabIndex == 0}">
                <p class="tab_text">普票(企业)</p>
                <div class="line"></div>
            </li>
            <li @click="changeTab(1)" class="tab_item" :class="{active: tabIndex == 1}">
                <p class="tab_text">普票(个人)</p>
                <div class="line"></div>
            </li>
            <li @click="changeTab(2)" class="tab_item" :class="{active: tabIndex == 2}">
                <p class="tab_text">专票</p>
                <div class="line"></div>
            </li>
        </ul>

        <ol class="invoice_list" v-show="tabIndex == 0">
            <li class="in_item">
                <span>设为默认发票抬头</span>
                <my-switch @change="changeSwitch" :value="com.default"></my-switch>
            </li>
            <li class="in_item">
                <input type="text" placeholder="请输入抬头名称">
            </li>
            <li class="in_item">
                <input type="text" placeholder="请输入纳税人识别号">
            </li>
            <li class="in_item">
                <span class="gray">营业执照</span>
                <img src="../../assets/imgs/camera.png" alt="" class="camera_img">
            </li>
        </ol>


        <ol class="invoice_list" v-show="tabIndex == 1">
            <li class="in_item">
                <span>设为默认发票抬头</span>
                <my-switch @change="changeSwitch" :value="com.default"></my-switch>
            </li>
            <li class="in_item">
                <input type="text" placeholder="请输入抬头名称">
            </li>
        </ol>


        <ol class="invoice_list" v-show="tabIndex == 2">
            <li class="in_item">
                <span>设为默认发票抬头</span>
                <my-switch @change="changeSwitch" :value="com.default"></my-switch>
            </li>
            <li class="in_item">
                <input type="text" placeholder="请输入抬头名称">
            </li>
            <li class="in_item">
                <input type="text" placeholder="请输入纳税人识别号">
            </li>
            <li class="in_item">
                <input type="text" placeholder="请输入公司注册地址">
            </li>
            <li class="in_item">
                <input type="text" placeholder="请输入公司注册电话">
            </li>
            <li class="in_item">
                <input type="text" placeholder="请输入开户银行名称">
            </li>
            <li class="in_item">
                <span class="gray">营业执照</span>
                <img src="../../assets/imgs/camera.png" alt="" class="camera_img">
            </li>
        </ol>
    </section>

    <div class="btn_wrap">
      <div class="btn" :class="{can: canSub}">保存</div>
    </div>
  </div>
</template>

<script>
import MySwitch from '@com/switch';
export default {
  data() {
    return {
      tabIndex: 0,
      canSub: true,
      com: {
          default: true
      }
    };
  },
  methods: {
    changeTab(index) {
      this.tabIndex = index;
    },
    changeSwitch(value) {
        this.com.default = value;
        console.log(this.com.default);
    }
  },
  components: {
      MySwitch
  }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.rise {
  font-size: rem(14);
  color: #333333;
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
}

.tab {
  padding-top: rem(20);
  height: rem(30);
  @include flex(flex-start);
  .tab_item {
    margin-left: rem(25);
    flex-shrink: 0;
    flex-grow: 0;
    font-family: "PingFangSC-Regular";
    &:first-child {
      margin-left: 0;
    }
    @include fc(center);
    .line {
      margin-top: rem(2);
      width: 0;
      height: rem(2);
      background: #333333;
      border-radius: rem(2);
      transition: all 0.3s ease;
    }
  }
  .active {
    font-family: "PingFangSC-Medium";
    font-weight: bold;
    .line {
      width: rem(14);
    }
  }
}

.invoice_list{
    margin-top: rem(16);
    .in_item{
        position: relative;
        padding: rem(16) rem(16) rem(16) 0;
        @include flex(space-between);
        border-bottom: rem(1) solid #D9D9D9;
        input{
            width: 100%;
            height: 100%;
        }
        .camera_img{
            width: rem(24);
            height: rem(18);
        }
        .gray{
            color: #7F807F;
        }
    }
}

.btn_wrap {
  padding: rem(50) rem(50) 0 rem(50);
  margin-top: rem(60);
  .btn {
    width: 100%;
    height: rem(44);
    @include flex(center);
    font-size: rem(16);
    color: #ffffff;
    background: #dfdfdf;
    border-radius: rem(22);
  }
  .can {
    background: #0088ff;
    background-image: linear-gradient(90deg, #20b3ff 0%, #0088ff 100%);
  }
}
</style>
