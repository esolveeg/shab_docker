import Input from '@/utils/form/inputs/Input';
import Form from '@/utils/form/Form';
import { 
    roleInput, 
    featuredInput, 
    nameArInput, 
    nameInput,
    emailInput, 
    passwordInput,
    phoneInput,
    websiteInput,
    instagramInput,
    convertToRequred,
    twitterInput,
} from '@/utils/form/inputs/InputStore'

const inputs:Input[] = [
    new Input(convertToRequred(nameArInput)),
    new Input(convertToRequred(nameInput)),
    new Input(emailInput),
    new Input(convertToRequred(roleInput)),
    new Input(convertToRequred(phoneInput)),
    new Input(passwordInput),
    new Input(featuredInput),
    new Input(websiteInput),
    new Input(instagramInput),
    new Input(twitterInput),
]

const submit:Function = () => {
    console.log('submitted')
}

const editUserForm = new Form(inputs , submit)


editUserForm.state = {
    "Id": 1,
    "Name": "ahmed mohamed moustafa",
    "Name_ar": "عبدالله مساعد باحادق",
    "Email": "a.mohamed@gmail.com",
    "Img": "http://localhost:8587/assets/members/male-01.jpg",
    "Serial": "2400100",
    "Points": 230,
    "Role_id": 1,
    "Phone": "0546617668",
    "Breif": "لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا .",
    "Website": "http://a-mohamed.com",
    "Instagram": "http://instagram.com",
    "Twitter": "http://twitter.com",
    "Role": "عضوية مبادر",
    "Color": "#5b5b5b",
    "Password": ""
}
export default editUserForm