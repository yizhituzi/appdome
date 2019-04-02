import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'

import {commonRouter} from "./common";
import {resumeRouter} from "./resume";
import {jobOfferRouter} from "./job-offer";
import {mineRouter} from "./mine";
import {BASE_PATH} from "../const";

Vue.use(Router);
const router = new Router({
  mode: "history",
  base: `/${BASE_PATH}/`,
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        ...commonRouter,
        resumeRouter,
        jobOfferRouter,
        mineRouter,
      ]
    }
  ]

});
/***
 * 初始化路由拦截器
 */
export default router;

