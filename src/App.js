import React from 'react';
import './App.css';
import CreateNote from './components/CreateNote';
import SortButton from './components/SortButton';
import FilterButton from './components/FilterButton';
import TodoList from './components/TodoList';
import {ListProvider} from './ListContext';

function App() {
  return (
    <ListProvider>
      <div className="App">
        <CreateNote />
        <SortButton />
        <TodoList />
        <FilterButton />
      </div>
    </ListProvider>
  );
}

export default App;
