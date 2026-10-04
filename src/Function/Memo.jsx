import React from 'react'
function Memo(props){
    console.log("memo component")
    return(
        <>
        {console.log(props.name)}
        </>
    )
}
export default React.memo(Memo);