import React, { useRef, useCallback,useState, useReducer } from 'react'
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = ()=>{

  function createBulkTodos() {
    const array = [];
    for( let i =1; i <=2500; i++){
      array[i-1] ={
        id: i,
        text: `할 일 ${i}`,
        checked: false,
        revising: false
      };
    };
    return array;
  }

  /*

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
      revising: false,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해 보기',
      checked: true,
      revising: false,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
      revising: false,
    }
  ]);

   */

  /*
  const todoReducer = (todos, action)=>{
    switch (action.type){
      case 'Insert':
        return todos.concat(action.todo);
      
      case 'Remove':
        return todos.filter((todo)=> todo.id !== action.id);

      case 'Toggle':
        return todos.map(todo => todo.id === action.id? {...todo, checked: !todo.checked}: todo);

      case 'Change':
        return todos.map(todo => todo.id === action.id? {...todo, text:action.e.target.value}: todo);

      case 'Revising':
        return todos.map(todo => todos.id === action.id? {...todo, revising: !todo.revising}: todo);
    }

  }

  */
  const [todos, setTodos] = useState(createBulkTodos);

  /*
  const [todosReduce, dispatch] = useReducer(todoReducer,undefined, createBulkTodos);
  */
 
  const nextId = useRef(todos.length+1);

  const onInsert = useCallback(
    text => {
      const newTodo = {
        id: nextId.current,
        text,
        checked: false,
        revising: false
      };

      setTodos(todos=>todos.concat(newTodo));
      nextId.current +=1; // nextId에 1씩 더하기
    },
    []
  )

  const onRemove = useCallback(
    id =>{
      setTodos(todos => todos.filter(todo=> todo.id !== id));
      
    },
    []
  )

  const onToggle = useCallback(
    id=> {
      setTodos( todos =>
        todos.map(todo =>
          todo.id ===id ? {...todo, checked: !todo.checked}: todo
          )
      )
    },
    []
  )

  const onChange = useCallback((e, id)=>{
    setTodos( todos =>
      todos.map(todo=>
      todo.id===id? {...todo, text: e.target.value}: todo
      ))
  },
  []
  )

  const onRevising = useCallback(
    id => {

      setTodos( todos =>
        todos.map(todo=> 
          todo.id===id ? {...todo, revising: !todo.revising}: todo)
      )
    },
    [],
  )

  return (
  <TodoTemplate>
    <TodoInsert onInsert={onInsert}/>
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} onRevising={onRevising} onChange={onChange}/>
  </TodoTemplate>
  );
}

export default App;
