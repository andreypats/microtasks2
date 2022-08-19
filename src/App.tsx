import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type todolistsType = {
    id: string,
    title: string,
    filter: FilterValuesType
}

function App() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(todolistID: string, id: string) {
        let filteredTasks = {...tasks, [todolistID]: tasks[todolistID].filter(t => t.id != id)};
        setTasks(filteredTasks);
    }

    function addTask(todolistID: string, title: string) {
        let task = {id: v1(), title: title, isDone: false};
        let newTasks = {...tasks, [todolistID]: [task, ...tasks[todolistID]]};
        setTasks(newTasks);
    }

    function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
        let task = tasks[todolistID].find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }

        setTasks({...tasks});

    }

    function changeFilter(todolistID: string, value: FilterValuesType) {
        setTodolists(todolists.map(td => td.id === todolistID ? {...td, filter: value} : td))
    }

    let todolistData = todolists.map((mapTask) => {

            let tasksForTodolist = tasks[mapTask.id];

            if (mapTask.filter === "active") {
                tasksForTodolist = tasks[mapTask.id].filter(t => t.isDone === false);
            }
            if (mapTask.filter === "completed") {
                tasksForTodolist = tasks[mapTask.id].filter(t => t.isDone === true);
            }

            return (
                <Todolist
                    key={mapTask.id}
                    todolistID={mapTask.id}
                    title={mapTask.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={mapTask.filter}
                />
            )
        }
    )

    return (
        <div className="App">
            {todolistData}
        </div>
    );
}

export default App;
