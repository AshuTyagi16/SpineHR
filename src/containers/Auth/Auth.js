import React from 'react';
import {withFormik, Form, Field} from 'formik';
import classes from './Auth.css';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import Loader from '../../components/UI/Loader/Loader';
import * as actions from '../../store/action/index';

const STATE_DEFAULT = 0;
const STATE_SUCCESS = 1;
const STATE_ERROR = 2;

let ctr = STATE_DEFAULT;

const auth = (props) => {

    let form = (
        <Form
            className={classes.Form}>
            <label
                className={classes.Label}>{props.error ? <strong>{props.error.message}</strong> :
                <strong>Login to your Account</strong>}</label>
            <div className={classes.ItemContainer}>
                <label
                    className={classes.Label}>Comp. Id *</label>
                <Field
                    className={classes.DropDown}
                    component="select"
                    name="companyId">
                    <option value="transweb">TRANSW</option>
                </Field>
            </div>
            <div className={classes.ItemContainer}>
                <label
                    className={classes.Label}>Login As *</label>
                <Field
                    className={classes.DropDown}
                    component="select"
                    name="loginType">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </Field>
            </div>
            <div className={classes.ItemContainer}>
                <label
                    className={classes.Label}>Username *</label>
                <Field
                    className={classes.Input}
                    type="email"
                    name="username"
                    placeholder="Enter User Name"
                    autoComplete="off"/>
            </div>
            {props.touched.username && props.errors.username && <p>{props.errors.username}</p>}
            <div className={classes.ItemContainer}>
                <label
                    className={classes.Label}>Password *</label>
                <Field
                    className={classes.Input}
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    autoComplete="off"/>
            </div>
            {props.touched.password && props.errors.password && <p>{props.errors.password}</p>}
            <div
                className={classes.ButtonContainer}>
                <Button
                    disabled={props.isSubmitting}
                    text="Login"/>
            </div>
        </Form>
    );

    if (props.loggedIn && (ctr === STATE_DEFAULT || ctr === STATE_ERROR)) {
        ctr = STATE_SUCCESS;
        props.setSubmitting(false);
        props.resetForm();
        form = <Redirect to="/"/>
    } else if (props.error && ctr === STATE_DEFAULT) {
        ctr = STATE_ERROR;
        props.setSubmitting(false);
    }

    return (
        <div className={classes.FormContainer}>
            {form}
            {<Loader loading={props.isSubmitting}/>}
        </div>
    );
};

const formikAuth = withFormik({
    enableReinitialize: true,
    mapPropsToValues({companyId, loginType, username, password}) {
        return {
            companyId: companyId || 'transweb',
            loginType: loginType || 'user',
            username: username || '',
            password: password || ''
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().email().required(),
        password: Yup.string().min(7).required()
    }),
    handleSubmit(values, {props, resetForm, setErrors, setSubmitting}) {
        props.onAuth(values.username, values.password, false);
        setSubmitting(true);
        ctr = 0;

    }
})(auth);

const mapStateToProps = (state) => {
    return {
        loading: state.authReducer.loading,
        error: state.authReducer.error,
        loggedIn: state.authReducer.token !== null
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(formikAuth);