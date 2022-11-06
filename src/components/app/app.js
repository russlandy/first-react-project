import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';


import './app.css';

function App() {

    const data = [
        {name: 'John C.', salary: 1800, increase: true},
        {name: 'Ings S.', salary: 2000, increase: false},
        {name: 'Carl L.', salary: 1120, increase: true}
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
                
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;