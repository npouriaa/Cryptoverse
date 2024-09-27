import { Pagination } from "@mui/material";
import { ChangeEvent } from "react";

type PaginationComponentTypes = {
  page: number;
  handlePageChange: (event: ChangeEvent<unknown>, value: number) => void;
};

const PaginationComponent = ({
  page,
  handlePageChange,
}: PaginationComponentTypes) => {
  return (
    <Pagination
      sx={{
        "& .MuiPaginationItem-text": {
          color: "#fff !important",
          border: "1px solid #333",
        },
        "& .MuiPaginationItem-text:hover": {
          backgroundColor: "#FF9332 !important",
        },
        "& .Mui-selected  ": {
          backgroundColor: "#FF9332 !important",
          borderColor: "#FF9332 !important",
        },
        "& .MuiPaginationItem-ellipsis": {
          border: "none",
        },
      }}
      count={10}
      page={page}
      onChange={handlePageChange}
    />
  );
};

export default PaginationComponent;
