<template>
  <div @touchstart="updateAudio">
    <router-view />
  </div>

  <!-- 进球声音提示   -->
  <audio :src="mp3src" muted preload="auto" id="warningAudio" hidden> </audio>
</template>

<script setup lang="ts">
  import debug from '@/utils/debug';

  import { getCurrentInstance } from 'vue';
  import copyPaste from '@/utils/lib/copy-paste';
  import mp3src from './assets/images/0417.mp3';
  import { useUserStore } from '@/store';
  const userStore: any = useUserStore();
  console.log(getCurrentInstance(), '----getCurrentInstance');

  onMounted(() => {
    // 因为debug是存入localStorage中的，刷新页面会从localStorage取出，根据debug控制是否隐藏
    debug.init();
    copyPaste.disable();
    // TODO
    // setInterval(() => {
    //   userStore.updateIndex(1);
    // }, 1000);
  });
  const updateAudio = () => {
    console.log('----触摸了');
    nextTick(() => {
      const warningAudioDom: any = document.getElementById('warningAudio');
      warningAudioDom.muted = false;
      userStore.updateAudioDom(warningAudioDom);
      userStore.updateIndex(1);
    });
  };
  onBeforeUnmount(() => {
    copyPaste.enable();
  });
</script>

<style>
  #app {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
</style>
