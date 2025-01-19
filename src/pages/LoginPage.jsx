import {useEffect, useState} from "react";



import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {useFormik} from "formik";
import {clsx} from "clsx";
import {Navigate, useNavigate} from "react-router";
import {useMutation} from "@tanstack/react-query";
import {login} from "@/lib/requests.js";




const LoginPage = () => {

    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/profile');
        }
    }, [navigate]);

    const [serverError, setServerError] = useState(null);
    //const queryClient = useQueryClient()


    const mutation = useMutation({
        mutationFn: (loginData) => login(loginData, setServerError),
    });

    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 8) {
            errors.password = 'Must be 8 characters or more';
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            const {email, password} = values;
            mutation.mutate({email, password});
        },
    });

    return (
        <div className="grid grid-cols-2">
            <div className="relative text-5xl text-mainRed leading-relaxed uppercase flex justify-center items-center">
                <h2 className="text-transparent text-[180px] absolute text-stroke">Login</h2>
                <h2 className="text-red text-[180px] absolute  header-animation">Login</h2>
            </div>
            <div className="flex justify-center items-center">
                <Card className="w-full max-w-sm mx-auto mt-20 border-2 rounded-2xl bg-white dark:bg-mainLightText text-mainLightText dark:text-white">
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>Enter your credentials to access your account</CardDescription>
                    </CardHeader>
                    <form onSubmit={formik.handleSubmit}>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            {formik.touched.email && formik.errors.email ? <div className="text-mainRed">{formik.errors.email}</div> : null}


                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    onBlur={formik.handleBlur}
                                />
                            </div>
                            {formik.touched.password && formik.errors.password ? <div className="text-mainRed">{formik.errors.password}</div> : null}

                            <div>Dont have account<span className="font-sans">?</span> <a className="underline" href="/register">Join us<span className="font-sans">!</span></a></div>
                        </CardContent>
                        <CardFooter className="flex flex-col">
                            {
                                mutation.isPending && <div
                                    className="border-gray-300 border-[1px] h-7 w-7 animate-spin rounded-full  border-t-[1px] border-t-mainRed"/>
                            }
                            {
                                mutation.isError &&
                                <Button variant="outline" className="w-full underline" onClick={() => {
                                    formik.resetForm();
                                    mutation.reset()
                                    setServerError(null)
                                }} >
                                    {"Try again"}
                                </Button>
                            }
                            {
                                mutation.isIdle && !mutation.isSuccess &&
                                <Button type="submit"
                                        disabled={!formik.touched.email || formik.errors.email || formik.errors.password ||formik.errors.passwordRepeat}
                                        className={clsx("w-full underline",
                                            (!formik.touched.email || formik.errors.email || formik.errors.password ||formik.errors.passwordRepeat) && "text-gray-600 -underline" )}

                                >
                                    {"Log in"}
                                </Button>
                            }
                            {
                                mutation.isSuccess &&
                                <>
                                    <div className="mt-2 text-green-500">Registration was successful</div>
                                    <Navigate to="/profile"/>
                                </>
                            }
                        </CardFooter>
                    </form>
                </Card>
                {serverError && <div className="mt-5 text-mainRed">{serverError}</div>}
            </div>
        </div>
    );
}
export default LoginPage