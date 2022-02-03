import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap'
import { DropDownItem } from './DropDownItem';

const SearchTickers = ({ children, ...props }) => {
  const [inputValue, setInputValue] = useState('');

  return <div>
    <Form className='d-flex justify-content-between' style={{ width: 700, margin: 'auto', background: '#ddd' }}>
      <label
        style={{ width: 250 }}
        className='d-flex align-items-center justify-content-center'
        htmlFor="input"
      >
        <div>Search stock or ticker and add it</div>
      </label>
      <div>
        <FormControl
          name="input"
          style={{ width: "var(--widthInput)" }}
          placeholder="Enter stock's name"
          onChange={e => setInputValue(e.target.value)}
        />
        <div className='dropdown'>
        {/* {props.allStocks.map((elem, ind) => 
          <DropDownItem key={ind}>{`"${elem.name}", ticker: ${elem.ticker}`}</DropDownItem>
        )} */}
        </div>

      </div>
    </Form>

  </div >;
};

export default SearchTickers;
