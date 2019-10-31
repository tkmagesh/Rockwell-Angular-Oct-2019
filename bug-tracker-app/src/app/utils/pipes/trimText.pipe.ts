import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'trimText'
})
export class TrimTextPipe implements PipeTransform{
    transform(data : string, allowedLength : number = 30) : string {
        return data.length <= allowedLength ? data : data.substr(0,allowedLength) + '...';
    }
}