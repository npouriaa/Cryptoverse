import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { MouseEvent } from "react";

type TogglePriceProps = {
  priceType: string;
  handlePriceTypeChange: (
    event: MouseEvent<HTMLElement>,
    newPriceType: string
  ) => void;
};

const TogglePriceType = ({
  priceType,
  handlePriceTypeChange,
}: TogglePriceProps) => {
  return (
    <div className="mb-5 flex justify-center p-1 items-center">
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handlePriceTypeChange}
        sx={{
          height: "2.7rem",
          "& .MuiToggleButtonGroup-grouped": {
            fontSize: "0.75rem",
            border: "1px solid #ff9332 !important",
            borderColor: "unset",
            color: "#fff ",
            fontFamily: "poppins_regular",
          },
          "& .MuiToggleButtonGroup-firstButton": {
            borderTopLeftRadius: ".5rem",
            borderBottomLeftRadius: ".5rem",
          },
          "& .MuiToggleButtonGroup-lastButton": {
            borderTopRightRadius: ".5rem",
            borderBottomRightRadius: ".5rem",
          },
          "& .Mui-selected": {
            backgroundColor: "#ff9332 !important",
          },
        }}
      >
        <ToggleButton value="prices">Prices</ToggleButton>
        <ToggleButton value="market_caps">Market Cap</ToggleButton>
        <ToggleButton value="total_volumes">Total Volume</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default TogglePriceType;
