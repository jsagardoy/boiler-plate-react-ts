import * as React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { ClientType } from '../../common-app/interfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  })
);

export interface Props {
  clientsList: ClientType[];
}

export const ClientsList: React.FC<Props> = (props) => {
  const { clientsList } = props;
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {clientsList.map( client => {
        return (
          <>
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar
                  alt={`${client.person_info.name} ${client.person_info.lastName}`}
                  src={client.person_info.avatar}
                />
              </ListItemAvatar>
              <ListItemText
                primary={`${client.person_info.name}${client.person_info.lastName}`}
                secondary={client.person_info.phone}
              />
            </ListItem>
            <Divider variant='inset' component='li' />
          </>
        );
      })}
    </List>
  );
};
