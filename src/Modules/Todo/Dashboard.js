import ListContainer from "./ListContainer"

import React from 'react'

import { useHistory } from 'react-router-dom'
import { GlobalContext, GlobalDispatchContext } from '../Core/ContextAPI'
import { DELETE_TODO, UPDATE_TODO } from "../../Utils/Constants";
import ModalPopup from "../../Components/ModalPopup";


const DashBoard = () => {
    const { todoList } = React.useContext(GlobalContext)
    const [modalProps, setModalProps] = React.useState({})
    const dispatch = React.useContext(GlobalDispatchContext)
    const history = useHistory()
    const handleEdit = (e) => {
        console.log(e.target.dataset.id)
        history.push({ pathname: './detail', state: { id: e.target.dataset.id } })

    }
    const handleRemove = e => {
        setModalProps({ id: e.target.dataset.id, show: true, heading: 'Confirm Delete', body: 'delete' })
    }

    const modalConfirmation = () => {
        dispatch({ type: DELETE_TODO, payload: { id: modalProps.id } })
        handleClose()
    }
    const handleComplete = e => {
        const payload = todoList.find(el => el.id === e.target.dataset.id)
        dispatch({ type: UPDATE_TODO, payload: { ...payload, status: e.target.checked ? '3' : '2' } })

    }
    const renderBody = () => {
        if (modalProps.body === 'delete') {
            return 'Do you want to delete this Entry'
        }
    }
    const handleClose = () => setModalProps({})
    return <div>
        <button className='btn btn-primary mt-5' onClick={() => history.push('./detail')}> Create Todo</button>

        <ListContainer todoList={todoList || []} handleEdit={handleEdit} handleRemove={handleRemove} handleComplete={handleComplete} />
        {modalProps.show && <ModalPopup show={modalProps.show} handleClose={handleClose} handleSubmit={modalConfirmation} heading={modalProps.heading} >
            {renderBody()}
        </ModalPopup>
        }

    </div>
}

export default DashBoard