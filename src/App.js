import "./App.css";
import React from "react";
import { Password } from "./components/shared/textfields/password";
import { Email } from "./components/shared/textfields/email";
import { CustomButton } from "./components/shared/buttons/button";
import { CustomSwitch } from "./components/shared/buttons/switch";
import CardInformation from "./components/shared/cards/CardInformation";
import ButtonOutlined from "./components/shared/buttons/ButtonOutlined";
import CardAnnouncement from "./components/shared/cards/CardAnnouncement";
import BasicTable from "./components/shared/tables/basicTable/BasicTable";
import DoughnutChart from "./components/shared/charts/Doughnut";
import InputSearch from "./components/shared/textfields/searcherCategories/Search";
import Input from "./components/shared/textfields/Input";
import AutocompleteInput from "./components/shared/textfields/Autocomplete";
import DataTable from "./components/shared/tables/dataTable/DataTable";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "aliceblue",
      }}
    >
      Components
      <div
        style={{
          display: "flex",
          margin: 10,
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          flexDirection: "column",
          // flexWrap: "wrap",
        }}
      >
        <Email />
        <Password />
        <CustomButton />
        <CustomSwitch />
        <CardInformation
          title="30 - 60"
          description="23 Sessions"
          disabled
          type="four"
        />
        <ButtonOutlined name="GO TO ANNOUNCEMENTS" />
        <CardAnnouncement
          title="¡Summer isn't over yet!"
          description="Show your badge for free ice cream in the cafeteria on August 31st"
        />
        <InputSearch />
        <Input label={"Department Name"} />
        <AutocompleteInput label={"Location"} />
        <BasicTable />
        <DataTable />
        <DoughnutChart
          labels={["One", "Two", "Three", "Four", "Five", "Six"]}
          values={[96, 7, 28, 30, 45, 15]}
        />
      </div>
    </div>
  );
}

export default App;
