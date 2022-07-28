import s from './../Footer.module.css';

const Actions = (props: any) => {
  return (
    <div className={s.footerSectionWrapper}>
      Actions:
      <div>
        <button>Mark all as completed</button>
      </div>
      <div>
        <button>Remove all completed</button>
      </div>
    </div>
  );
};

export default Actions;
