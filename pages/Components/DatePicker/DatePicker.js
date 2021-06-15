import React, { useState, forwardRef } from 'react' 
import DatePicker, {registerLocale} from "react-datepicker";
registerLocale("ko")

const DateForm = () => {
    // ----------------------------
    // Styles
    // ----------------------------    
    const months = [
        "1월", "2월", "3월", "4월", "5월", "6월",
        "7월", "8월", "9월", "10월", "11월", "12월"
    ];
    // ----------------------------
    // Layout
    // ----------------------------    
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="example-custom-input" onClick={onClick} ref={ref}>
            {value}
        </button>
    ));
    
    // ----------------------------
    // Events
    // ----------------------------
    const [startDate, setStartDate] = useState(new Date());

    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<ExampleCustomInput />}
        />
    );
}

export default DateForm;