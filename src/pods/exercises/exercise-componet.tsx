import * as React from 'react';
import { ExerciseType } from 'common-app/interfaces';
import { List, ListItem, Card, CardHeader } from '@material-ui/core';

export interface Props {
  exerciseList: ExerciseType[];
}

export const DisplayExerciseListComponent: React.FC<Props> = (
  props
): React.ReactElement => {
  const { exerciseList } = props;
  return (
    <List>
      <ListItem divider>
        <Card>
  {/* TBD */}
        </Card>
      </ListItem>
    </List>
  );
};
