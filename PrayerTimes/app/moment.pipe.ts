import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'momentPipe'
})
export class MomentPipe implements PipeTransform {
    transform(value: number | moment.Moment, ...args: any[]): any {
        let [format] = args;
        console.log(value);
    }
}

