"use client";
import React from "react";
import ReduxStateCheckerOne from "@/app/components/reduxstatecheckercomponent/reduxstatechecker/reduxstatechecker";
import ReduxStateCheckerTwo from "@/app/components/reduxstatecheckercomponent/reduxstatecheckertwo/reduxstatecheckertwo";
import TextField from "@/components/reduxstatecheckercomponent/textfield/textfield";

const ReduxStateCheckerComponent = () => {
  
  return (
    <div className="flex flex-col justify-center items-center gap-2  w-[350px]  h-48">
      <h1>Redux State Hub</h1>
      <ReduxStateCheckerOne />
      <ReduxStateCheckerTwo />
     <TextField />
    </div>
  );
};

export default ReduxStateCheckerComponent;
