import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

//Components
import CardInformation from "../../shared/cards/CardInformation";

//MUI Components
import { Stack } from "@mui/material";

//Redux
import { changeTypeSession } from "../../../redux/lastSessionSlice/sessionSlice";

export const SessionsSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Stack direction="row" sx={{ overflowX: "auto" }}>
      <CardInformation
        title="-30"
        description="18 Sessions"
        type={"one"}
        onClick={() => {
          navigate("/last-session");
          dispatch(changeTypeSession("one"));
        }}
      />
      <CardInformation
        title="30 - 60"
        description="23 Sessions"
        type="two"
        onClick={() => {
          navigate("/last-session");
          dispatch(changeTypeSession("two"));
        }}
      />
      <CardInformation
        title="60 - 90"
        description="8 Sessions"
        type="three"
        onClick={() => {
          navigate("/last-session");
          dispatch(changeTypeSession("three"));
        }}
      />
      <CardInformation
        title="+90"
        description="2 Sessions"
        type="four"
        onClick={() => {
          navigate("/last-session");
          dispatch(changeTypeSession("four"));
        }}
      />
      <CardInformation
        title="Drafts"
        description="5 Sessions"
        type=""
        onClick={() => {
          navigate("/last-session");
          dispatch(changeTypeSession(""));
        }}
      />
    </Stack>
  );
};
