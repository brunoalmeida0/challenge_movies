import React from 'react';
import Routes from './routes';
import { Provider } from 'mobx-react';
import MoviesStore from './stores/MoviesStore';

const App: React.FC = () => {
  let moviesStore = new MoviesStore()

  return (
    <div className="App">
      <Provider store={moviesStore}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
