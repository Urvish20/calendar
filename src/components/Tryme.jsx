import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Tryme = () => {

    const days = ["Mo" , "Tu", "We" , "Th" , "Fr" , "Sa" , "Su"]

    const [dates, setDates] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1,2,3,4])
    const [year, setYear] = useState(null)
    const [month, setMonth] = useState(null)

    const getAllDaysInMonth = (year, month) => {
        // setDate(date.getDate() + 1);
    
        setYear(year)
        setMonth(month)

        const dates = [];

        while (date.getMonth() === month) {
          dates.push(new Date(date));
          setDates(date?.getDate() + 1);
        }
      
    }
console.log(month)
    const date =  new Date()

    useEffect(() => {
        getAllDaysInMonth(date.getFullYear(),date.getMonth())
    }, [date])

    const handleNextClick = () => {
        setMonth((prevMonth) => (prevMonth + 1) % 12);
    }

  return (
    <div>
      <div className="flex items-center justify-center">
        <h1 className="text-white text-[1.3rem] font-black">try me</h1>
      </div>
      <div className="w-[502px] mt-9 bg-white rounded-xl p-5">
        <div className="flex justify-between items-center">
            <div className="flex gap-2">
            <span>
            <h1 className="text-[1.3rem] font-black">{month}</h1>
            </span>
            <span>
            <h1 className="text-[1.3rem] font-black">{year}</h1>
            </span>
            </div>
          
          <div className="flex gap-5">
            <span>
              <IoIosArrowBack />
            </span>
            <span>
              <IoIosArrowForward onClick={handleNextClick}/>
            </span>
          </div>
        </div>
        <div className="flex mt-5 justify-around font-bold">

            {
                days.map((day,inex)=>(
                    <span className="p-[20px]" key={inex}>{day}</span>
                ))
            }
        </div>
        <div className="grid  grid-cols-7 grid-rows-5">
            {
                dates.map((item,index)=>(
                    <div className="border border-[#D5D4DF] p-[20px] flex items-center justify-center" key={index}>{item}</div>
                ))
            }
        </div>
      </div>
    </div>
  );


};

export default Tryme;
