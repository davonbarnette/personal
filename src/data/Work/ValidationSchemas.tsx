import * as yup from 'yup';
import Validator, {ValidationObject} from "../../global/managers/Validator";

export const WorkValidationSchema = {

    name: yup.string()
        .matches(/^([\w\s]+)$/, { message:"Allowed characters: [ a-z ], [ 0-9 ], [ Space, -, _ ]", excludeEmptyString:true })
        .max(24, 'Maximum 24 characters allowed'),

};

export const WorkValidation = {

    name: (value:string):ValidationObject => {
        return Validator.yup(WorkValidationSchema.name, value)
    },
};
