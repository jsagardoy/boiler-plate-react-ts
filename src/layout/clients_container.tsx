import * as React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { ClientsListContainerComponent } from 'pods/clients';
import { ClientType } from 'common-app/interfaces';
import { clientAPI } from 'api/data.mock';

export const ClientsContainerComponent = () => {
  const clientsList: ClientType[] = clientAPI;

  return (
    <React.Fragment>
      <CssBaseline />
      <h1>Lista de clientes</h1>
        <Typography
          component='div'
          style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
        >
          <ClientsListContainerComponent clientsList={clientsList} />
        </Typography>
    </React.Fragment>
  );
};
