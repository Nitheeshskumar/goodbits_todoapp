import React from 'react';
import TextFormField from '../../Components/TextFormField';
import { useLocation, useHistory } from 'react-router-dom'
import DateField from '../../Components/DateField';
import { GlobalContext, GlobalDispatchContext } from '../Core/ContextAPI'
import moment from 'moment'
import { CREATE_TODO, UPDATE_TODO } from '../../Utils/Constants';

const FormContainer = () => {
    const history = useHistory()
    const location = useLocation()
    const { todoList } = React.useContext(GlobalContext)
    const dispatch = React.useContext(GlobalDispatchContext)
    const [errors, setErrors] = React.useState({})

    const [data, setData] = React.useState({ status: '1', date: moment(), name: '' })


    // trigger on input change
    const handleChange = (e) => {
        let tempObj = { ...data };
        tempObj[e.target.name] = e.target.value;
        setData(tempObj);
        if (!e.target.value) {
            setErrors(state => ({ ...state, [e.target.name]: 'This field is Required' }))
        }

    };

    // reset the form after submission
    const handleReset = (e) => {
        setData({ name: '', date: moment(), status: '1' })
    };
    const validate = () => {
        if (!data.name) {
            setErrors(state => ({ ...state, name: 'This field is Required' }))
            return true
        }

    }
    // trigger on form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            return
        }
        if (data.id) {
            dispatch({ type: UPDATE_TODO, payload: data })
        } else {
            dispatch({ type: CREATE_TODO, payload: data })
        }
        handleReset(e);
        history.goBack()
    };
    React.useEffect(() => {
        if (location.state?.id) {
            setData(todoList.find(el => el.id === location.state?.id))
        }

    }, [location, todoList])
    return (
        <div className="column border-bottom mb-5">
            <h2 className="is-size-3 has-text-centered"> {location.state?.id ? 'Update ' : 'Create '} Todo <button className="btn btn-block">
                <span
                    onClick={() => history.goBack()}
                    role="img"
                    className="is-pulled-right"
                    aria-label="Remove"
                >&#10060;</span></button></h2>

            <form onSubmit={handleSubmit}>

                <TextFormField
                    handleChange={handleChange}
                    inputType="text"
                    name="name"
                    placeholder="Task name"
                    value={data.name}
                    // required={true}
                    error={errors}
                />

                <DateField inputProps={{ placeholder: 'Date', onKeyPress: (e) => e.preventDefault() }} value={data.date} handleChange={handleChange} name="date" />
                <div className="field">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="status" id="inlineRadio1" value="1" checked={data.status === '1'} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="inlineRadio1">To Do</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="status" id="inlineRadio2" value="2" checked={data.status === '2'} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="inlineRadio2">Doing</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="status" id="inlineRadio3" value="3" checked={data.status === '3'} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="inlineRadio3">Done</label>
                    </div>
                </div>
                <div>


                    <button
                        className="button is-link is-small is-pulled-left"
                        type="submit"
                    >Save  </button>

                    <button
                        onClick={handleReset}
                        type="button"
                        className="button is-danger is-light is-small is-pulled-right"
                    >Reset Form</button></div>
            </form> <hr></hr>
        </div>
    );
}

export default FormContainer;