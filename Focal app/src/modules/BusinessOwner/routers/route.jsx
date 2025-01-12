
import MyPage from "../pages/Mypage";
import Posts from "../components/Posts"
import Blogs from "../components/Blogs"
import Information from "../components/Information"
import StepperLogin from "../pages/StepperLogin"
import JobMain from '../pages/JobMain'
import AddJob from '../pages/AddJob'
import ConfirmPayment from '../pages/ConfirmPayment'
import WithdrawalMoney from '../pages/WithdrawalMoney'
import ManageJob from '../pages/ManageJob'

export const businessroutes = [
  {
    path: "/businessOwnerProfile",
    element: <MyPage />,
    children: [
      {
      path: "/businessOwnerProfile/posts",
      element: <Posts />,
    },
    {
      path: "/businessOwnerProfile/blogs",
      element: <Blogs />,
      
    },
    {
      path: "/businessOwnerProfile/information",
      element: <Information/>,
      
    },
    
     ],
  },

  {
    path: "/businesslogin",
      element: < StepperLogin/>, 
  },
  {
    path: "/JobMain",
    element: <JobMain/>, 
  },
  {
    path: "/AddJob",
    element: <AddJob/>, 
  },
  {
    path: "/ConfirmPayment",
    element: <ConfirmPayment/>, 
  },
  {
    path: "/WithdrawalMoney",
    element: <WithdrawalMoney/>, 
  },
  {
    path: "/ManageJob",
    element: <ManageJob/>, 
  }
];
