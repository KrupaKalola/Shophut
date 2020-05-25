import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { TextField, Dialog, DialogActions, Grid, Container, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import './login.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


export default function FormDialog(props) {

    // const classes = useStyles();

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value)
    // }
    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value)
    // }

    const [error, setError] = useState("")
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data)=>{
        console.log(data)
        setError(" ")
        if (data.email === 'krupak@nividata.com' & data.password === 'krupa@123') {
            props.setIsLoggedIn('true')
            props.handleClose()
          }
        else{
            setError("Invlid username or password");
        }
    };


    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <Grid container>
                    <Grid items lg='4' style={{ backgroundColor: '#2eab70', color: '#fff' }}>
                        <Container>
                            <h2>Login</h2>
                            <p style={{ fontSize: '15px' }}>Get access to your Order, Cart and Recommendations</p>
                            <h1 style={{ marginTop: 40 }}>Shophut</h1>
                        </Container>
                    </Grid>
                    <Grid items lg='8'>
                        <Container>
                            <div className='loginForm' style={{ margin: 20 }}>
                                <TextField id="standard-basic" label="Email" name='email' inputProps={{ 'type': 'email' }} inputRef={register({ required:{ value: true, message: "Enter email"} , pattern: { value : /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/ , message: 'eg: abc@xyz.com'}})} />
                            {/* <span style={{ color: "red" }} className='errorShow'>{props.error.email}</span> */}
                                {errors.email && <span style={{color:"#f00"}}>{errors.email.message}</span>}

                                <TextField id="standard-basic" label="Password" name='password' inputProps={{ 'type': 'password' }} inputRef={register({ required: true })}/>
                                {/* <span style={{ color: "red" }} className='errorShow'>{props.error.password}</span> */}
                                {errors.password && <span style={{color:"#f00"}}>Enter password</span>}
                               
                                <br />
                                <span style={{ color: "red" }} className='errorShow'>{error}</span> 


                                <form onSubmit={handleSubmit(onSubmit)}>
                                   
                                    <DialogActions> <input type="submit" value="Loggin" />
                                    </DialogActions>
                                </form>

                            </div>
                        </Container>
                    </Grid>
                </Grid>
            </Dialog>
        </div>
    );
}