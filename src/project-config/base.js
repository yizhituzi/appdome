import {BASE_PATH} from "../const";

const isDev = true;
/** 请求地址 **/
const devUrl = "http://localhost:3019";
const prodUrl = "http://www.zhyos.com/m520";

const backendPath = isDev ? devUrl : prodUrl;

/** 转跳地址 **/
const redirectPath = isDev ? `http://www.zhyos.com/${BASE_PATH}` : prodUrl;

/** cdn地址 **/
const assetPath = isDev ? "http://www.zhyos.com/mobile" : prodUrl;
const uploadPath = "fileUpload";

const defaultLatLng = {
  latitude: 39.916527,
  longitude: 116.397128
};
export {
  backendPath,
  uploadPath,
  assetPath,
  isDev,
  redirectPath,
  defaultLatLng
}
