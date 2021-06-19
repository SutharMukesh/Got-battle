import React from 'react';
import { Provider } from 'react-redux';
import Home from './components/home';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
