import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import { Formik} from "formik";
import * as yup from "yup";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const validation_Schema = yup.object({
      email: yup.string()
      .email("Please enter a valid Email")
      .required("Email is required"),
      password: yup.string().required("Password is required")

})


const Login = () => {
      const [values, setValues] = React.useState({
            amount: '',
            password: '',
            weight: '',
            weightRange: '',
            showPassword: false,
          });
          const [checked, setChecked] = React.useState(false);
          const handleChange1 = (event) => {
            setChecked(event.target.checked);
            };
        
          const handleClickShowPassword = () => {
            setValues({
              ...values,
              showPassword: !values.showPassword,
            });
          };
        
          const handleMouseDownPassword = (event) => {
            event.preventDefault();
          };
          //------------------call api ------------------//
          const postData = (values) => {
                console.log(values);
          }
      return (
            <div> 
           <div className="container pt-5">
                 <div className="row justify-content-center">
                  <div className="col-8">
                  <hr className="divider"/>
                  <h2>To continue</h2>
                 <h6>We need your name & email </h6>
                 <Formik
              initialValues={{ email: '', password: '',}}
              validationSchema={validation_Schema}
                onSubmit={(values, actions) => {
                  console.log(values);
                  postData(values)
                  // actions.resetForm(); 
                }}
              >
                {
                  ({ errors, touched ,handleChange, handleBlur, values, handleSubmit }) => (
                  <Box
                        component="form"
                        sx={{
                        '& > :not(style)': { mt: 1,mb: 1, width: '35ch' },
                        }}
                        noValidate
                        autoComplete="off"
                  >
                  <TextField 
                 id="outlined-basic" 
                 label="Email" 
                 variant="outlined"
                 className="inputRounded"
                 onBlur={handleBlur('email')}
                onChange={handleChange('email')}
                value={values.email}
                 />
                 {touched.email && errors.email ?   <h6 style={{color: 'red'}}>{errors.email}</h6> : null}
                  <FormControl className="inputRounded" variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        onBlur={handleBlur('password')}
                        endAdornment={
                        <InputAdornment position="end">
                        <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                        >
                              {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                        </InputAdornment>
                        }
                        label="Psword"
                  />
                  {touched.password && errors.password ?   <h6 style={{color: 'red'}}>{errors.password}</h6> : null}
                  </FormControl>
                  <button className="button1st" type="button" onClick={() => handleSubmit()}>Login</button>

                  <FormControlLabel
                        control={
                        <Checkbox checked={checked} onChange={handleChange1} name="jason" />
                        }
                        label="Remember me"
                  />
                 </Box>
                 )}
              </Formik>
                  </div>
                 </div>

           </div>
            </div>
      )
}

export default Login
