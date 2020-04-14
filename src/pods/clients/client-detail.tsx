import * as React from 'react';
import { ClientType } from 'common-app/interfaces';
import { clientAPI } from 'api';
import {
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
  Button,
} from '@material-ui/core';
import { ClientExerciseComponent } from './client-exercise-detail';
import { useParams, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    media: {
      height: 0,
      paddingTop: '56.25%',
      maxWidth: '20%',
    },
  })
);

export const ClientDetailComponent: React.FC<Props> = (props) => {
  const { clientId } = useParams();
  const history = useHistory();
  const classes = useStyles();
  const newClientId: number = +clientId;

  const getClient = (id: number): ClientType => {
    const clientsList: ClientType[] = clientAPI;
    const client = clientsList.find((elem) => elem.client_id === id);
    return client;
  };

  const handleBackToClientList = () => {
    history.push(`/clients`);
  };

  const displayClientInfo = (client: ClientType): React.ReactElement => {
    return (
      <>
        <Button id='back-arrow' onClick={(e) => handleBackToClientList()}>
          <ArrowBackIosIcon />
          Lista de Clientes
        </Button>
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
            <div key={exer.exercise_id}>
              <ListItem alignItems='flex-start'>
                <ClientExerciseComponent
                  clientId={newClientId}
                  exerciseElem={exer}
                />
              </ListItem>
              <Divider variant='fullWidth' />
            </div>
          ))}
        </List>
      </>
    );
  };
  return displayClientInfo(getClient(newClientId));
};
