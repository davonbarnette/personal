import React, {Component} from 'react';
import {observer} from "mobx-react";

import './styles.scss';

import WorkForm from "./Form";
import AppActions from "../../../../data/App/Actions";
import {FIXED_COMPONENT_TYPES} from "../../../../data/App/Types";
import Modal from "../../../common/Modal/Modal";
import {Flex} from "../../../common/Flex/Flex";

class WorkFormModal extends Component{

    onExitModal = () => {
        AppActions.closeFixedComponent(FIXED_COMPONENT_TYPES.MODAL);
    };

    render(){
        return(
            <Modal exitModalFn={this.onExitModal} title='Add Work'>
                <Flex className='work-modal-content' flexDirection='column' justifyContent='center'>
                    <WorkForm/>
                </Flex>
            </Modal>
        )
    }
}

export default observer(WorkFormModal);