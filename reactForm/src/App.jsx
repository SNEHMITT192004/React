import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from "react-hook-form"
function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting},
  } = useForm();

  async function onSubmit(data){
    //API call ko simulate krte h
    //basically data i.e submitted will take 5s delay
    //in that time it is allowed to perform multiple submit 
     await new Promise((resolve)=>setTimeout(resolve,5000));
     console.log("submitting the form ",data);
    //by default flag comes in form i.e isSubmitting
    //to prevent this we diasbled in input 
  }

  //we learnt applying validation
  //apply message showing
  //stlying on error messages

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        {/* Now form will be able to track input
        can be validated event listener can be added */}
        <input  
        className={errors.firstName ? 'input-error':""}
        {...register('firstName',
          { required:{value:true,message:"You need to fill this field"},
            minLength:{value:3,message:'Min Len at least 3'},
            maxLength:{value:6,message:'Max Len at most 6'}
          })
        }/>
        {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br />
      <div>
        <label>Middle Name:</label>
        <input  {...register('middleName')}/>
      </div>
      <br />
      <div>
        <label>Last Name:</label>
        <input  {...register('lastName',
          { pattern: {
            value: /^[A-Za-z]+$/i ,
            message:"Last name is not as per the rules"
            }
          })}/>
        {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
      </div>
      <input type="submit"disabled={isSubmitting} value={isSubmitting ? "Submitting":"Submit"} />
    </form>
  )
}
//Basic Form Handling ->create
                      // ->fields register
                      // -> onSubmit
                      // -> validation
                      // -> Error Handling
                      // -> Styling 
                      // ->Multiple Submit Prevention
export default App
