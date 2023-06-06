export interface User {
  email: string;
  password: string;
}

export interface PictureDto {
  pictureId?: number;
  altText: string;
  path: string | null;
}

export interface EventInfoDto {
  eventInfoId?: number;
  infoText: string | null;
  pictures: PictureDto[];
}

export interface EventLocationDto {
  id: number;
  name: string;
}

export interface EventCategoryDto {
  id: number;
  name: string;
}

export interface EventDto {
  eventId?: number;
  title: string;
  eventInfo: EventInfoDto;
  picture: PictureDto;
  startDateTimeInUTC: number;
  endDateTimeInUTC: number;
  eventLocation: EventLocationDto;
  category: EventCategoryDto;
}

export interface VotingPartialResultDto {
  id?: number;
  eventName: string;
  percentage?: number;
}

export interface VotingResultDto {
  id?: number;
  title: string;
  endDate?: string;
  partialResults?: VotingPartialResultDto[];
}

export interface VotingDto {
  id?: number;
  title: string;
  isActive: boolean;
  isEditable: boolean;
  events?: EventDto[];
  votingResult?: VotingResultDto;
  active: boolean;
  editable: boolean;
}

// TODO: Create getAll interfaces when they are done
