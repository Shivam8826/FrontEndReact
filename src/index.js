import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {configureAppStore, initialRootState} from './store'
import {createBrowserHistory} from 'history';
import {ConnectedRouter} from 'connected-react-router';




const store = configureAppStore(createBrowserHistory(), initialRootState);

function RenderApp() {
  return (
    
      <Provider store={store}>
        <ConnectedRouter history={createBrowserHistory()}>
          <React.StrictMode>
           
              <App />
        
          </React.StrictMode>
          </ConnectedRouter>
      </Provider>
 
  );
}

ReactDOM.render(<RenderApp />,document.getElementById('root')
);


