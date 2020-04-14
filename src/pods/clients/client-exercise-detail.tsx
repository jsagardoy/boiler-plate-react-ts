import * as React from 'react';
import {
  ExerciseType,
  ExerciseSettings,
  TrainerType,
} from 'common-app/interfaces';
import { execiseAPI, trainerAPI } from 'api';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  Theme,
  IconButton,
  Collapse,
  CardActions,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

interface Props {
  exerciseElem: ExerciseSettings;
  clientId: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
  })
);

export const ClientExerciseComponent: React.FC<Props> = (props) => {
  const { exerciseElem, clientId } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const exercise: ExerciseType = execiseAPI.find(
    (elem) => elem.exercise_id === exerciseElem.exercise_id
  );

  const trainer: TrainerType = trainerAPI.find(
    (t) =>
      t.clientList.includes(clientId) &&
      t.exerciseList.includes(exercise.exercise_id)
  );

  return exercise ? (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={trainer.trainer_info.avatar} />}
        title={exercise.name}
      />
      <CardMedia
        className={classes.media}
        image={exercise.images}
        title={exercise.name}
      />
      <CardContent>
        <Typography paragraph>Repeticiones: {exerciseElem.reps}</Typography>
        <Typography paragraph>Series: {exerciseElem.sets}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <DoneIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Descripción:</Typography>
          <Typography paragraph>{exercise.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  ) : null;
};
