<script setup>
import { reactive, inject, onMounted, defineProps } from 'vue';

const props = defineProps({
  msg: {
    type: String,
    default: 'CHILL',
  },
});

const axios = inject('axios');

const dataList = reactive({});

onMounted(async () => {
  await axios
    .get(
      'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=5'
    )
    .then((res) => {
      // console.log(res.data);
      dataList.data = res.data;
    });
});
</script>

<template>
  <h2 class="mb-4 text-3xl">{{ $props.msg }}</h2>
  <ul class="list-none flex gap-3 flex-nowrap px-4 py-8 overflow-x-auto mb-10">
    <li
      class="
        border
        rounded
        px-8
        py-6
        text-left
        flex flex-col
        gap-3
        justify-between
        text-xl
      "
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
      <p class="">
        演出時間:
        <span class="text-2xl">{{ item.startDate }}~{{ item.endDate }}</span>
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
