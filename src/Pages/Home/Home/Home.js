import React from "react";
import Appointment from "../../Appointment/Apointment/Appointment"
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
      <Info></Info>
      <Services></Services>
      <Care></Care>
      <Appointment></Appointment>
      <Testimonials></Testimonials>
      <Form></Form>
    </div>
  );
};

export default Home;
