import { Pipe, PipeTransform } from '@angular/core';
import { Poll } from "./poll"

@Pipe({
  name: 'filtersearch'
})
export class FiltersearchPipe implements PipeTransform {

  transform(poll_arr: Array<Poll>, search: string): Array<Poll> {
    // let output = []

    search = search.toLowerCase()

    // for(var i = 0; i < book_array.length; i++){
    // 	if(book_array[i].title.toLowerCase().includes(search) || book_array[i].author.toLowerCase().includes(search)){
    // 		output.push(book_array[i])
    // 	}
    // }

    return poll_arr.filter(poll_list => {
      // return bucket_item.title.toLowerCase().includes(search) || bucket_item.description.toLowerCase().includes(search)
      return poll_list.createdBy.toLowerCase().includes(search)
    })

    // return output
  }

  }
