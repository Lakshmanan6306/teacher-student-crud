import React from "react";
import Baseapp from "../Base/Basecomponent";


export function Home() {
    return (
        <Baseapp>
            <div className="row">
                <div className="col-6">
                    <h2 className="display-5 mt-5 text-uppercase text-primary">Built With Greatness Inside</h2>
                    <p className="m-5 fs-5 fw-medium text-start text-light"> Having established an Engineering Institution, VIT, with over 80,000 students from 50+ countries, which has been recognized as an Institution of Eminence by Govt. of India, we decided to create a modern international school in Chennai with state of the art facilities, based on Indian culture. </p>
                    <p className="m-5 fs-5 fw-medium text-start text-light"> Our vision is to inculcate family values, good conduct and character, through holistic learning and modern ICSE and IGCSE Cambridge education systems. </p>
                </div>
                <div className="">
                    <img src="" className="card-img" alt=""/>
                </div>
            </div>
        </Baseapp>
    )
}