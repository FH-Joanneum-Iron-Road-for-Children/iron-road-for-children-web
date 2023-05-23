export enum UtcToLocalTimeFormat {
  FULL = 'full', // 'EEEE, MMMM d, y, h:mm:ss a zzzz'   - Monday, June 15, 2015 at 9:03:01 AM GMT+01:00
  SHORT = 'short', // 'd/M/yy, h:mm'                      - 15/6/15, 9:03
  SHORT_DATE = 'shortDate', // 'd/M/yy'                            - 15/6/15
  SHORT_TIME = 'shortTime', // 'h:mm'                              - 9:03
}

export class UtcConverterService {
  public convertUtcToLocalTime(
    utcDate: string, // UTC ISO-8601
    format: UtcToLocalTimeFormat = UtcToLocalTimeFormat.FULL
  ): string {
    const browserLanguage = navigator.language;

    if (format === UtcToLocalTimeFormat.SHORT) {
      const date = new Date(utcDate).toLocaleDateString(browserLanguage);
      const time = new Date(utcDate).toLocaleTimeString(browserLanguage);

      return `${date}, ${time}`;
    } else if (format === UtcToLocalTimeFormat.SHORT_DATE) {
      return new Date(utcDate).toLocaleDateString(browserLanguage);
    } else if (format === UtcToLocalTimeFormat.SHORT_TIME) {
      return new Date(utcDate).toLocaleTimeString(browserLanguage);
    } else if (format === UtcToLocalTimeFormat.FULL) {
      return new Date(utcDate).toString();
    } else {
      console.error(`Do not have logic to format utc date, format:${format}`);
      return new Date(utcDate).toString();
    }
  }

  public convertLocalTimeToUtc(localDate: string): string {
    const date = new Date(localDate);
    return date.toUTCString();
  }
}
