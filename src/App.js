import ExpenseItem from'./components/ExpenseItem';
import './css/reset.css';
import './css/index.css';

function App() {
  return (
    <div className="main">
    <ExpenseItem></ExpenseItem>
      <h2>넷플릭스를 시청할 프로필을 선택하세요.</h2>
      <ul className="profile">
        <li>
          <a href="#">
            <div className="thumb" style={{backgroundImage:'url(images/main_thumb1.png)'}}></div>
            <span className="name">A</span>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="thumb" style={{backgroundImage:'url(images/main_thumb2.png)'}}></div>
            <span className="name">B</span>
            </a>
        </li>
        <li>
          <a href="#">
            <div className="thumb" style={{backgroundImage:'url(images/main_thumb3.png)'}}></div>
            <span className="name">C</span>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="thumb" style={{backgroundImage:'url(images/main_thumb4.png)'}}></div>
            <span className="name">D</span>
          </a> 
        </li>
      </ul>
      <button className="profileBtn">프로필 관리</button>
    </div>
  );
}
export default App;
