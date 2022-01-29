import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
import filters from './filter';
const headers:Header[] = [
  {value:'Name', text: 'Name' , isPrice : false , isTotal:false , total:0},
  {value:'Name_ar', text: 'Name_ar' , isPrice : false , isTotal:false , total:0},
  {value:'Email', text: 'Email' , isPrice : false , isTotal:false , total:0},
  {value:'Img', text: 'Img' , isPrice : false , isTotal:false , total:0},
  {value:'Serial', text: 'Serial' , isPrice : false , isTotal:false , total:0},
  {value:'Phone', text: 'Phone' , isPrice : false , isTotal:false , total:0},
  {value:'Role', text: 'Role' , isPrice : false , isTotal:false , total:0},
  {value:'Actions', text: 'Actions' , isPrice : false , isTotal:false , total:0},
]
const url = "users"

const params:DatatableIntetrface = {
    title : "users",
    headers ,
    description:"users_desc",
    searchable:true,
    filters,
    url,
    hasFooter:false,
    hasEdit:true,
    hasView:true
}
const datatable = new Datatable(params)
export default datatable