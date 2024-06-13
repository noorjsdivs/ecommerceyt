import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const pathname = location?.pathname;

  return (
    <>
      <Header />
      {children}
      {pathname !== "/profile" && <Footer />}
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        toastOptions={{
          style: {
            backgroundColor: "black",
            color: "white",
          },
        }}
      />
    </>
  );
};

export default Layout;
