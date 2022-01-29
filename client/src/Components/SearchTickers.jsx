import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap'

const SearchTickers = () => {
  const [inputValue, setInputValue] = useState('');

  return <div>
    <Form className='d-flex justify-content-between' style={{ width: 700, margin: 'auto', background: '#ddd' }}>
      <FormControl
       style={{width: "500px"}}
        placeholder="Enter ticker's name"
        onChange={e => setInputValue(e.target.value)}
      />
      <Button style={{width: "150px"}}>Search ticker</Button>
    </Form>
  </div>;
};

export default SearchTickers;
