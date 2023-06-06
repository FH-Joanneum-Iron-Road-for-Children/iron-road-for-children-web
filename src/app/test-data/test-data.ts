import {
  EventCategoryDto,
  EventDto,
  EventLocationDto,
  VotingDto,
} from '../models/models';

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
    eventId: 1,
    title: 'Ausfahrt der Vespas',
    eventInfo: {
      eventInfoId: 1,
      infoText: 'Das ist ein Text für die Beschreibung',
      pictures: [
        {
          pictureId: 1,
          altText: '',
          path: '',
        },
      ],
    },
    picture: {
      altText: 'test picture',
      pictureId: 2,
      path: '',
    },
    startDateTimeInUTC: 1658566800,
    endDateTimeInUTC: 1658572200,
    eventLocation: {
      id: 3,
      name: 'Iron Road Stage',
    },
    category: {
      id: 4,
      name: 'Ausfahrten',
    },
  },
  {
    eventId: 2,
    title: 'Ausfahrt der US-Cars',
    eventInfo: {
      eventInfoId: 2,
      infoText: '',
      pictures: [
        {
          pictureId: 3,
          altText: '',
          path: '',
        },
      ],
    },
    startDateTimeInUTC: 1658570400,
    endDateTimeInUTC: 1658579400,
    eventLocation: {
      id: 5,
      name: 'Ausfahrt 123',
    },
    picture: {
      pictureId: 3,
      altText: 'test',
      path: '',
    },
    category: {
      id: 4,
      name: 'Ausfahrten',
    },
  },
  {
    eventId: 3,
    title: 'Ausfahrt mit den Bikes',
    eventInfo: {
      eventInfoId: 4,
      infoText: '',
      pictures: [
        {
          pictureId: 3,
          altText: '',
          path: '',
        },
      ],
    },
    startDateTimeInUTC: 1658563200,
    endDateTimeInUTC: 1658566800,
    picture: {
      pictureId: 88,
      path: '',
      altText: '',
    },
    eventLocation: {
      id: 6,
      name: 'Ausfahrt Exit 123',
    },
    category: {
      id: 4,
      name: 'Ausfahrten',
    },
  },
  {
    eventId: 4,
    title: 'IRFC Bands',
    eventInfo: {
      eventInfoId: 4,
      infoText: '',
      pictures: [
        {
          pictureId: 3,
          altText: '',
          path: '',
        },
      ],
    },
    picture: {
      pictureId: 88,
      path: '',
      altText: '',
    },
    startDateTimeInUTC: 1658491200,
    endDateTimeInUTC: 1658520000,
    eventLocation: {
      id: 1,
      name: 'Main Stage',
    },
    category: {
      id: 1,
      name: 'Musik',
    },
  },
  {
    eventId: 5,
    eventInfo: {
      eventInfoId: 4,
      infoText: '',
      pictures: [
        {
          pictureId: 3,
          altText: '',
          path: '',
        },
      ],
    },
    title: 'Preisverleihung',
    startDateTimeInUTC: 1658660400,
    endDateTimeInUTC: 1658664000,
    eventLocation: {
      id: 1,
      name: 'Main Stage',
    },
    category: {
      id: 1,
      name: '',
    },
    picture: {
      pictureId: 88,
      path: '',
      altText: '',
    },
  },
];

export const VOTING: VotingDto[] = [
  {
    id: 0,
    title: 'Best Voting',
    isEditable: true,
    events: EVENT_DATA,
    votingResult: undefined,
    isActive: false,
    editable: true,
    active: false,
  },
  {
    id: 1,
    title: 'another voting',
    isActive: false,
    votingResult: undefined,
    events: EVENT_DATA,
    isEditable: false,
    editable: true,
    active: false,
  },
];
