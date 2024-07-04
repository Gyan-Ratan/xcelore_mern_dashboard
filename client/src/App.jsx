import 'bootstrap/dist/css/bootstrap.min.css'; // Corrected import path for Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Corrected import path for Bootstrap JS
import './App.css';
import AppRoutes from './routes';

export default function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}
