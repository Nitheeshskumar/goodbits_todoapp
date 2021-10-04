import React, { useState } from 'react';
import TextFormField from '../../Components/TextFormField';
import ItemRow from './ItemRow';
import {
    sortByGeneral
} from '../../Utils/Utils';
import { GlobalDispatchContext } from '../Core/ContextAPI';
import { SORT_TODO } from '../../Utils/Constants';
function ListContainer(props) {
    const { todoList } = props
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('asc');
    const [filter, setFilter] = useState(['1', '2', '3'])
    const dispatch = React.useContext(GlobalDispatchContext)

    // search todos by name
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    const handleChange = e => {
        if (e.target.checked) {
            setFilter(state => [...state, e.target.name])
        } else {
            setFilter(state => state.filter(el => el !== e.target.name))
        }

    }
    // sort on list item header label click
    const handleSort = (e) => {

        dispatch({ type: SORT_TODO, payload: sortByGeneral(todoList, e.target.dataset.sortBy, sort) });

        setSort(state => state === "asc" ? 'desc' : 'asc');

        // props.onSortTodos(sortedTodos);
    };

    // initialize list test data
    // useEffect(() => {
    //     getDummyData().forEach(data => {
    //         props.onDummyData(data);
    //     });
    // }, []);
    console.log(todoList);
    return (
        <div className="column">
            <h2 className="is-size-3 has-text-centered">Tasks </h2>

            <TextFormField
                handleChange={handleSearch}
                inputType="search"
                name="search"
                placeholder="Search Task"
            />
            <div className="field">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" name="1" id="inlineCheck1" value="1" checked={filter.includes('1')} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="inlineCheck1">To Do</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" name="2" id="inlineCheck2" value="2" checked={filter.includes('2')} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="inlineCheck2">Doing</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" name="3" id="inlineCheck3" value="3" checked={filter.includes('3')} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="inlineCheck3">Done</label>
                </div>
            </div>
            <div className="table-container ht400 tableFixHead">
                <table className="table is-hoverable " style={{ whiteSpace: 'nowrap', overflow: 'auto' }}>
                    <thead>
                        <tr className="has-background-link">
                            <th className="has-text-light has-background-link"></th>
                            <th className="has-text-light has-background-link" data-sort-by="date" onClick={handleSort}>Date</th>
                            <th className="has-text-light has-background-link" data-sort-by="name" onClick={handleSort}>Task</th>
                            <th className="has-text-light has-background-link" data-sort-by="status" onClick={handleSort}>Status</th>
                            <th className="has-text-light has-background-link"></th>
                            <th className="has-text-light has-background-link"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {todoList.map(item => item.name.toLowerCase().includes(search) && filter.includes(item.status) &&
                            <ItemRow
                                key={item.id}
                                item={item}
                                {...props}
                            />
                        )}
                    </tbody>
                </table></div>
        </div>
    );
}

export default ListContainer;