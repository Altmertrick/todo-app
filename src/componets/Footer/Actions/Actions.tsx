import s from './../Footer.module.css';

const Actions = (props: any) => {
  return (
    <div className={s.footerSectionWrapper}>
      Actions:
      <div>
        <button onClick={props.completeAllTodos}>Mark all as completed</button>
      </div>
      <div>
        <button onClick={props.removeCompletedTodos}>
          Remove all completed
        </button>
      </div>
    </div>
  );
};

export default Actions;
