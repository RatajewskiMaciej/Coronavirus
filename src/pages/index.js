import Calendar from '../components/Calendar';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Provider } from 'react-redux'
import store from '../components/redux/store'

const index = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Navbar />
      <Calendar />
      <LandingPage />
    </Provider>
  );
};
export default index;