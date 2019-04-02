import Vue from 'vue';
import Vuex from 'vuex';
import resume from './resume'
import common from './common'
import home from './home'
// import createPersistedState from "vuex-persistedstate";
// import createLogger from 'vuex/dist/logger'
import {requestByGet, requestByPost} from "../utils/request";

Vue.use(Vuex);
export default new Vuex.Store({
  namespaced: true,
  state: {
    user: {}
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data;
    }
  },
  actions: {
    /***
     * 登录
     */
    async loginByOpenIdOrCode({commit}, {type, data}) {
      if (type === "openid") {
        const {data:{customer,token}} = await requestByPost("api/wechat/login/loginByCode", {code: data});
        commit("SET_USER", customer);
        localStorage.setItem("token",token);
      } else if (type === "code") {
        const {data:{customer,token}} = await requestByPost("api/wechat/login/loginByCode", {code: data});
        commit("SET_USER", customer);
        localStorage.setItem("token",token);
      }
    }
  },
  plugins: [
//     createPersistedState(),
//     createLogger(),
  ],
  modules: {
    resume, common, home
  }
})

