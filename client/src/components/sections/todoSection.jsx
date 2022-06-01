import { useState } from "react";
import { useSelector } from "react-redux";
import OverLay from "../modules/overLay";
import Todolist from "../modules/todolist";
import EmptyText from "../modules/emptyText";
import BadgePopup from "./badgePopup";

const TodoSection = ({ is_home }) => {
  const [badgeToggle, setBadgeToggle] = useState(false);

  const todos = useSelector((state) => state.todo.selected_todos);
  const badge = useSelector((state) => state.badge.challenge_badge);
  const { badge_no, badge_name, goal_count, final_count } = badge;

  const openBadgePopup = () => {
    setBadgeToggle(true);
  };

  const closeBadgePopup = () => {
    setBadgeToggle(false);
  };

  return (
    <section className="todo-section">
      {badgeToggle && (
        <>
          <OverLay onClick={closeBadgePopup} />
          <BadgePopup closePopup={closeBadgePopup} />
        </>
      )}

      {/* 도전 중인 뱃지 있다면 표시 */}
      {badge && is_home && (
        <div className="home-badge-container" onClick={openBadgePopup}>
          <div className={`badge-image badge-image-${badge_no}`}></div>
          <div className="badge-info">
            <span>{badge_name}</span>
            <span>
              {goal_count} / {final_count}
            </span>
          </div>
        </div>
      )}

      {/* 투두리스트 섹션 */}
      {todos && <Todolist todos={todos} />}
      {!todos && (
        <EmptyText text="오늘의 할 일이 없습니다.<br/>할 일을 추가해보세요." />
      )}
    </section>
  );
};

export default TodoSection;
