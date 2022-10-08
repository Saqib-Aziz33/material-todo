// layout
import Header from "./Header";
import Footer from "./Footer";
// other
import { Toaster } from 'react-hot-toast';

const Base = (props) => {
  return (
    <div
      className="d-flex flex-column justify-content-between"
      style={{ minHeight: "100vh" }}
    >
      <Header />
      <Toaster />
      <main role="main">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
export default Base;
