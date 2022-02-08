import { Header } from '@/utils/datatable/datatableInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import Datatable  from '@/utils/datatable/datatable'
const headers:Header[] = [
  {value:'Name_ar', text: 'Name_ar' , isPrice : false , isTotal:false , total:0},
  {value:'Img', text: 'Img' , isPrice : false , isTotal:false , total:0},
  {value:'Skills', text: 'Skills' , isPrice : false , isTotal:false , total:0},
  {value:'Actions', text: 'Actions' , isPrice : false , isTotal:false , total:0},
]
const url = "consultunts"

const params:DatatableIntetrface = {
    title : "consultutns",
    headers ,
    description:"consultutns_desc",
    searchable:true,
    url,
    hasFooter:false,
    hasEdit:true,
    hasView:true
}
const datatable = new Datatable(params)
export default datatable