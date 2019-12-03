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

    <van-field
      v-model="phone"
      type="password"
      label="手机号"
      placeholder="请输入手机号"
      :error="phone === ''"
      error-message
    />
    <van-button type="info" @click="onSubmit">提交</van-button>
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
      active: 1,
      phone: '',
      rules: {
        phone: '手机号不能为空'
      }
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
    },
    onSubmit () {
      if (this.phone === '') {
        this.$toast('手机号不能为空')
      }
    }
  }
}
</script>
