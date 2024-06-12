import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { MoonLoader } from 'react-spinners';

interface RegisterFormValues {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
    specialization: string;
}

const specializations = [
    "Nephrologist",
    "Urologist",
    "Endocrinologist",
    "Cardiologist",
    "Immunologist",
    "Anesthesiologist",
    "Ophthalmologist",
    // Add other specializations as needed
];

const RegisterForm: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [showSpecialization, setShowSpecialization] = useState<boolean>(false);

    const initialValues: RegisterFormValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
        specialization: ""
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid Email Address").required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters long")
            .matches(/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/, {
                message: "Password can only contain letters, numbers, and special characters",
            })
            .matches(/[0-9]/, "Password must contain at least one number"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
            .required('Confirm Password is required'),
        role: Yup.string().required('Role is required'),
        specialization: Yup.string(),
        rememberMe: Yup.boolean(),
    });

    const handleSubmit = (values: RegisterFormValues) => {
        if (formikValidation.isValid) {
            setLoading(true);
            // Perform the registration logic here, e.g., call an API
        } else {
            alert("Check your input field(s)");
        }

        console.log(values);
    };

    const formikValidation: FormikProps<RegisterFormValues> = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleSubmit
    });

    const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const role = event.target.value;
        setShowSpecialization(role === 'Doctor');
        formikValidation.setFieldValue('role', role);
    };

    const formStyles = {
        nameInput: "w-full h-full px-3 py-3 text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50",
        nameLabel: "before:content[''] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500",
        emailInput: "w-full h-full px-3 py-3 text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50",
        emailLabel: "before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500",
        passwordInput: "w-full h-full px-3 py-3 text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50",
        passwordLabel: "before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
    };

    return (
        <>
            {loading ? (
                <div className='flex justify-center items-center h-[100vh]'>
                    <div className="absolute inset-0 -z-10 h-full w-full bg-indigo-50 bg-[linear-gradient(to_right,#e0e0e0_1px,transparent_1px),linear-gradient(to_bottom,#e0e0e0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
                    <div className='bg-white p-5 rounded-xl shadow-lg w-96'>
                        <div className='flex justify-center'>
                            <MoonLoader
                                color="#3676d6"
                                size={120}
                            />
                        </div>
                        <p className="text-base mt-5 text-center text-gray-800">
                            We're processing your registration. This might take a few moments.
                            <span className='text-indigo-600'>Thank you for your patience!</span>
                        </p>
                    </div>
                </div>
            ) : (
                <div className='flex justify-center items-center h-[100vh]'>
                    <div className="absolute inset-0 -z-10 h-full w-full bg-indigo-50 bg-[linear-gradient(to_right,#e0e0e0_1px,transparent_1px),linear-gradient(to_bottom,#e0e0e0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
                    <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                        <div className="relative grid mx-4 mb-2 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-800 bg-clip-border shadow-gray-900/20">
                            <h3 className="block text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
                                Sign Up
                            </h3>
                        </div>
                        <form onSubmit={formikValidation.handleSubmit}>
                            <div className="flex flex-col gap-2 p-6">
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        className={formStyles.nameInput}
                                        type='text'
                                        placeholder=""
                                        {...formikValidation.getFieldProps('name')}
                                    />
                                    <label className={formStyles.nameLabel}>
                                        Name
                                    </label>
                                </div>
                                <div>
                                    {formikValidation.touched.name && formikValidation.errors.name && (
                                        <span className='text-red-400 text-sm'>{formikValidation.errors.name}</span>
                                    )}
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        className={formStyles.emailInput}
                                        placeholder=" "
                                        type='email'
                                        {...formikValidation.getFieldProps('email')}
                                    />
                                    <label className={formStyles.emailLabel}>
                                        Email
                                    </label>
                                </div>
                                <div>
                                    {formikValidation.touched.email && formikValidation.errors.email && (
                                        <span className='text-red-400 text-sm'>{formikValidation.errors.email}</span>
                                    )}
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        className={formStyles.passwordInput}
                                        placeholder=" "
                                        type='password'
                                        {...formikValidation.getFieldProps('password')}
                                    />
                                    <label className={formStyles.passwordLabel}>
                                        Password
                                    </label>
                                </div>
                                <div>
                                    {formikValidation.touched.password && formikValidation.errors.password && (
                                        <span className='text-red-400 text-sm'>{formikValidation.errors.password}</span>
                                    )}
                                </div>
                                <div className="relative h-11 w-full min-w-[200px]">
                                    <input
                                        className={formStyles.passwordInput}
                                        placeholder=" "
                                        type='password'
                                        {...formikValidation.getFieldProps('confirmPassword')}
                                    />
                                    <label className={formStyles.passwordLabel}>
                                        Confirm Password
                                    </label>
                                </div>
                                <div>
                                    {formikValidation.touched.confirmPassword && formikValidation.errors.confirmPassword && (
                                        <span className='text-red-400 text-sm'>{formikValidation.errors.confirmPassword}</span>
                                    )}
                                </div>
                                <div className='flex gap-2'>
                                    <div className="relative h-11 w-full min-w-[120px]">
                                        <select
                                            className={formStyles.passwordInput}
                                            {...formikValidation.getFieldProps('role')}
                                            onChange={handleRoleChange}
                                        >
                                            <option value="" label="Select role" />
                                            <option value="Doctor" label="Doctor" />
                                            <option value="Patient" label="Patient"/>
                                        </select>
                                        <label className={formStyles.passwordLabel}>
                                            Role
                                        </label>
                                    </div>
                                    <div>
                                        {formikValidation.touched.role && formikValidation.errors.role && (
                                            <span className='text-red-400 text-sm'>{formikValidation.errors.role}</span>
                                        )}
                                    </div>
                                    {showSpecialization && (
                                        <div className="relative h-11 w-full min-w-[200px]">
                                            <select
                                                className={formStyles.passwordInput}
                                                {...formikValidation.getFieldProps('specialization')}
                                            >
                                                <option value="" label="Select specialization" />
                                                {specializations.map((specialization) => (
                                                    <option key={specialization} value={specialization} label={specialization} />
                                                ))}
                                            </select>
                                            <label className={formStyles.passwordLabel}>
                                                Specialization
                                            </label>
                                        </div>
                                    )}
                                    <div>
                                        {formikValidation.touched.specialization && formikValidation.errors.specialization && (
                                            <span className='text-red-400 text-sm'>{formikValidation.errors.specialization}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <button className="block w-full select-none rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-800 py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg text-nowrap hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="submit">Register</button>
                                <p className="flex justify-center mt-6 text-sm antialiased font-light leading-normal text-inherit">
                                    I have an account?
                                    <Link to='../Login'>
                                        <span className="block ml-1 text-sm antialiased font-bold leading-normal text-indigo-700">Login </span>
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default RegisterForm;
