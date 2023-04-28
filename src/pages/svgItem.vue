<template>
  <div
    >赛事详情
    <div class="data-per-second">
      <p v-for="i in timeList" class="p-dom" :key="i">
        {{ i }}
      </p>
    </div>
    <svg class="svg-box" width="calc(100%)" height="80">
      <g class="background-group">
        <rect width="calc(100%)" x="0" y="0" height="40" fill="rgba(46, 107, 196, 0.05) "></rect>
        <rect width="calc(100%)" x="0" y="20" height="20" fill="rgba(46, 107, 196, 0.1)"></rect>

        <rect width="calc(100%)" x="0" y="40" height="40" fill="rgba(251, 190, 0, 0.05)"></rect>
        <rect width="calc(100%)" x="0" y="40" height="20" fill="rgba(251, 190, 0, 0.1)"></rect>
      </g>
      <g class="bg">
        <rect
          v-for="(item, index) in list"
          :key="index"
          :x="x(index)"
          :y="item.y"
          :height="item.height"
          :width="widthVlaue"
          :fill="item.type == 1 ? 'rgba(251, 190, 0, 1)' : 'rgba(46, 107, 196, 1)'"
          storke-width="1"
        ></rect>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
  const pDomWidth = ref(0);
  const timeList = [`0'`, `15'`, `30'`, `45'`, `60'`, `75'`, `90'`];
  nextTick(() => {
    const pDom = document.querySelectorAll('.p-dom');
    pDomWidth.value = pDom[0].clientWidth - 15;
  });

  const widthVlaue: any = computed(() => pDomWidth.value / 15);

  const x = computed(() => {
    return (index: number) => {
      if (index == 0) return 1;
      const n = widthVlaue.value * index;
      return n + index;
    };
  });

  const l = [
    {
      y: '40', //往下面摆放是y40开始
      height: '30',
      type: 1,
    },
    {
      y: '40',
      height: '40',
      type: 1,
    },
    {
      y: '40',
      height: '40',
      type: 1,
    },
    {
      y: '0', //往上摆放y是 和 height加起来40
      height: '40',
      type: 2,
    },
    {
      y: '10',
      height: '30',
      type: 2,
    },
    {
      y: '20',
      height: '20',
      type: 2,
    },
    {
      y: '40',
      height: '10',
      type: 1,
    },
    {
      y: '40',
      height: '10',
      type: 1,
    },
    {
      y: '40',
      height: '10',
      type: 1,
    },
    {
      y: '40',
      height: '10',
      type: 1,
    },
    {
      y: '40',
      height: '10',
      type: 1,
    },
    {
      y: '40',
      height: '10',
      type: 1,
    },
    {
      y: '40',
      height: '10',
      type: 1,
    },
    {
      y: '40',
      height: '10',
      type: 1,
    },
    {
      y: '40',
      height: '40',
      type: 1,
    },
  ];

  const list: any = ref(l);
</script>
<style lang="less" scoped>
  .data-per-second {
    display: flex;
    justify-content: space-between;
    p {
      flex: 1;
      color: #9699a8;
      font-size: 12px;
      position: relative;
      // text-align: right;
      &:after {
        content: '';
        height: 80px;
        border-right: 1px solid #eceff4;
        top: 24px;
        left: 0;
        position: absolute;
      }
    }
  }
  .bg {
    display: flex;
    .rect {
      flex: 1;
    }
    .ssssss {
      // width: 3.33px;
    }
  }
  .svg-box {
    margin-top: 10px;
  }
</style>
