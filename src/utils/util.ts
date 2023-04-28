import dayjs from 'dayjs';
import mp3src from '../assets/images/demo.mp3';
export const toPhoneCall = (mobile: number | string) => {
  const url = `tel:${mobile}`;
  window.location.href = url;
};

/**
 * 动态设置css全局变量实现旋转
 * transform: rotate(var(--image-rotate))
 * @param deg 旋转角度
 * @param prop css变量, 默认'--image-rotate'
 */
export const setRotate = (deg: string, prop = '--image-rotate') => {
  let rotate = document.documentElement.style.getPropertyValue(prop) || '0deg';
  if (typeof deg === 'string') {
    rotate = deg;
  } else {
    rotate = parseInt(rotate) + 90 + 'deg';
  }
  document.documentElement.style.setProperty(prop, rotate);
};

interface DateItem {
  date: string;
  week: string;
}
/**
 * 动态获取当前日期
 * @param type 过去atd 未来btd
 * @param dateArr 获取未来[1,2,3]/过去的数据[-1,-2,-3]
 * @returns [{date: '2023-04-06', week: '星期四'},{date: '2023-04-06', week: '星期四'}]
 */
export const getDateWeek = (type: string, dateArr: Array<number>) => {
  //获取当天日期
  const td = dayjs().format('YYYY-MM-DD');
  const filterWeek: any = {
    0: '日',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
  };
  const tdWeek = `星期${filterWeek[new Date(td).getDay()]}`;
  //默认当天
  const arrDate: Array<DateItem> = [{ date: td, week: tdWeek }];
  dateArr.forEach((item: number) => {
    const date =
      type == 'atd'
        ? dayjs().add(item, 'day').format('YYYY-MM-DD')
        : dayjs().subtract(item, 'day').format('YYYY-MM-DD');
    const week = `星期${filterWeek[new Date(date).getDay()]}`;
    type == 'atd' ? arrDate.unshift({ date, week }) : arrDate.push({ date, week });
  });
  return arrDate;
};
