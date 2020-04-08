import { TrainerType, ExerciseType, ClientType } from 'common-app/interfaces';

export const trainerAPI: TrainerType[] = [
  {
    trainer_id: 1,
    trainer_info: {
      age: 20,
      email: 'emailT1@falso.com',
      name: 'nombre 1',
      lastName: 'apellido 1',
      phone: 666777888,
      avatar: 'https://www.microsiervos.com/images/troy-mcclure.jpg',
      bio: 'les hace correr mucho',
    },
    clientList: [1, 2, 5],
    exerciseList: [1, 3, 5],
  },
  {
    trainer_id: 2,
    trainer_info: {
      age: 21,
      email: 'emailT2@falso.com',
      name: 'nombre 2',
      lastName: 'apellido 2',
      phone: 666777888,
      avatar:
        'https://st-listas.20minutos.es/images/2015-01/391971/4620399_640px.jpg?1420742366',
      bio: 'especialista en fitness',
    },
    clientList: [1, 2, 5],
    exerciseList: [1, 3, 5],
  },
  {
    trainer_id: 3,
    trainer_info: {
      age: 30,
      email: 'emailT3@falso.com',
      name: 'nombre 3',
      lastName: 'apellido 3',
      phone: 666777888,
      avatar: 'https://frinkiac.com/img/S08E03/1203568.jpg',
      bio: 'También es Fisio',
    },
    clientList: [1, 2, 5],
    exerciseList: [1, 3, 5],
  },
  {
    trainer_id: 4,
    trainer_info: {
      age: 36,
      email: 'emailT4@falso.com',
      name: 'nombre 4',
      lastName: 'apellido 4',
      phone: 666777888,
      avatar: 'https://i.ytimg.com/vi/j3m6E6TMrKg/hqdefault.jpg',
      bio: 'Hace cosas',
    },
    clientList: [1, 2, 5],
    exerciseList: [1, 3, 5],
  },
  {
    trainer_id: 5,
    trainer_info: {
      age: 27,
      email: 'emailT5@falso.com',
      name: 'nombre 5',
      lastName: 'apellido 5',
      phone: 666777888,
      avatar:
        'https://tstotopix.files.wordpress.com/2016/03/unlock_ned_shirtlessflanders.png',
      bio: 'Especializado en mejora de rendimiento cardiobascular',
    },
    clientList: [1, 2, 5],
    exerciseList: [1, 3, 5],
  },
];

export const execiseAPI: ExerciseType[] = [
  {
    exercise_id: 1,
    trainer_id: [1, 2, 3],
    name: 'ejercicio 1',
    description: 'descripción 1',
    images:
      'https://www.entrenoydieta.es/blogs/wp-content/uploads/2018/06/Press-de-banca-con-barra.png',
  },
  {
    exercise_id: 2,
    trainer_id: [2],
    name: 'ejercicio 2',
    description: 'descripción ',
    images: 'https://i.blogs.es/945d4a/pull-over3/1366_2000.jpg',
  },
  {
    exercise_id: 3,
    trainer_id: [2, 4, 5],
    name: 'ejercicio 3',
    description: 'descripción 3',
    images: 'https://i.blogs.es/8f85b5/pull-over-polea/450_1000.jpg',
  },
  {
    exercise_id: 4,
    trainer_id: [1],
    name: 'ejercicio 4',
    description: 'descripción 4',
    images: 'https://i.blogs.es/209555/remo1/1366_2000.jpg',
  },
  {
    exercise_id: 5,
    trainer_id: [1, 4, 5, 3],
    name: 'ejercicio 5',
    description: 'descripción 5',
    images: 'https://i.blogs.es/0c65a1/remot1/1366_2000.jpg',
  },
];

export const clientAPI: ClientType[] = [
  {
    client_id: 1,
    person_info: {
      name: 'nombre 1',
      avatar:
        'https://seguridadprivadaeuskadi.files.wordpress.com/2013/09/wiggum.jpg',
      lastName: 'apellido 1',
      age: 25,
      email: 'cliente1@emailfalso.com',
      phone: 666555444,
      bio: 'le duele la mano',
    },
    exercisesList: [
      {
        exercise_id: 1,
        done: true,
        reps: 20,
        sets: 30,
      },
      {
        exercise_id: 3,
        done: false,
        reps: 15,
        sets: 5,
      },
      {
        exercise_id: 5,
        done: false,
        reps: 12,
        sets: 2,
      },
    ],
    height: 1.9,
    weight: 85,
  },
  {
    client_id: 2,
    person_info: {
      name: 'nombre 2',
      // tslint:disable-next-line: max-line-length
      avatar:
        // tslint:disable-next-line: max-line-length
        'https://vignette.wikia.nocookie.net/uolliac/images/b/bd/Homer_Simpson.png/revision/latest/top-crop/width/360/height/450?cb=20170508222544',
      lastName: 'apellido 2',
      age: 50,
      email: 'cliente2@emailfalso.com',
      phone: 666555444,
      bio: 'le duele el pie',
    },
    exercisesList: [
      {
        exercise_id: 1,
        done: true,
        reps: 20,
        sets: 2,
      },
      {
        exercise_id: 3,
        done: false,
        reps: 15,
        sets: 3,
      },
      {
        exercise_id: 5,
        done: false,
        reps: 15,
        sets: 3,
      },
    ],
    height: 1.9,
    weight: 85,
  },
];
