<template>
  <!-- 商品列表 -->
  <div class="details-list">
    <!-- item遍历数据-- -->
      <!-- 列表大盒子 -->
      <!-- 滑动组件 -->
      <van-swipe-cell>
      <div class="details-item">
        <!-- 商品左侧图片区域 -->
        <div class="details-item-left">
        <!-- 左侧单选框 -->
      <van-checkbox v-model="checked" v-if="showRadio" checked-color="#C00000" @click="change"></van-checkbox>
          <!-- :src="details.details_small_logo || defaultPic" -->
          <img :src="detailslist.details_small_logo || defaultPic" class="details-pic" />
        </div>
        <!-- 商品右侧信息区域 -->
        <div class="details-item-right">
          <!-- 商品标题 -->
          <span class="details-name">{{ detailslist.details_name }}</span>
          <div class="details-info-box">
            <!-- 商品价格 -->
            <span class="details-price">￥{{ detailslist.details_price | tofixed }}</span>
            <!-- 商品数量 -->
            <van-stepper min=1 max="99" integer v-model="value" v-if="showRadio" @change="change2" />
          </div>
        </div>
      </div>
  <template #right>
    <van-button square text="删除" type="danger" class="delete-button" @click="change3(detailslist.details_id)" />
  </template>
</van-swipe-cell>

    </div>
</template>

<script>
export default {
  props: {
    detailslist: {
      type: Object,
      defaul: {}
    },
    showRadio: {
      type: Boolean,
      defaul: false
    }
  },
  created () {
    console.log(this.detailslist)
  },
  data () {
    return {
      // 默认图片
      defaultPic: require('@/assets/myvant/666.jpg'),
      // checked: this.detailslist.details_state,
      value: this.detailslist.details_count
    }
  },
  computed: {
    checked: {
      get () {
        return this.detailslist.details_state
      },
      set () {
        return this.detailslist.details_state
      }
    }
  },
  filters: {
  // 把数字处理为带两位小数点的数字
    tofixed (num) {
      return Number(num).toFixed(2)
    }
  },
  methods: {
    change () {
      this.$emit('chan', {
        // 商品的 Id
        details_id: this.detailslist.details_id,
        // 商品最新的勾选状态
        details_state: !this.detailslist.details_state
      })
    },
    change2 (val) {
      this.$emit('chan2', {
        // 商品的 Id
        details_id: this.detailslist.details_id,
        // 商品的最新数量
        details_count: +val
      })
    },
    // 删除
    change3 (id) {
      this.$emit('chan3', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.details-item {
  display: flex;
  padding: 10px 5px;
  border-bottom: 1px solid #f0f0f0;
  .details-item-left {
    margin-right: 5px;
      display: flex;
  justify-content: space-between;
  align-items: center;
    .details-pic {
      width: 100px;
      height: 100px;
      display: block;
      margin-left: 8px;
    }
  }
  .details-item-right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .details-name {
      font-size: 13px;
    }
    .details-info-box{
      display: flex;
      justify-content: space-between;
    .details-price {
      font-size: 16px;
      color: #c00000;
    }
    }
  }
}
// 滑动组件
  .delete-button {
    height: 100%;
  }
</style>
