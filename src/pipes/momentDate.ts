import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'momentDatePipe',
    pure: false
})
export class MomentDatePipe implements PipeTransform {

    transform(value: Date | moment.Moment, args: any): any {

        const format = args;
        return moment(value).format(format);
    }

}

@Pipe({
    name: 'convertUtcLocal',
    pure: false
})
export class UtcConvertPipe implements PipeTransform {
    transform(value: Date | moment.Moment): any {
        return moment.utc(value).local()
    }

}
