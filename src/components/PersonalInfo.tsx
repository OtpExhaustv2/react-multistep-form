import React from "react";
import { Data } from "../lib/types";

type PersonalInfosProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  data: Data;
};

const PersonalInfo: React.FC<PersonalInfosProps> = ({ onChange, data }) => {
  return (
    <div className="form-group">
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={onChange}
        value={data.firstName}
      />
      <label htmlFor="firstName">Firstname</label>
    </div>
  );
};

export default PersonalInfo;
