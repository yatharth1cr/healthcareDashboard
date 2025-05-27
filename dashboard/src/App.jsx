import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import AnatomyView from "./components/Dashboard/AnatomyView";
import RightSidebar from "./components/Dashboard/RightSidebar";
import ActivityChart from "./components/Dashboard/ActivityChart";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="w-full lg:w-[calc(100%-680px)] p-6 flex flex-col gap-6">
        <Header />
        <AnatomyView />
        <ActivityChart />
      </div>
      <RightSidebar />
    </div>
  );
}

export default App;
