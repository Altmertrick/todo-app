import s from './Todos.module.css';

const Todo = (props: any) => {
  return (
    <div className={s.todoWrapper}>
      <div>
        <input type="checkbox" />
        {props.text}
      </div>
      <div>
        <button>Delete</button>
      </div>
    </div>
  );
};

const Todos = (props: any) => {
  return (
    <div className={s.wrapper}>
      <div>
        <input type="text" />
      </div>
      <div>
        <button>ADD TODO</button>
      </div>

      <div>
        <Todo text={'Create something'} />
        <Todo text={'Learn React'} />
        <Todo text={'Walk the dog'} />
      </div>
    </div>
  );
};

export default Todos;
