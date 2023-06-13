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
  eventLocationId: number;
  name: string;
}

export interface EventCategoryDto {
  eventCategoryId: number;
  name: string;
}

export interface EventDto {
  eventId: number;
  title: string;
  eventInfo: EventInfoDto;
  picture: PictureDto;
  startDateTimeInUTC: number;
  endDateTimeInUTC: number;
  eventLocation: EventLocationDto;
  eventCategory: EventCategoryDto;
}

export interface VotingPartialResultDto {
  id: number;
  eventName: string;
  percentage: number;
}

export interface VotingResultDto {
  votingResultId: number;
  title: string;
  endDate: number;
  partialResults?: VotingPartialResultDto[];
}

export interface VotingDto {
  votingId: number;
  title: string;
  events: EventDto[];
  votingResult?: VotingResultDto;
  active: boolean;
  editable: boolean;
}

export type Item = {
  id: number;
  name: string;
  isInUse: boolean;
};
