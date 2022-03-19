import React from "react";
import Button from "./component/Button";
import Icon from "./component/Icon";
import IconButton from "./component/IconButton";
import Card from "./component/Card";
import Avatar from "./component/Avatar";

function App() {
  return (
    <div>
      <Button text={"버튼"} />
      <Icon name={"HighlightOffRounded"} />
      <Icon name={"CheckCircleOutlineRounded"} />
      <IconButton name={"CheckCircleOutlineRounded"} />
      <Card />
      <Card>
        <Button text={"1234"} variant={"contained"} />
      </Card>
      <Card>
        <Avatar />
        <Avatar size={300} />
      </Card>
    </div>
  );
}

export default App;
