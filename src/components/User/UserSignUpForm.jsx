import React, { useState } from 'react'
import styles from '../../styles/User.module.css';
import { useDispatch } from 'react-redux';
import { createUser } from '../../features/user/userSlice';

const UserSignUpForm = ({ toggleCurrentFormType, closeForm }) => {

    const dispatch = useDispatch();

    const [values, setValues] = useState({
        name:'',
        email:'',
        password:'',
        avatar: '',
    });

    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (values.avatar.trim() == '' || !values.avatar.includes('http')) {
            values.avatar = 'https://i.pinimg.com/564x/63/e2/f3/63e2f3437e722f75526d4bfdf225b6db.jpg'
          }
        dispatch(createUser(values));
        closeForm();
      };

  return (
    (
        <div className={styles.wrapper}>
            <div className={styles.close} onClick={closeForm}>
                <svg className='icon'>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
                </svg>
            </div>

            <div className={styles.title}>
                Sign Up
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.group}>
                    <input type="email"
                    placeholder="Your email (required)"
                    name="email" value={values.email}
                    autoComplete="off"
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className={styles.group}>
                    <input type="name"
                    placeholder="Your name (required)"
                    name="name" value={values.name}
                    autoComplete="off"
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className={styles.group}>
                    <input type="password"
                    placeholder="Your password (required)"
                    name="password" value={values.password}
                    autoComplete="off"
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className={styles.group}>
                    <input type="avatar"
                    placeholder="Your avatar URL (Optional)"
                    name="avatar" value={values.avatar}
                    autoComplete="off"
                    onChange={handleChange}
                    />
                </div>

                <div className={styles.link}
                onClick={() => toggleCurrentFormType('login')}>
                    I alredy have an account
                </div>

                <button type='submit' className={styles.submit}>
                    Create an account
                </button>
            </form>
        </div>    
    )
  )
}

export default UserSignUpForm