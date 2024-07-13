import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Table from './JS';

const root = document.getElementById('root');

if (root) {
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <Table />
    </StrictMode>,
  );
}
