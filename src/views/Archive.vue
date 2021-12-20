<template>
    <n-space vertical>
      <n-list v-if="FinishList.length">
        <draggable
          :list="FinishList"
          @start="drag = true"
          @end="drag = false"
          item-key="id"
        >
          <template #item="{ index, element }">
            <finish-task-item
              :taskIndex="index"
              :task="element"
              :key="element.id"
              @back="() => gobackList(index,element)"
            />
          </template>
        </draggable>
      </n-list>
      <n-thing class="ach" v-else> Archive </n-thing>
  </n-space>
</template>
<script setup>
import { computed , ref } from "vue";
import {useStore} from "vuex";
import {
  NList,
  NListItem,
  NButton,
  NSpace,
  NThing,
  NModal,
  NInput,
} from "naive-ui";
import FinishTaskItem from "../components/FinishTaskItem.vue";
import draggable from "vuedraggable";
import { cloneDeep } from "lodash";

const store = useStore()
const FinishList = computed(()=>store.state.FinshTask_list)
const gobackList = (index,task) =>{
    store.commit("backToNormal",{
        index:index,
        task:task
    })
}
</script>
<style>
.n-thing {
  text-align: center;
}
.ach{
  font-size: 40px;
}
</style>