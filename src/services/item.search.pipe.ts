import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ItemSearchPipe'
})
export class ItemSearchPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      args = args.toString().toLocaleLowerCase();
      if (val.title == null) {
        val.title = '';
      }
      if (val.link == null) {
        val.link = '';
      }
      if (val.description == null) {
        val.description = '';
      }
      if (val.guid == null) {
        val.guid = '';
      }
      // tslint:disable-next-line:max-line-length
      return (val.title.toLocaleLowerCase().includes(args)) || (val.link.toLocaleLowerCase().includes(args)) || (val.description.toLocaleLowerCase().includes(args)) || (val.guid.toLocaleLowerCase().includes(args));
    });
  }

}
