import "../src/Scss/Main.scss";
import Setting from "../src/components/Pages/setting";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Setting />
    </>
  );
}

export default App;
