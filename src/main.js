/*
 * @Author: lanqy
 * @Date: 2021-07-27 11:46:31
 * @Description: file content
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
/**
 * 注册路由组件
 */
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
