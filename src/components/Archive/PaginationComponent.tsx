import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";
import { rightArrow, leftArrow } from "../../assets/images/index";

const toPersianNumber = (num: number | string) =>
  String(num).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);

const PrevIcon = () => <img src={rightArrow} alt="قبلی" />;
const NextIcon = () => <img src={leftArrow} alt="بعدی" />;

export default function PaginationSize() {
  const [page, setPage] = useState(124);

  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      mt="86px"
      sx={{ direction: "rtl" }}
    >
      <Pagination
        count={356}
        size="small"
        page={page}
        boundaryCount={1}
        siblingCount={2}
        onChange={(_, value) => setPage(value)}
        sx={{
          "& .MuiPaginationItem-root": {
            fontFamily: "Vazir",
            fontWeight: 400,
            direction: "rtl",
            "&:hover": {
              backgroundColor: cssMainColors.normalGreen,
              color: cssMainColors.white,
            },
            "&.Mui-selected": {
              backgroundColor: cssMainColors.normalGreen,
              color: cssMainColors.white,
            },
          },
        }}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            slots={{ previous: PrevIcon, next: NextIcon }}
            {...(item.type === "page" && typeof item.page === "number"
              ? { label: toPersianNumber(item.page) }
              : {})}
          />
        )}
      />
    </Stack>
  );
}
