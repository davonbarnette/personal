import React, {Component} from 'react';
import {observer} from "mobx-react";

import './styles.scss';

import WorkActions from "../../../../data/Work/Actions";
import {ValidationObject} from "../../../../global/managers/Validator";
import {Flex} from "../../../common/Flex/Flex";
import Field from "../../../common/Field/Field";
import {WorkValidation} from "../../../../data/Work/ValidationSchemas";
import Button from "../../../common/Button/Button";
import AppActions from "../../../../data/App/Actions";
import {FIXED_COMPONENT_TYPES} from "../../../../data/App/Types";

interface WorkFormState {
    [key:string]:string|null,
}

class WorkForm extends Component<any, WorkFormState> {

    state:WorkFormState = {
        name:null,
    };

    onSubmitClick = () => {
        const { name } = this.state;
        WorkActions.createOne(name!);
        AppActions.closeFixedComponent(FIXED_COMPONENT_TYPES.MODAL);
    };

    onInputChange = (id:string, value:string, validationObject:ValidationObject|null) => {
        if (validationObject && !validationObject.isValid) this.setState({[id]:null});
        else this.setState({[id]:value});
    };

    get disabled(){
        const { name } = this.state;
        return !name || name === '';
    }

    render(){
        return(
            <Flex className='work-form' flexDirection='column'>
                <section className='work-form content'>
                    <Field id='name' label='Name' validation={WorkValidation.name} className='field'
                       required onChange={this.onInputChange}/>
                </section>
                <section className='submit'>
                    <Button className='button' enabled={!this.disabled} onClick={this.onSubmitClick}>SUBMIT</Button>
                </section>
            </Flex>
        )
    }
}

export default observer(WorkForm);