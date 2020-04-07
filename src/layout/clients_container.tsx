import * as React from 'React';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { ClientsList } from '../pods/clients';
import { ClientType } from '../common-app/interfaces';
import { clientAPI } from '../content/data.mock';


export const ClientsContainer = () => {
  const clientsList: ClientType[] = clientAPI;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
          <ClientsList clientsList={clientsList} />
      </Container>
    </React.Fragment>
  );
};
