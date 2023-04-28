<template>
  <div class="index">
    <van-cell
      v-for="item in list"
      :key="item.path"
      :title="(item.name as string)"
      :to="item.path"
      class="link"
    ></van-cell>
    <!-- <div>{{ $t('Home.soccer') }}---{{ $t('Home.basketball') }}</div> -->
    <van-tabs v-model:active="active">
      <van-tab :title="$t('Home.soccer')"></van-tab>
      <van-tab title="标签 2"></van-tab>
      <van-tab title="标签 3"></van-tab>
      <van-tab title="标签 4"></van-tab>
    </van-tabs>
    <!-- <a href="javascript:void(0)" class="text_a" @click="change('zh')">中文</a> --
    <a href="javascript:void(0)" @click="change('en')">English</a> -->
  </div>
</template>

<script setup lang="ts">
  import { layoutRoutes } from '@/router';
  // import { useI18n } from 'vue-i18n';
  import { getDateWeek } from '@/utils/util';
  import { useUserStore } from '@/store';
  const userStore: any = useUserStore();
  const active = ref(0);
  const list = [
    {
      name: '首页',
      path: 'index',
    },
    {
      name: 'pinia',
      path: 'pinia',
    },
    {
      name: 'geo',
      path: 'geo',
    },
    {
      name: 'bar',
      path: 'bar',
    },
  ];
  // const { locale } = useI18n();
  // const change = (type: string) => {
  //   locale.value = type;
  //   console.log(locale, '---locale');
  // };
  const _uIndex = computed(() => userStore.index);
  watch(
    () => _uIndex.value,
    (v) => {
      console.log(v, '--', userStore);
      if (v == 5) {
        userStore.warningAudioDom.play();
      }
    }
  );
  console.log(getDateWeek('atd', [-1, -2, -3, -4, -5, -6]));
</script>

<style lang="less" scoped>
  .index {
    :deep(.van-cell) {
      background-color: #ddd;
      margin-top: 16px;
    }
  }
  .bgmusic {
    display: none;
  }
</style>
