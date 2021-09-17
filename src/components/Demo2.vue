<script setup>
import { ref, reactive, inject, onMounted, defineProps } from 'vue';
const api =
  'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=17';

const props = defineProps({
  msg: {
    type: String,
    default: '未輸入msg參數',
  },
});

const axios = inject('axios');

const dataList = reactive({});

onMounted(async () => {
  await axios.get(api).then((res) => {
    console.log(res.data);
    dataList.data = res.data;
  });
});
</script>

<template>
  <h2 class="mb-4 text-3xl">{{ msg }}</h2>
  <ul class="list-none flex gap-3 flex-nowrap px-4 py-8 overflow-x-auto">
    <li
      class="border rounded px-8 py-6 flex flex-col gap-3 text-xl text-left"
      v-for="item in dataList.data"
      :key="item.UID"
    >
      <h3 class="text-3xl font-bold mb-4">
        <a
          :href="item.sourceWebPromote"
          target="_blank"
          rel="noopener noreferrer"
          >{{ item.title }}</a
        >
      </h3>
      <p class="">表演場地: {{ item.showInfo[0].locationName }}</p>
      <p>地點: {{ item.showInfo[0].location }}</p>
      <p class="">
        演出時間:
        <span class="text-2xl"
          >{{ item.showInfo[0].time }}~{{ item.showInfo[0].endTime }}</span
        >
      </p>
      <a
        class="
          bg-teal-500
          text-teal-50
          rounded-md
          py-2
          px-4
          shadow
          hover:bg-teal-600 hover:shadow-sm
          duration-200
        "
        :href="item.webSales"
        target="_blank"
        rel="noopener noreferrer"
        >訂票系統</a
      >
    </li>
  </ul>
</template>

<style></style>
