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
      @click = "onclick"
    >
      <swiper-slide class="finish-slide">完成</swiper-slide>
      <swiper-slide class="content-slide">{{ task.content }}</swiper-slide>
      <swiper-slide class="delete-slide">删除</swiper-slide>
    </swiper>
  </n-list-item>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { DragIndicatorOutlined } from "@vicons/material";
import { NListItem, NIcon } from "naive-ui";

const props = defineProps({//定义父组件传入子组件的参数
  taskIndex: Number,//id
  task: Object//对象
});

const emit = defineEmits(["delete", "finish","edit"]);//组件发出父组件的函数

const onActiveIndexChange = (instance) => {
  const { activeIndex } = instance;
  if (activeIndex === 0) {
    emit("finish");//触发父组件中的finish捆绑的 函数
    setTimeout(() => {
      instance.destroy();
    }, 1);
  } else if (activeIndex === 2) { 
    emit("delete");//触发父组件中的delete函数
    setTimeout(() => {
      instance.destroy();
    }, 1);
  }
}; 
const onclick = (instance) =>{//编辑函数
  emit("edit");
}

</script>
<style>
.task-item-wrapper {
  padding: 0 !important;
  border: 1px solid var(--merged-border-color);
  cursor: move;
}
  .n-list-item__prefix {
    margin: 0px ;
    padding: 8px;
    display: flex;
  }

  .swiper-container {
    width: 100%;
    height: 100%;
    cursor: default;
  }

  .swiper-slide {
    padding: 8px 0;
    display: flex;
    align-items: center;
    width: 100% !important;
  }
  .content-slide{
    width:100% !important;
  }
  .finish-slide {
    padding-right: 20px;
    color: white;
    background: #009225;
    justify-content: flex-end;
    box-sizing:border-box;
  }

  .delete-slide {
    color: white;
    background: red;
    padding-left: 16px;
    justify-content: flex-start;
    box-sizing:border-box;
  }

.t-wrapper:not(:last-child) {
  border-bottom: none ;
}
</style>