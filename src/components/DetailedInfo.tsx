import React from "react";
import { Data } from "../lib/types";

type DetailedInfoProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  data: Data;
};

const DetailedInfo: React.FC<DetailedInfoProps> = ({ onChange, data }) => {
  return (
    <>
      <div className="form-group">
        <input
          type="text"
          id="email"
          name="email"
          onChange={onChange}
          value={data.email}
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="form-group">
        <input
          type="password"
          id="password"
          name="password"
          onChange={onChange}
          value={data.password}
        />
        <label htmlFor="email">Password</label>
      </div>
    </>
  );
};

export default DetailedInfo;
