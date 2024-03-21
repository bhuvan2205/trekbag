import BackgroundHeading from "./components/ui/BackgroundHeading";
import Footer from "./components/ui/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import ItemContextProvider from "./context/ItemContextProvider";

const App = () => {
  return (
    <>
      <BackgroundHeading />
      <main>
        <ItemContextProvider>
          <Header />
          <ItemList />
          <Sidebar />
        </ItemContextProvider>
      </main>
      <Footer />
    </>
  );
};

export default App;
