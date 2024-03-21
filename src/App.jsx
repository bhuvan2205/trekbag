import BackgroundHeading from "./components/ui/BackgroundHeading";
import Footer from "./components/ui/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
};

export default App;
