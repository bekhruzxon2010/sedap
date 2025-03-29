import React, { useEffect, useState, memo } from "react"; 
import PageTitle from "@/components/common/PageTitle"; 
import { Bentham } from "next/font/google";  

function OrdersList() { 
  const [value, setValue] = useState(1); 

  useEffect(() => { 
    setValue(2);
  }, []);

  const handleAdd = () => {
    // You can perform some action here, like updating state or making an API call.
    console.log("Button clicked");
  }

  return ( 
    <div> 
      <PageTitle
        title="Your Orders"
        subtitle="This is your order list data"
      /> 
      <div> 
        <button onClick={handleAdd}>Click</button>
      </div> 
    </div> 
  ); 
} 

export default memo(OrdersList);
