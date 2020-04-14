import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { ClientType, TrainerType } from 'common-app/interfaces';

import {
  ListItemSecondaryAction,
  IconButton,
  ListItemIcon,
} from '@material-ui/core';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PhoneIcon from '@material-ui/icons/Phone';
import { useHistory } from 'react-router-dom';
import { trainerAPI, clientAPI } from 'api';
import { getSessionCookie } from 'common/cookies';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  })
);

export interface Props {}

export const ClientsListContainerComponent: React.FC<Props> = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const handleGoToDetails = (id: number) => {
    history.push(`/client/${id}`);
  };

  const getTrainer = (username: string): TrainerType =>
    trainerAPI.find((trainer) => trainer.trainer_info.email === username);

  const getClientsList = (): ClientType[] => {
    // returs the expecifict client list for the logged trainer
    const user = getSessionCookie();
    const trainer: TrainerType = getTrainer(user.loginInfo.username);
    const trainerClientsList: number[] = trainer.clientList;
    const cl: ClientType[] = trainerClientsList.map(t => clientAPI.find((c) => c.client_id === t));
    return cl;
  };

  const clientsList = getClientsList();
  return (
    <List className={classes.root}>
      {clientsList.map((client) => {
        return (
          <div key={client.client_id}>
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar
                  alt={`${client.person_info.name} ${client.person_info.lastName}`}
                  src={client.person_info.avatar}
                />
              </ListItemAvatar>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText
                primary={`${client.person_info.name} ${client.person_info.lastName}`}
                secondary={client.person_info.phone}
              />

              <ListItemSecondaryAction>
                <IconButton
                  edge='end'
                  aria-label='detail'
                  onClick={(e) => handleGoToDetails(client.client_id)}
                >
                  <ArrowForwardIosIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant='inset' component='li' />
          </div>
        );
      })}
    </List>
  );
};
