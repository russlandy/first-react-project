import { Component } from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';


import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 1800, increase: true, id: 1},
                {name: 'Ings S.', salary: 2000, increase: false, id: 2},
                {name: 'Carl L.', salary: 1120, increase: true, id: 3}
            ]
        }
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    render () {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                    
                </div>
                <EmployeesList data={this.state.data}
                onDelete={this.deleteItem} />
                <EmployeesAddForm/>
            </div>
        );
    }
    
}

export default App;