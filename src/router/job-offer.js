/**
 * 求职
 */
import Container from '../components/container'

const JobOffer = () => import('../pages/job-offer');
export const jobOfferRouter = {
  path: 'jobOffer',
  component: Container,
  children: [{
    meta: {tab: true, title: "招聘主页", notRequiredValid: true},
    path: "/",
    name: "JobOfferIndex",
    component: JobOffer,
  }]
};

