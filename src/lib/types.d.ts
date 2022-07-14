import React from "react";

export type FormStep<T> = {
  title: string;
  render: (
    data: T,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  ) => React.ReactNode;
};

export type Data = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
