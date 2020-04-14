import * as React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { ClientsListContainerComponent } from 'pods/clients';
import { ClientType, LoginType } from 'common-app/interfaces';
import { clientAPI } from 'api/data.mock';
import { getSessionCookie } from 'common/cookies';

export const ClientsContainerComponent = () => {
  const user = getSessionCookie();
  return user ? (
    user.loginInfo.rol === 'trainer' ? (
      <React.Fragment>
        <CssBaseline />
        <h1>Lista de clientes</h1>
        <Typography
          component='div'
          style={{ backgroundColor: '#FFFFFF', height: '100vh' }}
        >
          <ClientsListContainerComponent />
        </Typography>
      </React.Fragment>
    ) : (
      <Typography component='p' style={{ color: 'red' }}>
        Access denied.
      </Typography>
    )
  ) : (
    <h4>Invalid user</h4>
  );
};
