// import { EventCategoryDto, EventDto, EventInfoDto, EventLocationDto, PictureDto } from './models';
//
// export class EventModel implements EventDto {
//   constructor() {
//     this.id = 0;
//     this.title = '';
//     this.eventInfo = new EventInfoModel();
//     this.category = new CategoryModel();
//     this.eventLocation = new LocationModel();
//     this.image = new PictureModel();
//     this.startDateTimeUTC = 0;
//     this.endDateTimeUTC = 0;
//     this.isEditable = true;
//   }
//
//   id: number;
//   title: string;
//   eventInfo: EventInfoDto;
//   category: EventCategoryDto;
//   eventLocation: EventLocationDto;
//   image: PictureDto;
//   startDateTimeUTC: number;
//   endDateTimeUTC: number;
//   isEditable: boolean;
// }
//
// export class EventInfoModel implements EventInfoDto {
//   constructor() {
//     this.id = 0;
//     this.infoText = '';
//     this.pictures = [new PictureModel()];
//   }
//
//   id: number;
//   infoText: string;
//   pictures: PictureDto[];
// }
//
// export class CategoryModel implements EventCategoryDto {
//   constructor() {
//     this.id = 0;
//     this.name = '';
//   }
//
//   id: number;
//   name: string;
// }
//
// export class LocationModel implements EventLocationDto {
//   constructor() {
//     this.id = 0;
//     this.name = '';
//   }
//
//   id: number;
//   name: string;
// }
//
// export class PictureModel implements PictureDto {
//   constructor() {
//     this.id = 0;
//     this.path = '';
//     this.title = '';
//   }
//
//   id: number;
//   path: string;
//   title: string;
// }
