// Import necessary modules from React and ReactDOM
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import the Provider component from react-redux to make the Redux store available to the app
import { Provider } from 'react-redux'
// Import the configured Redux store
import { store } from './app/store'
// Import global CSS styles
import './index.css'
// Import the main App component
import App from './App.jsx'

// Get the root DOM element to render the React application into
createRoot(document.getElementById('root')).render(
  // StrictMode is a tool for highlighting potential problems in an application.
  // It activates additional checks and warnings for its descendants.
  <StrictMode>
    {/* The Provider component makes the Redux store available to any nested components that need to access the Redux store. */}
    <Provider store={store}>
      {/* The main application component */}
      <App />
    </Provider>
  </StrictMode>,
)
