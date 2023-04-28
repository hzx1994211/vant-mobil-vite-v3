<template>
  <div class="header">
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
  const active = ref('home');
  const router = useRouter();
  const route = useRoute();
</script>

<style lang="less" scoped>
  .header {
    .van-nav-bar {
      background-color: @green;
    }
  }
</style>
