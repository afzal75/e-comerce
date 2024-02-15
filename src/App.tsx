import MainLayout from "./components/layouts/MainLayout";
import { useAppSelector } from "./redux/hook";

function App() {
  const { darkMode } = useAppSelector((store) => store.theme)
  return (
    <div className={`m-0 w-full ${darkMode ? "bg-black text-white" : "bg-white"}`}>
      <MainLayout />
    </div>
  );
}

export default App;
