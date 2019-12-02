<template>
  <div class="container">
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
    <van-steps :active="active">
      <van-step>买家下单</van-step>
      <van-step>商家接单</van-step>
      <van-step>买家提货</van-step>
      <van-step>交易完成</van-step>
    </van-steps>
    <van-button type="info" @click="onNext">Next</van-button>
  </div>
</template>

<script>
import areaList from './static/areaList.js'

export default {
  name: 'Area',
  data () {
    return {
      areaList,
      searchResult: [],
      active: 1
    }
  },
  methods: {
    onSave () {
      this.$toast('save')
    },
    onDelete () {
      this.$toast('delete')
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }
        ]
      } else {
        this.searchResult = []
      }
    },
    onNext () {
      this.active++
      if (this.active > 3) {
        this.active = 0
      }
    }
  }
}
</script>
