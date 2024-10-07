import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

type SelectDaysProps = {
  days: number | string;
  handleDaysChange: (e: SelectChangeEvent<number | string>) => void;
  pTag: boolean;
};

const SelectDays = ({ days, handleDaysChange, pTag }: SelectDaysProps) => {
  return (
    <div className="flex items-center gap-3 mb-4">
      {!pTag && <p>Price change in </p>}

      <Select
        value={days}
        onChange={handleDaysChange}
        sx={{
          height: "2.5rem",
          color: "#fff",
          borderRadius: ".5rem",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ff9332 !important",
            borderWidth: ".1rem !important",
          },
          "& .MuiSvgIcon-root": {
            fill: "#ff9332",
          },
        }}
      >
        <MenuItem value={1}>1 Day</MenuItem>
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
};

export default SelectDays;
