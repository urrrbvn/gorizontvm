import {useForm} from 'react-hook-form'
import s from './AuthForm.module.scss'
import { useNavigate } from 'react-router-dom'

function AuthForm(){

    let navigate = useNavigate()


    const {
        register,
        reset,
        handleSubmit,
        formState: {errors},
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    const enterHandler = (event) => {
        if (event.key === 'Enter'){
            event.preventDefault()
        }
    }

    return(
        <div className={s.form}>
            <form
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={enterHandler}
            >
                <h1>Авторизация</h1>

                <input {...register('email', {
                    required: 'Поле должно быть заполнено',
                    pattern: {
                        value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/,
                        message: 'Указана неверная почта'
                    }
                })}/>
                    {errors.email && <p className={s.warning_text}>{errors.email.message}</p>}



                <input {...register('password', {
                    required: 'Поле должно быть заполнено',
                    pattern: {
                        message: 'Указан не верный пароль'
                    }
                })}/>

                <button onClick={() => navigate('/main')}>GO</button>
            </form>
        </div>
    )
}

export default AuthForm