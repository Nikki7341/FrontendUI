import React , {useEffect} from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import { Formik} from "formik";
import * as yup from "yup";

const validation_Schema = yup.object({
      title: yup.string().required("title is required"),
      description: yup.string().required("description is required")

})


export default function BasicCard({heading , id, taskData}) {
      const [open, setOpen] = React.useState(false);

      const [values, setValues] = React.useState({
            title: '',
            description: '',
            id: ''
      })

      console.log(taskData)

  const handleClickOpen = (x) => {
        console.log(x)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const callApi = (values) => {
      values.status = id
      taskData.push(values)
      console.log(taskData);
      setOpen(false);
      ////--------------------API Call --------------------------------------------------
  }

///---------------api for edit --------------------------------------
  const EditApi = (values, id) => {
        console.log(values, id);
        taskData.filter(x => x._id === id)[0].title = values.title
        taskData.filter(x => x._id === id)[0].description = values.description
        console.log(taskData)
      setOpen(false);

  }

  useEffect(() => {
      console.log("test")
}, [open])

  return (
    <Card sx={{ minWidth: 275, minHeight: 600 }} className="card_bg_color p-4" id={id}>
    <div class="d-flex justify-content-between">
      <h6>{heading}</h6>
      <h6 className="digit">{taskData.filter(x => x.status === id).length}</h6>
      </div>
      <Button className="addto_btn" onClick={handleClickOpen}><AddRoundedIcon /></Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

            <Formik
              initialValues={{ title: '', description: '',}}
              validationSchema={validation_Schema}
                onSubmit={(values, actions) => {
                  console.log(values);
                  callApi(values)
                }}
              >
                {
                  ({ errors, touched ,handleChange, handleBlur, values, handleSubmit }) => (
      <div className="row m-5">
      <TextField 
      id="outlined-basic"
      name='title'
      label="Title" 
      variant="standard"
      className="p-4"
       onBlur={handleBlur('title')}
      onChange={handleChange('title')}
      value={values.title}
      />
      {touched.title && errors.title ?   <h6 style={{color: 'red'}}>{errors.title}</h6> : null}
      <TextField 
            id="outlined-multiline-flexible"
          label="Description"
          name="description"
          multiline
          maxRows={4}
          className="p-4"
          variant="standard"
           onBlur={handleBlur('description')}
      onChange={handleChange('description')}
      value={values.description}
       />
       {touched.description && errors.description ? <h6 style={{color: 'red'}}>{errors.description}</h6> : null}
      
      <Button onClick={handleSubmit}>Add</Button>

      </div>

      )}
              </Formik>

      </Dialog>
      <div className="row pt-4 pb-4 pl-4 pr-4">
      {
            taskData.filter(x => x.status === id).map(x => {
                  return (
                        <Card sx={{ minWidth: 275 }} className="p-4 m-2" id={x._id}>
                        <button onClick={() => handleClickOpen(x)}>edit</button>
                        <h4>{x.title}</h4>
                        <h6>{x.description}</h6>
                        {/* //////------------------mapping------------------------//// */}
                        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       <Formik
              initialValues={{ editTitle: x.title, editDescription: x.description,}}
                onSubmit={(values, actions) => {
                  console.log(values);
                  EditApi(values, x._id)
                }}
              >
                {
                  ({ errors, touched ,handleChange, handleBlur, values, handleSubmit }) => (
      <div className="row m-5">
      <TextField 
      id="outlined-basic"
      name='title'
      label="Title" 
      variant="standard"
      className="p-4"
       onBlur={handleBlur('editTitle')}
      onChange={handleChange('editTitle')}
      value={values.editTitle}
      />
      <TextField 
            id="outlined-multiline-flexible"
          label="Description"
          name="description"
          multiline
          maxRows={4}
          className="p-4"
          variant="standard"
           onBlur={handleBlur('editDescription')}
      onChange={handleChange('editDescription')}
      value={values.editDescription}
       />

      
      <Button onClick={handleSubmit}>Edit</Button>

      </div>

      )}
              </Formik>
        </Dialog>
                        </Card>
                  )
            })
      }
     
      </div>
      </Card>
  );
}
