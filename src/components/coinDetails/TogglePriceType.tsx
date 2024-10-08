import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { MouseEvent } from "react";

type TogglePriceProps = {
  priceType: string;
  handlePriceTypeChange: (event: MouseEvent<HTMLElement>, newPriceType: string) => void;
};

const TogglePriceType = ({
  priceType,
  handlePriceTypeChange,
}: TogglePriceProps) => {
  return (
    <div>
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handlePriceTypeChange}
        sx={{
          "&.Mui-selected": {
            color: "#ff9332",
          },
          borderColor: "#ff9332",
          border: "unset !important",
          borderRadius: ".5rem !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid #ff9332 !important",
            borderColor: "unset",
            color: "#fff !important ",
          },
          "& .MuiToggleButton-standard": {
            color: "#fff !important",
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
