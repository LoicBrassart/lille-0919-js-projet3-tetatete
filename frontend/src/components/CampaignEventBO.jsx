import React from "react";
import "./styles/CampaignEventBO.scss";
import { useForm } from "react-hook-form";

export default function CampaignEventBO() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <div className="CampaignFormBO">
      <h1>Change campaign after event</h1>

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

        <button type="submit">send</button>
      </form>
    </div>
  );
}
