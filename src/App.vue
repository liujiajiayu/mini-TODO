<template>
  <div id="app">
    <n-layout>
            <n-layout-header>
                <h1>mini TODO</h1>
                  <n-button @click="goMain" round> 主页 </n-button>
                  <n-button @click="goArchive" round> 归档 </n-button>
            </n-layout-header>
            <n-layout-content>
               <router-view/>
            </n-layout-content>
      </n-layout>
  </div>
</template>

<script setup>
  import {
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NGridItem,
    NGrid,
    NH1,
    NButton,
    NButtonGroup
  } from "naive-ui";
  import { useRouter } from "vue-router";
  import {computed, onMounted,ref} from "vue"
  import { useStore } from "vuex";

  const store = useStore()

  onMounted(() => {
    let mydata = localStorage.getItem("mydata");
    console.log(mydata)
    if(mydata){
      mydata = JSON.parse(mydata)
      store.commit("updateTasks",mydata[0])
      store.commit("updateFinishTasks",mydata[1])
    }
  })

  window.onbeforeunload = (event) => {
    let list = store.state.Task_list;
    let finish = store.state.FinshTask_list;
    let myData = [list,finish];
    localStorage.setItem("mydata",JSON.stringify(myData));
  }

  const router = useRouter()

  const goMain = () => {
    router.push({path : "/" })
  }
  const goArchive = () => {
    router.push({path : "/Archive" })
  }


</script>

<style>
#app {
  background: #f5f5f5;
  margin: 20px 0px;
  /* border: 1px solid #000; */
}
h1{
  color: #000;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.n-layout-header {
  text-align: center;
  border-bottom: 1px solid #adadad;
}

.n-layout-content {
  margin: auto;
  padding: 16px;
  max-width: 360px;
}

.n-button {
  margin-bottom: 10px;
  min-width: 90px;
  color: black;
}

</style>