import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Tryme = () => {
  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const [dates, setDates] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2, 3, 4,
  ]);
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);

  const monthName =
    month !== null
      ? new Date(year, month).toLocaleString("en-US", { month: "short" })
      : "";

  const getAllDaysInMonth = (year, month) => {
    setYear(year);
    setMonth(month);
  };

  const date = new Date();

  useEffect(() => {
    getAllDaysInMonth(date.getFullYear(), date.getMonth());
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
  

  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="text-white text-[1.3rem] font-black">try me</h1>
      </div>
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
              <IoIosArrowBack onClick={handlePrevClick}/>
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
        <div className="grid grid-cols-7 grid-rows-5">
          {dates.map((item, index) => (
            <div
              className="border border-[#D5D4DF] p-[20px] flex items-center justify-center"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tryme;
