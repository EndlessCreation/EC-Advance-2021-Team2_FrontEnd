import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { createGlobalStyle } from 'styled-components';
import CustomInput from './CustomInput';

const DatePickerCloseIconStyles = createGlobalStyle`
   .react-datepicker__input-container{
       display:flex;
   }
   .react-datepicker__close-icon {
    position:static;
    align-items: center;
    &::after{
    cursor: pointer;
    background-color: ${(props) => props.theme.brand[4]};
    color: #fff;
    border-radius:0;
    height: 20px;
    width: 20px;
    padding:0px;
    font-size: 12px;
    line-height: 1;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    font-size: 15px;
    content: "×";
    }
    
}
.react-datepicker-popper{
      z-index:2;
    }
`;

const EnterDate = ({ props, placeholder, onFilteringDate }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [startDate, endDate] = dates;
    setStartDate(startDate);
    setEndDate(endDate);
    if (startDate && endDate) {
      onFilteringDate(startDate, endDate);
    }
  };
  return (
    <>
      <DatePicker
        selected={startDate}
        customInput={<CustomInput />}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        isClearable
        dateFormat="yyyy. MM. dd"
      />
      <DatePickerCloseIconStyles />
    </>
  );
};

export default EnterDate;
