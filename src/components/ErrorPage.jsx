import Lottie from "lottie-react";
import err from '../assets/error.json'
import { Link, useRouteError } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
const ErrorPage = () => {
    const data = useRouteError()
    // console.log(data.error.message);
    // console.log(data.status);
    // console.log(error.messege,status);
    return (
        <div className=" flex justify-center flex-col items-center h-screen py-10">
            <p className="py-20 text-4xl"> {data.error.message? data.error.message : 'Error' } ||<span className=" text-red-500"> {data.status? data.status : '400'}</span> </p>
            <Lottie className="w-[60%] h-96 flex-1" animationData={err}></Lottie>
            <Link className="btn bg-teal-200 rounded hover:bg-green-400" to='/'> <ArrowUturnLeftIcon className="h-4"></ArrowUturnLeftIcon> Back To Home</Link>
        </div>
    );
};

export default ErrorPage;