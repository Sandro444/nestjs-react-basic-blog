import Header from '..//header/Header';
import Footer from '../footer/Footer';
import { Body } from './components';
const Layout = (props) => {
  return (
    <>
      <Header />
      <Body>{props.children}</Body>
      <Footer />
    </>
  );
};

export default Layout;
