
export const required = (val , msg = 'هذا الحقل مطلوب') => !!val || msg
export const name = (val , msg = 'لا بد من ان يكون الاسم ثلاثي') => (val && val.split(" ").length == 3 &&  val.split(" ")[2] != '') || msg
export const email = (val , msg) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(val) || msg
// export const name = (val , msg = "لا بد من ان يكون الاسم ثلاثي") => val.split(" ").length == 4 || msg
  
// export const min = (val , min , msg = `هذا الحقل لابد ن يزيد عن ${min} احرف`) => (val.length >= min || val == '') || msg


export const createArticleValidation = {
  CategoryId :[
    value => required(value) ,
  ],
  Title :[
    value => required(value) ,
  ],
  Img :[
    value => required(value) ,
  ],
  Content:[
    value => required(value) ,
  ]
}
  export const updateUserValidation = {
      Name_ar :[
        value => required(value) ,
        value => name(value) ,
    ],
     Name :[
        value => required(value) ,
        value => name(value) ,
    ],
      Email :[
        value => required(value) ,
        value => email(value , "تحقق من البريد اللاكتروني")
    ],
    
     Phone :[
        value => required(value) ,
    ],
     Website :[
        value => required(value) ,
    ],
     Twitter :[
        value => required(value) ,
    ],
     Instagram :[
        value => required(value) ,
    ]
}

export const createProjectValidation = {
    CategoryId :[
      value => required(value) ,
    ],
    CityId :[
      value => required(value) ,
    ],
    Title :[
      value => required(value) ,
    ],
    Img :[
      value => required(value) ,
    ],
    Logo :[
      value => required(value) ,
    ],
    Fund :[
      value => required(value) ,
    ],
    Breif :[
      value => required(value) ,
    ],
    Location :[
        value => required(value) ,
    ],
    Phone :[
        value => required(value) ,
    ],
    File :[
        value => required(value) ,
    ],
    Email :[
        value => required(value) ,
    ],
    Status :[
        value => required(value) ,
    ],
    
}


export const contactUsValidation = {
  name :[
    value => required(value) ,
  ],
  email :[
    value => required(value) ,
    value => email(value , "تحقق من البريد اللاكتروني")
  ],
  subject :[
    value => required(value) ,
  ],
  msg :[
    value => required(value) ,
  ],
  
  
}

