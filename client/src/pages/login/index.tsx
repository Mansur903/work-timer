import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
// import {UserAuth} from 'entities/user'
// import styles from './styles.module.scss'

const Login = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isSubmit, setIsSubmit] = useState(false)

  // const {refetch} = UserAuth(credentials.email, credentials.password, dispatch)

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isSubmit) return

    setIsSubmit(true)

    refetch().finally(() => setIsSubmit(false))
  }

  return (
    <div className="login-page">
      <h2>Вход в систему</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="email">Электронная почта</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  )
}