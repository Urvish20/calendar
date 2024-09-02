import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { LuCalendarCheck } from "react-icons/lu";

const Tryme = () => {

  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const [dates, setDates] = useState([]);
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);
  const [selectedDate, setSelectedDate] = useState([])

  // console.log(dates);

  const monthName = month !== null ? new Date(year, month).toLocaleString("en-US", { month: "short" }): "";

  const getAllDaysInMonth = (year, month) => {
    
    const date = new Date(year, month, 1);
    const dates = [];

    const prevYear = month === 0 ? year - 1 : year;
    const prevMonth = month === 0 ? 11 : month - 1;

    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const getDaysInMonth = (year, month) => {
      return new Date(year, month + 1, 0).getDate();
    };

    const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);

    console.log(daysInPrevMonth);

    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      dates.push(new Date(prevYear, prevMonth, daysInPrevMonth - i));
    }

    while (date.getMonth() === month) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    const totalDays = dates.length;
    const extraBoxes = 42 - totalDays;

    for (let i = 1; i <= extraBoxes; i++) {
      dates.push(new Date(year, month + 1, i));
    }

    setDates(dates);
    setYear(year);
    setMonth(month);
  };

  const now = new Date();
  const currentDate = now.getDate();
  const currentMonth = now.getMonth();

  useEffect(() => {
    getAllDaysInMonth(now.getFullYear(), now.getMonth());
  }, []);

  const handleNextClick = () => {
    let newMonth = month + 1;
    let newYear = year;

    if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }

    getAllDaysInMonth(newYear, newMonth);
  };

  const handlePrevClick = () => {
    let newMonth = month - 1;
    let newYear = year;

    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    }

    getAllDaysInMonth(newYear, newMonth);
  };

  const handleSelectedDate = (pickedDate) => {
    
    setSelectedDate(pickedDate)
    console.log(pickedDate)
  };
  

  return (
    <div>
      <div className="flex items-center justify-center ">
        <h1 className="text-white text-[1.3rem] font-black">try me</h1>
      </div>

      <div className="flex gap-[45px]">

    
      <div className="w-[502px] mt-9 bg-white rounded-xl p-5">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <span>
              <h1 className="text-[1.3rem] font-black">{monthName}</h1>
            </span>
            <span>
              <h1 className="text-[1.3rem] font-black">{year}</h1>
            </span>
          </div>
          <div className="flex gap-5">
            <span className="cursor-pointer">
              <IoIosArrowBack onClick={handlePrevClick} />
            </span>
            <span className="cursor-pointer">
              <IoIosArrowForward onClick={handleNextClick} />
            </span>
          </div>
        </div>
        <div className="flex mt-5 justify-around font-bold">
          {days.map((day, index) => (
            <span className="p-[20px]" key={index}>
              {day}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-7 grid-rows-6">
          {dates.map((item, index) => {
            const isCurrentMonth = item.getMonth() === month;
            const isToday = currentDate === item.getDate() && currentMonth === item.getMonth();
            return (
              <div
                className={`border border-[#D5D4DF] p-[20px] flex items-center justify-center cursor-pointer ${ isToday ? "bg-[#45539D]" : isCurrentMonth ? "hover:bg-[#E9F0F5]" : "bg-gray-200" }`}
                key={index} onClick={()=>handleSelectedDate(item)}
              >
                {item ? item.getDate() : ""}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-9 p-8 flex items-center justify-center flex-col">
        <h1 className=" text-white">Date Picker</h1>
        <div>
          <div className="flex gap-5 border border-black py-4 px-2 items-center rounded-lg mt-4  bg-white">
            <span> {`${selectedDate.getDate()}/${selectedDate.getMonth()}/${selectedDate.getFullYear()}`}</span>
            <span><LuCalendarCheck/></span>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Tryme;
