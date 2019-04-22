import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'format'
})
export class Format implements PipeTransform {

    match = {
        phone: '(***) ***-****',
        ssn: '***-**-****'
    };

    transform(value: string, key: string) {
        if (value) {
            let pattern = this.match[key],
                format = '',
                index = 0;
            for (let i = 0; i < value.length; i++) {
                while (index < pattern.length && pattern[index] !== '*') {
                    format += pattern[index];
                    index++;
                }
                format += value[i];
                index++;
                //console.debug(i + ':' + value.length + ', ' + index + ':' + pattern.length);
                if (i === value.length - 1 && index < pattern.length) {
                    while (index < pattern.length && pattern[index] !== '*') {
                        format += pattern[index];
                        index++;
                    }
                }
            }
            return format;
        } else {
            return value;
        }
    }
}