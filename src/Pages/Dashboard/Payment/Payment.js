import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutForm from "../CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51L2eTHAfU2hrkvbzZY5OJ2gXQZoNeM0FR6dXlyqcA1iavrDeTwq3qyQSV9WfEPWg6534xTSH2Z1r4RW5zR7iTcq700qzIONnbR"
);

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(["booking", id], () =>
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className="pl-2">
            <h2 className="font-bold text-xl text-red-300">Payment</h2>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h3 className="text-lg font-semibold ">
                        Hello{" "}
                        <span className="text-orange-400 text-xl">
                            {appointment.patientName}
                        </span>{" "}
                    </h3>
                    <h2 className="card-title text-base  ">
                        Pay For:
                        <span className="text-orange-400">{appointment.treatment}</span>
                    </h2>
                    <p className=" text-sm font-medium">
                        We will see you on{" "}
                        <span className="text-orange-400">{appointment.date}</span> at{" "}
                        <span className="text-orange-400">{appointment.slot}</span>
                    </p>
                    <p className=" font-medium">
                        Please Pay{" "}
                        <span className="text-orange-400">${appointment.price}</span>
                    </p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
