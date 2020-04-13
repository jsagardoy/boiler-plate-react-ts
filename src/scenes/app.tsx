import * as React from 'react';
import { Link } from 'react-router-dom';

export const App: React.FC<{}> = () => {
  const clientId: number = 1;
  return (
    <>
      <h1>Home APP</h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/clients'>Clients</Link>
            </li>
            <li>
              <Link to={`/client/${clientId}`}>Agente Wigum</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
