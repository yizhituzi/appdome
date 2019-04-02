/**
 * 我的
 */
import Container from '../components/container'

const Mine = () => import('../pages/mine');
export const mineRouter = {
  path: 'mine',
  component: Container,
  children: [{
    meta: {tab: true, title: "我的", notRequiredValid: true},
    path: "/",
    name: "MineIndex",
    component: Mine,
  }]
};

