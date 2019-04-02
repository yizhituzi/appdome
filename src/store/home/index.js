import {requestByGet} from "../../utils/request";

export default {
  namespaced: true,
  state: {
    location: {
      cityName: '定位中',
      cityId: ""
    }
  },
  mutations: {
    CHANGE_LOCATION(state, data) {
      state.location = data;
      localStorage.setItem("cityId", data.cityId);
    },
  },
  actions: {

  },
  modules: {}
}
