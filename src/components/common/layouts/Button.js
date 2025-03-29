import React, { useState, useContext } from 'react';

const MyContext = React.createContext();

function Child() {
  const contextValue = useContext(MyContext);
  return <div>Contextdagi qiymat: {contextValue}</div>;
}

function Parent() {
  return (
    <MyContext.Provider value="Salom, dunyo!">
      <Child />
    </MyContext.Provider>
  );
}

export default Parent;