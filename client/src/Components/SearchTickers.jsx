import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap'

const SearchTickers = () => {
  const [inputValue, setInputValue] = useState('');

  return <div>
    <Form className='d-flex justify-content-between' style={{ width: 700, margin: 'auto', background: '#ddd' }}>
      <label
        style={{ width: 200 }}
        className='d-flex align-items-center justify-content-center'
        htmlFor="FormControl"
      >
        <div>Search stock or ticker</div>
      </label>
      <FormControl
        style={{ width: "500px" }}
        placeholder="Enter stock's name"
        onChange={e => setInputValue(e.target.value)}
      />
      {/* <Button style={{width: "150px"}}>Search ticker</Button> */}
    </Form>
  </div>;
};

export default SearchTickers;
