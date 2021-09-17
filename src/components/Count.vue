<script>
import { ref } from 'vue';

export default {
  setup() {
    const num = ref(0);

    const AddFn = () => {
      num.value += 1;
    };
    const MinusFn = () => {
      num.value -= 1;
    };
    return {
      num,
      AddFn,
      MinusFn,
    };
  },
};
</script>

<template>
  <p class="text-6xl text-yellow-400 p-5">{{ num }}</p>
  <div class="flex justify-center gap-3 mb-10">
    <button
      class="rounded py-2 px-4 bg-gray-700 text-2xl text-white"
      @click="AddFn"
    >
      +1
    </button>
    <button
      class="rounded py-2 px-4 bg-gray-700 text-2xl text-white"
      @click="MinusFn"
    >
      -1
    </button>
  </div>
</template>
<style></style>
