import MultiStepForm from "./lib/MultiStepForm";
import PersonalInfo from "./components/PersonalInfo";
import { Data } from "./lib/types";
import React from "react";
import DetailedInfo from "./components/DetailedInfo";

const App = () => {
  return (
    <div className="container">
      <MultiStepForm<Data>
        initialData={{ firstName: "", lastName: "", email: "", password: "" }}
        steps={[
          {
            title: "Step 1",
            render: (data, onChange) => (
              <PersonalInfo onChange={onChange} data={data} />
            ),
          },
          {
            title: "Step 2",
            render: (data, onChange) => (
              <DetailedInfo onChange={onChange} data={data} />
            ),
          },
          {
            title: "Step 3",
            render: (data, onChange) => (
              <DetailedInfo onChange={onChange} data={data} />
            ),
          },
        ]}
        onSubmit={(data) => console.log(data)}
      />
    </div>
  );
};

export default App;
