import React from 'react'

const LoginForm = ({handleClick}) => {
  return (
    <div>
        <form action="">
            <h3>Debe loguearse</h3>           
             <input data-testid = "password" type="text" onChange={(e) => e.target.value}/>
            <input role = "text" type="text" onChange={(e) => e.target.value}/>
            <button onClick={handleClick}>Enviar</button>
        </form>
    </div>
  )
}

export default LoginForm