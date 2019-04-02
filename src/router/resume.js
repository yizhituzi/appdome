/**
 * 简历
 */
import Container from '../components/container'

const Resume = () => import('../pages/resume');
export const resumeRouter = {
  path: 'resume',
  component: Container,
  children: [{
    meta: {tab: true, title: "招聘主页", notRequiredValid: true},
    path: "/",
    name: "ResumeIndex",
    component: Resume,
  }]
};

