import React, { useState } from 'react'

const Toggle = () => {
    const [toggle,setToggle] = useState(true)
  return (
    <div>
        {
            toggle && 
            <p style={{background: 'red', padding: '10px',margin:'10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non dignissim erat. Cras erat risus, sodales fringilla ex ut, euismod faucibus tortor. Aliquam erat volutpat. Aliquam odio mauris, laoreet faucibus libero eu, ultrices facilisis odio. In molestie, purus in malesuada gravida, justo neque convallis tellus, a dapibus purus velit sit amet dui. Suspendisse consectetur ultrices condimentum. Aenean vitae ultricies tortor. Nam non varius mauris. Sed a enim in libero consectetur ultricies quis nec enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        }
        
    <button onClick={()=>{setToggle(!toggle)}}>{toggle ? 'Hide' : 'Show'}</button>
    </div>

  )
}

export default Toggle