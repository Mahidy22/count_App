import React from 'react'

export default function IsEvenOdd(props) {

    let {count} = props;
    let catchCount = count % 2 === 0 ? <span style={{color:'springgreen'}}>Even</span> : <span style={{color:'crimson'}}>Odd</span>;

  return (
    <div>
        <h2 className='mt-3'> <span>{count}</span> is <span>{catchCount}</span></h2>
    </div>
  )
}
