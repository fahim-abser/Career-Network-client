import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
import { createContext, useState } from 'react';
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light')
  const themeValue= {
    theme,
    setTheme
  }
  return (
    <div className="bg-white dark:bg-black dark:text-white">
    <ThemeContext.Provider value={themeValue}>
     <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
