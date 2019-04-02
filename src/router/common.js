const Login = () => import('@/pages/common/login');
const Home = () => import('@/pages/common/home');
const Geolocation = () => import('@/pages/common/geolocation');
const Publication = () => import('@/pages/common/publication');

export const commonRouter = [
  {
    meta: {title: "登录"},
    path: 'login',
    component: Login,
  },{
    meta: {title: "主页",tab:true},
    path: '/',
    component: Home,
  },{
    meta: {title: "定位"},
    path: 'geolocation',
    component: Geolocation,
  },{
    meta: {title: "发布"},
    path: 'publication',
    component: Publication,
  },
];

