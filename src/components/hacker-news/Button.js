import React from 'react'
import { useGlobalContext} from './context'

const Button = () => {
  const {isLoading,page,nbPages,handlePage} = useGlobalContext()
  return (
    <div className='btn-container'>
      <button disabled={isLoading} onClick={()=>handlePage("dec")}>prev</button>
      <p>
        {page+1} of {nbPages}
      </p>
      <button disabled={isLoading} onClick={()=>handlePage("inc")}>next</button>
    </div>
  )
}

export default Button