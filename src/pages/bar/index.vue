<template>
  <div class="bar_box">
    <van-index-bar>
      <template v-for="item in formData.list" :key="item.a">
        <van-index-anchor :index="item.a" />
        <div class="c_item">
          <van-cell
            :class="c_item.check ? 'check-bg' : ''"
            v-for="(c_item, index) in item.list"
            :key="index"
            :title="c_item.text"
            @click="handleCheck(c_item, 2)"
          />
        </div>
      </template>
    </van-index-bar>
    <div class="bottom_select">
      <div>
        <van-button type="default" size="mini" @click="handleCheck(null, 1)">{{
          $t('Bar.selectAll')
        }}</van-button>
        <van-button type="default" size="mini" @click="handleCheck(null, 0)">{{
          $t('Bar.invert')
        }}</van-button>
      </div>
      <div>
        {{ $t('Bar.whole') }}{{ formData.len }}{{ $t('Bar.chang') }} {{ $t('Bar.hide')
        }}{{ formData.islen }}{{ $t('Bar.chang') }}
      </div>
      <van-button type="default" size="mini">{{ $t('ok') }}</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import list from './mock';
  const formData = reactive({
    list,
    len: 0,
    islen: 0,
  });
  const handleCheck = (item?: any, type?: number) => {
    let len = 0;
    let islen = 0;
    if (type == 2) item.check = !item.check;
    formData.list.forEach((i: any) => {
      i.list.forEach((c: any) => {
        if (type == 1) c.check = true;
        if (type == 0) c.check = !c.check;
        c.check ? len++ : islen++;
      });
    });
    formData.len = len;
    formData.islen = islen;
  };
</script>
<style lang="less" scoped>
  .c_item {
    display: flex;
    flex-wrap: wrap;

    .van-cell {
      width: 200px;
      text-align: center;
      background-color: #d7d7d7;
      height: 60px;
      font-size: 12px;
      margin-right: 30px;
      margin-bottom: 10px;
      border-radius: 6px;
      :deep(.van-cell__title) {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 60px;
      }
    }
    .check-bg {
      background-color: #fff5f6;
      color: #e74c5b;
    }
    .van-cell:after {
      border-bottom: none;
    }
  }
  .bottom_select {
    background-color: #ffffff;
    position: fixed;
    padding: 0 40px 0 20px;
    bottom: 0;
    height: 75px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .bar_box {
    padding-bottom: 75px;
  }
</style>
