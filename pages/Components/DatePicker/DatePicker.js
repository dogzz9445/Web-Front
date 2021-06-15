import React, { useState, forwardRef } from 'react' ;
import DatePicker, { registerLocale } from "react-datepicker";
import { useDispatch } from "react-redux";
import { LOAD_DECKDATA_REQUEST } from "../../../reducers/Deck";

import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko"
registerLocale('ko', ko);

import { Button } from "antd";
import { CalendarFilled } from '@ant-design/icons';

const DateForm = () => {
    // ----------------------------
    // Styles
    // ----------------------------    

    // ----------------------------
    // Layout
    // ----------------------------    
    // Button
    const DateTextInput = forwardRef(({ value, onClick }, ref) => (
        <Button 
            style={{fontWeight:"bold", alignSelf: 'flex-end'}}
            type="primary" 
            shape="round" 
            icon={<CalendarFilled/>}
            className="example-custom-input" 
            onClick={onClick} 
            ref={ref}>
            {new Date(value).toLocaleDateString()}
        </Button>
    ));
    
    // ----------------------------
    // Events
    // ----------------------------
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());

    return (
        <DatePicker
            selected={startDate}
            locale="ko"
            filterDate={(date) => date > new Date("2021-06-12")}
            onChange={(date) => setStartDate(date)}
            onSelect={(date) => 
                dispatch({
                    type: LOAD_DECKDATA_REQUEST,
                })}
            customInput={<DateTextInput />}
        />
    );
}

export default DateForm;