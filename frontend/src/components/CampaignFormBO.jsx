import React from "react";
import "./styles/CampaignFormBO.scss";
import { useForm } from "react-hook-form";

export default function CampaignFormBO() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div className="CampaignFormBO">
      <h1>Create new campaign</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <span>Name :</span>
          <input
            type="text"
            placeholder="Name..."
            name="nameCampaign"
            ref={register({ required: true, maxLength: 80 })}
          />
        </div>
        <div className="container">
          <span>Picture :</span>
          <input
            type="url"
            placeholder="http://"
            name="pictureUrl"
            ref={register({ required: true })}
          />
        </div>
        <div className="container">
          <span>Resume :</span>
          <textarea name="resumeCampaign" ref={register({ required: true })} />
        </div>
        <div className="container">
          <span>Start datetime</span>
          <input
            type="datetime"
            placeholder="YYYY-MM-DD hh:mm:ss"
            name="startDate"
            ref={register({ required: true })}
          />
        </div>
        <div className="container">
          <span>End datetime :</span>
          <input
            type="datetime"
            placeholder="YYYY-MM-DD hh:mm:ss"
            name="endDate"
            ref={register({ required: true })}
          />
        </div>
        <div className="container">
          <span>Event date :</span>
          <input
            type="datetime"
            placeholder="YYYY-MM-DD"
            name="eventDate"
            ref={register({ required: true })}
          />
        </div>
        <div className="container">
          <span>Donation value 1 :</span>
          <input
            type="number"
            placeholder="donationValue1"
            name="10"
            ref={register({ required: true })}
          />
        </div>
        <div className="container">
          <span>Donation value 2 :</span>
          <input
            type="number"
            placeholder="20"
            name="donationValue2"
            ref={register({ required: true })}
          />
        </div>
        <div className="container">
          <span>Donation value 3 :</span>
          <input
            type="number"
            placeholder="30"
            name="donationValue3"
            ref={register({ required: true })}
          />
        </div>
        <div className="container">
          <span></span>

          <button type="submit">send</button>
        </div>
      </form>
    </div>
  );
}
