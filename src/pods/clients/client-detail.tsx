import * as React from 'react';
import { ClientType } from 'common-app/interfaces';
import { clientAPI } from 'api';
import {
  Container,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { ClientExerciseComponent } from './client-exercise-detail';

interface Props {
  clientId: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '80%',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      maxWidth: '20em',
    },
  })
);

export const ClientDetailComponent: React.FC<Props> = (props) => {
  const { clientId } = props;
  const classes = useStyles();
  

  const getClient = (id: number): ClientType => {
    const clientsList: ClientType[] = clientAPI;
    const client = clientsList.find((elem) => elem.client_id === id);
    return client;
  };

  const displayClientInfo = (client: ClientType): React.ReactElement => {
    return (
      <Container>
        <Card className={classes.root}>
          <CardHeader
            title={`${client.person_info.name} ${client.person_info.lastName}`}
            subheader={client.client_id}
          />
          <CardMedia
            className={classes.media}
            image={client.person_info.avatar}
            title={`${client.person_info.name} ${client.person_info.lastName}`}
          />
          <CardContent>
            <Typography variant='body1' color='textPrimary' component='p'>
              {client.person_info.bio}
            </Typography>
          </CardContent>
        </Card>
        <Divider variant='fullWidth' />
        <List>
          {client.exercisesList.map((exer) => (
            <>
              <ListItem alignItems='flex-start'>
                <ClientExerciseComponent
                  clientId={clientId}
                  exerciseElem={exer}
                />
              </ListItem>
              <Divider variant='fullWidth' />
            </>
          ))}
        </List>
      </Container>
    );
  };
  return displayClientInfo(getClient(clientId));
};
