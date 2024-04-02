import { Route, useLocation } from "react-router-dom";

import Home from "../pages/Home/home.container";
import AreaPick from "../pages/AreaPick/area-pick.container";
import DatePick from "../pages/DatePick/date-pick.container";
import Catalog from "../pages/Catalog/catalog.container";
import Cart from "../pages/Cart/cart.container";
import Payment from "../pages/Payment/payment.container";
import ThankYou from "../pages/ThankYou/thank-you.container";

const RouterActivator = () => {
  let location = useLocation(); // --> url: localhost:3000/payment --> location = { ..., pathname: '/payment' }

  const routes = [
    { path: "/", component: Home },
    { path: "/area-pick", component: AreaPick },
    { path: "/date-pick", component: DatePick },
    { path: "/catalog", component: Catalog },
    { path: "/cart", component: Cart },
    { path: "/payment", component: Payment },
    { path: "/thank-you", component: ThankYou },
  ];

  const route = routes
    .filter((route) => {
      return location.pathname === route.path;
    })
    .reduce((agg, el) => {
      return (agg = el);
    }, {}); // --> { path: '/payment', component: Payment }

  return <Route path={route.path} component={route.component} />;
};

export default RouterActivator;
