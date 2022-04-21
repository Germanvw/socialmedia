import { AppRouter } from './Router/AppRouter';
import { Provider } from 'react-redux';
import { store } from './Redux/index';

import './styles/variables.scss';
import './styles/global.scss';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
