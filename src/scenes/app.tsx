import * as React from 'react';
import { Link } from 'react-router-dom';

export const App: React.FC<{}> = () => (
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
        </ul>
      </nav>
    </div>
  </>
);
