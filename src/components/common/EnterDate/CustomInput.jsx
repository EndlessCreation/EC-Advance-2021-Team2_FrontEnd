import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { TIM_Color } from '../../../styles/color';
import { FaFilter } from 'react-icons/fa';

const StyledCustomInput = styled.button`
  border: none;
  padding: 0 6px;
  background-color: ${TIM_Color('brand', '5')};
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.2px;
  &:focus {
    box-shadow: 0px 0px 3px 1px #e7fadb;
    background-color: #d6fbc1;
  }
`;

const FilterIcon = () => (
  <div style={{ margin: 'auto', display: 'flex', alignItems: 'center' }}>
    <FaFilter size={30} />
  </div>
);

const CustomInput = forwardRef(({ value, onClick }, ref) => {
  return (
    <>
      <StyledCustomInput onClick={onClick} ref={ref}>
        {value ? value : <FilterIcon />}
      </StyledCustomInput>
    </>
  );
});
export default CustomInput;
