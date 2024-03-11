import React, { useState } from 'react'
import styles from '../../styles/User.module.css';
import { useDispatch } from 'react-redux';
import { createUser } from '../../features/user/userSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const UserSignUpForm = ({ toggleCurrentFormType, closeForm }) => {

    const dispatch = useDispatch();

    const [values, setValues] = useState({
        name:'',
        email:'',
        password:'',
        avatar:'',
    });

    const handleChange = ({ target: { value, name } }) => {
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isNotEmpty = Object.values(values).every((val) => val);
        console.log(Object.values(values).every((val) => val))

        if (!isNotEmpty) return;
    
        dispatch(createUser(values));
        closeForm();
      };

  return (
    (
    <Formik>
        <div className={styles.wrapper}>
            <div className={styles.close} onClick={closeForm}>
                <svg className='icon'>
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
                </svg>
            </div>

            <div className={styles.title}>
                Sign Up
            </div>

            <Form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.group}>
                    <Field type="email"
                    placeholder="Your email (required)"
                    name="email" value={values.email}
                    autoComplete="off"
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className={styles.group}>
                    <Field type="name"
                    placeholder="Your name (required)"
                    name="name" value={values.name}
                    autoComplete="off"
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className={styles.group}>
                    <Field type="password"
                    placeholder="Your password (required)"
                    name="password" value={values.password}
                    autoComplete="off"
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className={styles.group}>
                    <Field type="avatar"
                    placeholder="Your avatar (Optional)"
                    name="avatar" value={values.avatar}
                    autoComplete="off"
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className={styles.link}
                onClick={() => toggleCurrentFormType('login')}>
                    I alredy have an account
                </div>

                <button type='submit' className={styles.submit}>
                    Create an account
                </button>
            </Form>
        </div>
    </Formik>     
    )
  )
}

export default UserSignUpForm