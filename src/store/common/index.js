import {requestByGet} from "../../utils/request";

export default {
  namespaced: true,
  state: {
    latLng: {
      latitude: 30.59276,
      longitude: 114.30525
    },
  },
  mutations: {
    SET_LAT_LNG(state, data) {
      state.latLng = data;
    },
  },
  actions: {
    /* 根据经纬度获取地址 */
    async getLocationByLatLng({commit, state}, {latitude, longitude}) {
      const {data} = await requestByGet("api/wechat/common/getLocationByLatLng", {
        lat: latitude,
        lng: longitude,
      });
      commit("SET_LAT_LNG", {latitude, longitude});
      return data["result"];
    },
  },
}
