export interface User{
  email: string,
  password: string
}

export interface PictureDto{
  id: number;
  title?: string;
  path: string;
}

export interface EventInfoDto{
  id: number;
  infoText: string;
  pictures?: PictureDto[];
}

export interface EventLocationDto{
  id: number;
  name: string;
}

export interface EventCategoryDto{
  id: number;
  name: string;
}

export interface EventDto{
  id: number;
  title: string;
  eventInfo?: EventInfoDto;
  image?: PictureDto;
  startDateTime: string;
  endDateTime: string;
  eventLocation?: EventLocationDto;
  category?: EventCategoryDto;
  isEditable: boolean;
}

export interface VotingPartialResultDto{
  id: number;
  eventName: string;
  percentage?: number;
}

export interface VotingResultDto{
  id: number;
  title: string;
  endDate?: string;
  partialResults?: VotingPartialResultDto[]
}

export interface VotingDto{
  id: number;
  title: string;
  isActive: boolean;
  isEditable: boolean;
  events?: EventDto[];
  eventCategoryId: number;
  image?: PictureDto;
  votingResult?: VotingResultDto;
}

// TODO: Create getAll interfaces when they are done
