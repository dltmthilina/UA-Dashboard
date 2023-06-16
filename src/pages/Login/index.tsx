import InputBox from "components/InputBox";
import { useFormik } from "formik"
import { Link } from "react-router-dom";
import * as Yup from "yup";

const LoginPage=()=>{

    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        validationSchema: Yup.object().shape({
          
        }),
        onSubmit:async(values:any)=>{
            
        }
    })


    return(
    <div className="px-6 py-20 space-y-4  flex justify-center">
      
        <form onSubmit={formik.handleSubmit} className="w-1/2 p-10">
            <div className="pt-10">
                <h1 className=" text-4xl font-bold text-center">Login</h1>
            </div>
        
            <div className=" space-y-6 mt-6 ">
                <InputBox
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="email"
                    placeholder="email"
                    touched={formik.touched.email}
                    error={formik.errors.email}
                />
                <div>
                    <InputBox
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="password"
                        placeholder="password"
                        touched={formik.touched.password}
                        error={formik.errors.password}
                    />
                    <Link to={""} className=" text-[#5356FF] ">Forgot Password?</Link>
                </div>
            </div>
            <div className=" space-y-2 mt-20">
                <button type="submit" className="loginbtn">Sign In</button>
               
            </div>
        
        </form>
       
    </div>
    )
}

export default LoginPage