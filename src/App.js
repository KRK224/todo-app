import React, { useRef, useCallback,useState } from 'react'
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = ()=>{

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

  const nextId = useRef(todos.length+1);

  const onInsert = useCallback(
    text => {
      const newTodo = {
        id: nextId.current,
        text,
        checked: false,
        revising: false
      };

      setTodos(todos.concat(newTodo));
      nextId.current +=1; // nextId에 1씩 더하기
    },
    [todos]
  )

  const onRemove = useCallback(
    id =>{
      setTodos(todos.filter(todo=> todo.id !== id));
      
    },
    [todos]
  )

  const onToggle = useCallback(
    id=> {
      setTodos(
        todos.map(todo =>
          todo.id ===id ? {...todo, checked: !todo.checked}: todo
          )
      )
    },
    [todos]
  )

  const onChange = useCallback((e, id)=>{
    setTodos(todos.map(todo=>
      todo.id===id? {...todo, text: e.target.value}: todo
      ))
  },
  [todos]
  )

  const onRevising = useCallback(
    id => {

      setTodos(
        todos.map(todo=> 
          todo.id===id ? {...todo, revising: !todo.revising}: todo)
      )
    },
    [todos],
  )

  return (
  <TodoTemplate>
    <TodoInsert onInsert={onInsert}/>
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} onRevising={onRevising} onChange={onChange}/>
  </TodoTemplate>
  );
}

export default App;
