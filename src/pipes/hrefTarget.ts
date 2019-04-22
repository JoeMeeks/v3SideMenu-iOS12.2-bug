import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'hrefTarget'
})
export class HrefTarget implements PipeTransform {
    transform(value: string) {
        let regex = /href="([\S]+)"/g,
            target = value.replace(regex, 'onclick="window.open(\'$1\', \'_system\')"');
        return target;
    }
}