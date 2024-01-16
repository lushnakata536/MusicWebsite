import MainPage from "./pages/MainPage/MainPage.jsx";
import style from "/src/global.module.scss";
import Playbar from "./components/Playbar/Playbar.jsx";

//стрелочная функция
const App = () =>
   <div className={style.wrapper}>
       <MainPage />
       <Playbar />
   </div>
;

export default App;
