import React from 'react'
const Count = () =>
{
    let name='react'
    function changeClick()
{
    name="guru"
    console.log(name)
}
return
(
        <div style={{textAlign:'center'}}>
        <p>{ name }</p>
        <button onClick={changeClick}>Clickme</button>
        </div>
)
}

export default Count
