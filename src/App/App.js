import '../style/main.css'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { store } from '../store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
          <Header/>
          <Footer/>
      </div>
    </Provider>
  );
}

export default App;
