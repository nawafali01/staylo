import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { Toaster } from 'react-hot-toast';
import { Agentation } from 'agentation';

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <AppRoutes />
      {process.env.NODE_ENV === 'development' && <Agentation />}
    </BrowserRouter>
  );
}

export default App;