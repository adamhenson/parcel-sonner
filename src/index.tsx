import { createRoot, Container } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('app');
const root = createRoot(container as Container);
root.render(<App />);
