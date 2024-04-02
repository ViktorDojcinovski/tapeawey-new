import withHeaderAndFooter from "../../hocs/withHeaderAndFooter";
import HomeComponent from "./home.presenter";

const Home = () => {
  return <HomeComponent />;
};

export default withHeaderAndFooter(Home);
