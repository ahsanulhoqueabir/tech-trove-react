import React from "react";
import { Link, useNavigation } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const Home = () => {
  const loading = useNavigation();
    if(loading.state ==='loading')
    {
       return  <LoadingPage/>;
    }
  return (
    <div className="pb-20">
      <div className="text-center bg-slate-200  pt-20 pb-32">
        <h1 className="animate-logo text-7xl">Welcome to TechTrove</h1>
        <p className="pt-5 text-xl w-[60%] m-auto">
          Embark on a journey with{" "}
          <span className="animate-logo text-xl">TechTrove</span> as we chart
          the course through the ever-evolving landscape of technology. From
          cutting-edge gadgets to futuristic accessories, our tech haven is your
          gateway to the latest innovations and digital marvels.
        </p>
        <div className="py-10">
            <Link to='/shop' className="btn-primary">Shop Now</Link>
            <Link to='about' className="btn-secondary">Learn More</Link>
        </div>
      </div>
      <img className="w-[70%] opacity-60 hover:opacity-100 transition duration-300 m-auto -mt-20 rounded shadow-2xl" src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
  );
};

export default Home;
