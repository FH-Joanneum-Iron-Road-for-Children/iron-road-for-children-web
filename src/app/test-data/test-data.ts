import { EventCategoryDto, EventDto, EventLocationDto } from '../models/models';

export const CATEGORY_DATA: EventCategoryDto[] = [
  {
    id: 1,
    name: 'Musik',
  },
  {
    id: 2,
    name: 'Tattoo',
  },
  {
    id: 3,
    name: 'Food & Drinks',
  },
  {
    id: 4,
    name: 'Ausfahrten',
  },
];

export const LOCATION_DATA: EventLocationDto[] = [
  {
    id: 1,
    name: 'Main Stage',
  },
  {
    id: 2,
    name: 'Family Stage',
  },
  {
    id: 3,
    name: 'Iron Road Stage',
  },
  {
    id: 4,
    name: 'Rock Stage',
  },
];

export const EVENT_DATA: EventDto[] = [
  {
    id: 1,
    title: 'Ausfahrt der Vespas',
    eventInfo: {
      id: 1,
      infoText: 'Das ist ein Text für die Beschreibung',
      pictures: [
        {
          id: 1,
          title: '',
          path: '',
        },
      ],
    },
    image: {
      title: 'test picture',
      id: 2,
      path: '',
    },
    startDateTime: '23.7.2022, 11:00:00',
    endDateTime: '23.7.2022, 12:30:00',
    eventLocation: {
      id: 3,
      name: 'Iron Road Stage',
    },
    category: {
      id: 4,
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
    eventLocation: {
      id: 3,
      name: 'Ausfahrt 123',
    },
    image: {
      id: 3,
      title: 'test',
      path: '',
    },
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
      pictures: [
        {
          id: 3,
          title: '',
          path: '',
        },
      ],
    },
    startDateTime: '23.07.2022 10:00:00',
    endDateTime: '23.07.2022 11:00:00',
    image: {
      id: 88,
      path: '',
      title: '',
    },
    eventLocation: {
      id: 66,
      name: 'Ausfahrt Exit 123',
    },
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
      pictures: [
        {
          id: 3,
          title: '',
          path: '',
        },
      ],
    },
    image: {
      id: 88,
      path: '',
      title: '',
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
      pictures: [
        {
          id: 3,
          title: '',
          path: '',
        },
      ],
    },
    title: 'Preisverleihung',
    startDateTime: '24.07.2022 13:00:00',
    endDateTime: '-',
    eventLocation: {
      id: 1,
      name: 'Main Stage',
    },
    category: {
      id: 888,
      name: CATEGORY_DATA[1].name,
    },
    image: {
      id: 88,
      path: '',
      title: '',
    },
    isEditable: true,
  },
];
