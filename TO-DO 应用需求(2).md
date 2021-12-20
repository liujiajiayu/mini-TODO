## TO-DO 应用需求

### 初始化

使用 [Vite](https://cn.vitejs.dev/) 初始化 [Vue3](https://v3.cn.vuejs.org/) 项目，引入 [Vuex](https://vuex.vuejs.org/zh/)、[Vue Router](https://router.vuejs.org/zh/)。

项目使用 [Naive UI](https://www.naiveui.com/zh-CN/os-theme) 作为组件库。

该项目为纯前端项目，不需要（也不应该）依赖任何服务端或数据库。

项目以移动端 APP 的样式呈现，可以通过 Chrome 的设备模拟功能模拟出手机界面进行开发。请尽量保证该应用在 PC 版的网页也可正常使用。

### 主要需求

* 应用应该包含「主页」和「归档页」两个页面。

* 应用有个顶栏，通过顶栏中的按钮可以在两个页面间切换。页面的切换通过 Vue Router 实现。

* 「主页」展示待办任务的列表，列表中的待办任务可以通过长按调换顺序，可以通过 [vue.draggable](https://github.com/SortableJS/vue.draggable.next) 实现。

* 列表最下方有个添加按钮，点击按钮弹出创建弹窗，可以输入待办任的信息，点击弹窗的确定按钮后会添加一条任务到列表中（出现在列表的最上方）。
* 可以通过滑动任务改变任务的状态：
  * 从右往左滑动任务，可以删除任务，任务从列表消失。
  * 从左往右滑动任务，会把任务标记为已完成。
  * 从左往右滑动已完成的任务，任务会从「主页」的列表消失，进入「归档」页的列表。
  * 滑动任务的需求可以通过 [Swiper](https://swiperjs.com/) 实现。如果没有思路，可以参考 [vuetify-swipeout](https://github.com/davidgaroro/vuetify-swipeout) 这个项目。

* 点击列表中的任务，会弹窗编辑弹窗，可以通过该弹窗对待办任务进行编辑。
* 「归档页」展示已归档的任务列表，任务可以通过长按调换顺序。从右往左滑动任务，或从左往右滑动任务，会将该任务移入「主页」，以未完成的状态出现在主页待办任务列表的最上方。

### 附加需求

* 实现上述需求可以完全不使用 Vuex 来管理状态。但请尝试通过 Vuex 管理应用的部分状态。
* 通过 localStorage 存储待办任务列表和归档任务列表，使应用获得离线的能力。即，关闭应用后再次打开，原本的待办任务和归档任务都应该保留。
* 利用 [vite-plugin-pwa](https://github.com/antfu/vite-plugin-pwa) 将应用改造为一个 PWA 应用。



新一代前端开发与构建工具：https://cn.vitejs.dev/

Vue3: https://vue3js.cn/docs/zh/guide/introduction.html

Vue 专用状态管理库：https://next.vuex.vuejs.org/zh/index.html

Vue 专用前端路由：https://next.router.vuejs.org/zh/introduction.html
