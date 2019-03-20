import { Injectable } from '@angular/core';

@Injectable()
export class GlobalsModule {
    public static webapiUrl: string = 'https://localhost:44313/';

    public static DateFormat: string = 'yyyy-MM-dd';
    public static TimeFormat: string = 'HH:mm:ss';
    public static DateTimeFormat: string = `${GlobalsModule.DateFormat} ${GlobalsModule.TimeFormat}`;

}
