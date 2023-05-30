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
  {
    id: 5,
    name: 'Ausfahrt 123',
  },
  {
    id: 6,
    name: 'Ausfahrt Exit 123',
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
    startDateTimeUTC: 1684528868,
    endDateTimeUTC: 1684874468,
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
    startDateTimeUTC: 1684528868,
    endDateTimeUTC: 1684874468,
    eventLocation: {
      id: 5,
      name: 'Ausfahrt 123',
    },
    image: {
      id: 3,
      title: 'test',
      path: '',
    },
    category: {
      id: 4,
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
    startDateTimeUTC: 1684528868,
    endDateTimeUTC: 1684874468,
    image: {
      id: 88,
      path: '',
      title: '',
    },
    eventLocation: {
      id: 6,
      name: 'Ausfahrt Exit 123',
    },
    category: {
      id: 4,
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
    startDateTimeUTC: 1684528868,
    endDateTimeUTC: 1684874468,
    eventLocation: {
      id: 1,
      name: 'Main Stage',
    },
    category: {
      id: 1,
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
    startDateTimeUTC: 1684528868,
    endDateTimeUTC: 1684530000,
    eventLocation: {
      id: 1,
      name: 'Main Stage',
    },
    category: {
      id: 1,
      name: '',
    },
    image: {
      id: 88,
      path: '',
      title: '',
    },
    isEditable: true,
  },
];
