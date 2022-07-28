import s from './Footer.module.css';

const Footer = (props: any) => {
  return (
    <div className={`${s.wrapper} ${s.wrapper_style}`}>
      <div>
        Actions:
        <div>
          <button>Mark all as completed</button>
        </div>
        <div>
          <button>Remove all completed</button>
        </div>
      </div>
      <div>
        <div>Active Todos: 12</div>
        <div>Completed Todos: 12</div>
      </div>
      <div>
        Filter By Status:
        <div>All</div>
        <div>Active</div>
        <div>Completed</div>
      </div>
      <div>
        Filter by Color
        <div>
          <input type="checkbox" /> Green
        </div>
        <div>
          <input type="checkbox" /> Blue
        </div>
        <div>
          <input type="checkbox" /> Orange
        </div>
        <div>
          <input type="checkbox" /> Purple
        </div>
        <div>
          <input type="checkbox" /> Red
        </div>
      </div>
    </div>
  );
};

export default Footer;
