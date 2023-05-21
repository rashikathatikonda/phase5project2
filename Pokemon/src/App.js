import React from 'react';
import Main from './Components/Main';
import './Components/style.css'
function App() {
  return (
    <>
      <div className="mb-3">
<input type="text" placeholder="Search" />
<button className='text-decoration-none btn btn-sm btn-success'>Search</button>
</div>

      <Main/>
    </>
  );
}

export default App;
