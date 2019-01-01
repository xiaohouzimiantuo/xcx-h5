<template>
  <div class="toast" :class="{show: visible}">
    <section class="wrap">
      {{msg}}
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      msg: ''
    };
  },
  watch: {
      msg(value) {
          if(value != '') {
              this.visible = true;
              this._close();
          }else {
              this.visible = false;
              if(this.timer) clearTimeout(this.timer);
          }
      }
  },
  methods: {
      _close() {
          this.timer = setTimeout(() => {
              this.msg = '';
          }, 1500);
      }
  },
  beforeDestroy() {
      if(this.timer) clearTimeout(this.timer);
  }
};
</script>

<style lang="scss" scoped>
@import "~@css/mixin.scss";
.loading{
  width: 0;
  height: 0;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  transition: all .3s ease;
  z-index: 999;
  @include flex(center);
  .wrap{
    padding: rem(20);
    border-radius: rem(10);
    background-color: rgba(0, 0, 0, 0.5);
  }
}
.show{  
  width: 100vw;
  height: 100vh;
}
</style>
