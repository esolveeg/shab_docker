import { InputInterface } from '@/utils/form/interface';
import { TextInputInterface , SwitchInputInterface , DateInputInterface , SelectInputInterface } from '../interface';
import {name , required , email} from "@/utils/validations/validations" 

export const searchInput:TextInputInterface =  {
    name : 'search',
    label : 'search',
    type: 'text',
    icon : 'mdi-magnify',
    cols : 6,
    value : '',
}


export const roleInput:SelectInputInterface =  {
    name:"Role_id",
    cache : false,
    loading : false,
    text : 'Name',
    initialFetch:true,
    clearable:true,
    value : 'Id',
    type : 'select',
    url:'roles',
    icon : 'mdi-store-settings-outline',
    label : 'role'
}
export const featuredInput:SwitchInputInterface =  {
    name:"Featured",
    label : "featured",
    cols : 6,
    type : 'switch',
    val : false
}

export const nameArInput:TextInputInterface =  {
    name:"Name_ar",
    icon: "",
    rules:[
        (value:string) => required(value) ,
      (value:string) => name(value) ,
    ],
    required:true,
    label : "Name_ar",
    cols : 6,
    type : 'text',
    value:""
}
export const nameInput:TextInputInterface =  {
    name:"Name",
    icon: "",
    rules:[
        (value:string) => required(value) ,
      (value:string) => name(value) ,
    ],
    required:true,
    label : "Name",
    cols : 6,
    type : 'text',
    value:""
}
export const emailInput:TextInputInterface =  {
    name:"Email",
    icon: "",
    rules:[
        (value:string) => required(value) ,
      (value:string) => email(value) ,
    ],
    label : "Email",
    cols : 6,
    type : 'text',
    value:""
}



export const passwordInput:TextInputInterface =  {
    name:"Password",
    icon: "",
    rules:[
        (value:string) => required(value) ,
      (value:string) => name(value) ,
    ],
    label : "Password",
    cols : 6,
    type : 'password',
    value:""
}
export const phoneInput:TextInputInterface =  {
    name:"Phone",
    icon: "",
    rules:[
        (value:string) => required(value) ,
      (value:string) => name(value) ,
    ],
    label : "Phone",
    cols : 6,
    type : 'text',
    value:""
}

export const websiteInput:TextInputInterface =  {
    name:"Website",
    icon: "",
    rules:[
        (value:string) => required(value) ,
      (value:string) => name(value) ,
    ],
    label : "Website",
    cols : 6,
    type : 'text',
    value:""
}

export const instagramInput:TextInputInterface =  {
    name:"Instagram",
    icon: "",
    rules:[
        (value:string) => required(value) ,
      (value:string) => name(value) ,
    ],
    label : "Instagram",
    cols : 6,
    type : 'text',
    value:""
}

export const twitterInput:TextInputInterface =  {
    name:"Twitter",
    icon: "",
    rules:[
        (value:string) => required(value) ,
      (value:string) => name(value) ,
    ],
    label : "Twitter",
    cols : 6,
    type : 'text',
    value:""
}







export const convertToRequred = (input:InputInterface) => {
    const req = {...input}
    req.required = true
    return req
}