import Input from '@/utils/form/inputs/Input';
import Form from '../../../utils/form/Form';
import { roleInput , featuredInput} from '../../../utils/form/inputs/InputStore'
const inputs:Input[] = [
    new Input(featuredInput),
    new Input(roleInput)
]

const submit:Function = () => {
    console.log('submitted')
}

const cashtrayFilter = new Form(inputs , submit)

export default cashtrayFilter