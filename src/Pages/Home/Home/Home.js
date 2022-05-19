import React from "react";
import Appointment from "../Appointment/Appointment";
import Banner from "../Banner/Banner";
import Care from "../Care/Care";
import Form from "../Form/Form";
import Info from "../Info/Info";
import Services from "../Services/Services";
import Testimonials from "../Testomonial/Testimonials";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="px-12">
        <Info></Info>
        <Services></Services>
        <Care></Care>
      </div>
      <Appointment></Appointment>
      <Testimonials></Testimonials>
      <Form></Form>
    </div>
  );
};

export default Home;
