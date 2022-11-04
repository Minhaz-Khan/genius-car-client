import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router/router';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
