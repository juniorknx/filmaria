import './index.css';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <Routes />
    <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
