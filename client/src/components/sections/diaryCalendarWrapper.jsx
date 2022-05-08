import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useRef } from "react";
import { GetCalendarMonthYear, MakeDiaryEvents } from "../../services/calendar";
import { calcMonthYear, changeDayFull } from "../../services/calcDate";

const DiaryCalendarWrapper = ({ setIsToggle, setSelectedDate }) => {
  const calendarRef = useRef();

  const events = MakeDiaryEvents();

  // 캘린더 달 prev, next 클릭 이벤트
  const movePrevMonth = () => {
    const calendarApi = calendarRef.current._calendarApi;
    const { month, year } = GetCalendarMonthYear(calendarApi);
    const calced_date = calcMonthYear("prev", month, year);

    calendarApi.prev();
  };

  const moveNextMonth = () => {
    const calendarApi = calendarRef.current._calendarApi;
    const { month, year } = GetCalendarMonthYear(calendarApi);
    const calced_date = calcMonthYear("next", month, year);

    calendarApi.next();
  };

  // 캘린더 날짜 클릭 이벤트
  // 날짜 선택 시, 버튼창 뜨도록...
  const onClickDate = (info) => {
    setIsToggle(true);

    const date = info.dateStr;
    const shortDay_info = info.date.toString().split(" ")[0];
    const day = changeDayFull(shortDay_info);

    setSelectedDate({
      date,
      day,
    });

    // dispatch(SetCurSchedules(date, day));
  };

  return (
    <div className="main-calendar">
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          start: "",
          center: "customPrev title customNext",
          end: "",
        }}
        events={events}
        dateClick={(info) => {
          onClickDate(info);
        }}
        customButtons={{
          customPrev: {
            text: "<",
            click: function () {
              movePrevMonth();
            },
          },
          customNext: {
            text: ">",
            click: () => {
              moveNextMonth();
            },
          },
        }}
      />
    </div>
  );
};

export default DiaryCalendarWrapper;
