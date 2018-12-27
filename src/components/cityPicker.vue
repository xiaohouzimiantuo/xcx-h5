<template>
  <div class="picker_com">
    <picker v-if="env == 'wx'"
        mode="region"
        @change="bindRegionChange"
        :value="region"
    >
        <view class="picker">
            {{province}}，{{city}}，{{area}}
        </view>
    </picker>
    <section v-else class="picker" @click="showPicker">
        {{province}}，{{city}}，{{area}}
    </section>
    
    <section ref="city_picker" v-if="env != 'wx'" class="picker_info" :class="{show: pickerShow}">
        <van-picker :show-toolbar="true" :columns="columns" @cancel="cancel" @confirm="confirm" @change="cahngeCity"/>
    </section>
  </div>
</template>

<script>
import citys from "@/assets/js/cities";
export default {
  props: {
    region: {
      type: Array,
      default: ["福建省", "厦门市", "思明区"]
    }
  },
  data() {
    return {
      env: process.env._ENV,
      pickerShow: false,
      province: "",
      city: "",
      area: "",
      columns: [ //h5
        // {
        //     values: Object.keys(citys),
        //     // defaultIndex: 0
        //     defaultIndex: this.index1
        // },
        // {
        //     values: Object.keys(citys[region[0]]),
        //     defaultIndex: this.index2
        // },
        // {
        //     values: citys[region[0]][region[1]],
        //     defaultIndex: this.index3
        // },
      ]
    };
  },
  created() {
    this.province = this.region[0];
    this.city = this.region[1];
    this.area = this.region[2];
    this._initColumns(this.region);
  },
  methods: {
    //   wx
    bindRegionChange(e) {
      const picker = e.target.value
      this.province = picker[0];
        this.city = picker[1];
        this.area = picker[2];
        this.$emit('value', picker);
    },
    //   h5
    _initColumns([province, city, area]) {
      this.columns = new Array();

      let p = {};
      p.values = Object.keys(citys);
      p.defaultIndex = 0;
      for (let i = 0; i < p.values.length; i++) {
        if (p.values[i] == province) {
          p.defaultIndex = i;
          break;
        }
      }
      this.columns.push(p);

      let c = {};
      province = province || Object.keys(citys)[0];
      c.values = Object.keys(citys[province]);
      c.defaultIndex = 0;
      for (let i = 0; i < c.values.length; i++) {
        if (c.values[i] == city) {
          c.defaultIndex = i;
          break;
        }
      }
      this.columns.push(c);

      let a = {};
      if (city) {
        if (!citys[province][city]) {
          city = Object.keys(citys[province])[0];
        }
      } else {
        city = Object.keys(citys[province])[0];
      }
      a.values = citys[province][city];
      a.defaultIndex = 0;
      for (let i = 0; i < a.values.length; i++) {
        if (a.values[i] == area) {
          a.defaultIndex = i;
          break;
        }
      }
      this.columns.push(a);
    },
    showPicker() {
      this.pickerShow = true;
    },
    confirm(picker) {
        this.province = picker[0];
        this.city = picker[1];
        this.area = picker[2];
        this.$emit('value', picker);
        this.pickerShow = false;
    },
    cancel() {
      this.pickerShow = false;
    },
    cahngeCity(picker) {
      let values = picker.getValues();
      if (this.region[0] == values[0]) {
        if (this.region[1] != values[0]) {
          this._initColumns([values[0], values[1], null]);
        }
      } else {
        this._initColumns([values[0], null, null]);
      }
    }
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
}
.show {
  bottom: 0;
}
</style>
