import { EventDto } from '../models/models';

export const EVENT_DATA: EventDto[] = [
  {
    id: 1,
    title: 'Ausfahrt der Vespas',
    eventInfo: {
      id: 1,
      infoText: '',
      pictures: [
        {
          id: 1,
          title: '',
          path: '',
        },
      ],
    },
    image: {
      id: 2,
      path: '',
    },
    startDateTime: '23.07.2022 11:00:00',
    endDateTime: '23.07.2022 12:30:00',
    category: {
      id: 1,
      name: 'Ausfahrten',
    },
    isEditable: true,
  },
  {
    id: 2,
    title: 'Ausfahrt der US-Cars',
    eventInfo: {
      id: 2,
      infoText: '',
      pictures: [
        {
          id: 3,
          title: '',
          path: '',
        },
      ],
    },
    startDateTime: '23.07.2022 12:00:00',
    endDateTime: '23.07.2022 14:30:00',
    category: {
      id: 1,
      name: 'Ausfahrten',
    },
    isEditable: true,
  },
  {
    id: 3,
    title: 'Ausfahrt mit den Bikes',
    eventInfo: {
      id: 4,
      infoText: '',
    },
    startDateTime: '23.07.2022 10:00:00',
    endDateTime: '23.07.2022 11:00:00',
    category: {
      id: 1,
      name: 'Ausfahrten',
    },
    isEditable: true,
  },
  {
    id: 4,
    title: 'IRFC Bands',
    eventInfo: {
      id: 4,
      infoText: '',
    },
    startDateTime: '22.07.2022 14:00:00',
    endDateTime: '22.07.2022 22:00:00',
    eventLocation: {
      id: 1,
      name: 'Main Stage',
    },
    category: {
      id: 2,
      name: 'Musik',
    },
    isEditable: true,
  },
  {
    id: 5,
    eventInfo: {
      id: 4,
      infoText: '',
    },
    title: 'Preisverleihung',
    startDateTime: '24.07.2022 13:00:00',
    endDateTime: '-',
    eventLocation: {
      id: 1,
      name: 'Main Stage',
    },
    isEditable: true,
  },
];
