<template>
  <n-list-item class="t-wrapper">
    <template #prefix>
      <n-icon size="16" class="icon_move">
        <drag-indicator-outlined />
      </n-icon>
    </template>
    <swiper
      :initial-slide="1"
      :slides-per-view="1"
      :resistance-ratio="0"
      :speed="200"
      @activeIndexChange="onActiveIndexChange"
    >
      <swiper-slide class="back-start-slide">归档</swiper-slide>
      <swiper-slide>{{ task.content }}</swiper-slide>
      <swiper-slide class="back-end-slide">归档</swiper-slide>
    </swiper>
  </n-list-item>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { DragIndicatorOutlined } from "@vicons/material";
import { NListItem, NIcon } from "naive-ui";

const props = defineProps({
  taskIndex: Number,
  task: Object
});

const emit = defineEmits(["back"]);

const onActiveIndexChange = (instance) => {
  const { activeIndex } = instance;
  if (activeIndex === 0 || activeIndex === 2) {
    emit("back");
    setTimeout(() => {
      instance.destroy();
    }, 1);
  }
};
</script>
<style>
  .back-start-slide {
    padding-right: 20px;
    color: white;
    background: #00c50a;
    justify-content: flex-end;
    box-sizing:border-box;
  }
  .back-end-slide {
    padding-left: 20px;
    color: white;
    background: #00c50a;
    justify-content: flex-start;
    box-sizing:border-box;
  }
.t-wrapper:not(:last-child) {
  border-bottom: none;
}
</style>