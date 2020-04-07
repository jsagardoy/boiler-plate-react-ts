import * as React from 'React';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { ClientsList } from 'pods/clients';
import { ClientType } from 'common-app/interfaces';
import { clientAPI } from 'api/data.mock';


export const ClientsContainer = () => {
  const clientsList: ClientType[] = clientAPI;

  return (
    <React.Fragment>
      <CssBaseline />
      <h1>Lista de clientes</h1>
      <Container maxWidth='sm'>
        <Typography
          component='div'
          style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
        >
        <ClientsList clientsList={clientsList} />
        </Typography>
      </Container>
    </React.Fragment>
  );
};
