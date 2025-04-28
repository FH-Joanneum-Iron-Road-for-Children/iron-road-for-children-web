export interface User {
  email: string;
  password: string;
}

export interface PictureDto {
  pictureId?: number;
  altText?: string;
  path?: string | null;
}

export interface GalleryDto {
  galleryId?: number;
  altText?: string;
  path?: string | null;
}

export interface EventInfoDto {
  eventInfoId?: number;
  infoText: string | null;
  pictures: PictureDto[];
}

export interface PlaylistDto {
  playlistId?: number;
  title: string;
  spotifyPlaylistId: string;
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
  eventId: number | undefined;
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

export interface VideoDto {
  videoId: number;
  altText: string;
  path: string;
}

export interface VideoFileUploadDTO {
  file: File | null;
  altText: string;
}

export type Item = {
  id: number;
  name: string;
  isInUse: boolean;
};

export interface HighlightDTO {
  highlightId: number;
  altText: string;
  description: string;
  path: string;
}

export interface HighlightFileUploadDTO {
  file: File | null;
  altText: string;
  description: string;
}
