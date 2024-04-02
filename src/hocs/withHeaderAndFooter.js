import Header from "../components/Header/header.component";
import Footer from "../components/Footer/footer.component";

const withHeaderAndFooter = (WrappedComponent) => () => {
  return (
    <>
      <Header />
      <WrappedComponent />
      <Footer />
    </>
  );
};

export default withHeaderAndFooter;
