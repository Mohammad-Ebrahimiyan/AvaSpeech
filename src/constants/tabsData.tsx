import { Typography } from "@mui/material";
import { centerLink, centerMicIcon, centerUpload } from "../assets/images/index";

export const tabsData = [
  {
    type: "link", 
    imageSrc: centerLink,
    instructionText: (
      <div>
        <Typography >
          نشانی اینترنتی فایل حاوی گفتار (صوتی/تصویری) را وارد
        </Typography>
        <Typography >
          و دکمه را فشار دهید
        </Typography>
      </div>
    ),
  },
  {
    type: "upload", 
    imageSrc: centerUpload,
    instructionText: (
      <div>
        <Typography >
          برای بارگذاری فایل گفتاری (صوتی/تصویری)، دکمه را فشار دهید
        </Typography>
        <Typography >
          متن پیاده شده آن، در اینجا ظاهر می‌شود
        </Typography>
      </div>
    ),
  },
  {
    type: "record", 
    imageSrc: centerMicIcon,
    instructionText: (
      <div>
        <Typography>
          برای شروع به صحبت، دکمه را فشار دهید
        </Typography>
        <Typography >
          متن پیاده شده آن، در اینجا ظاهر شود
        </Typography>
      </div>
    ),
  },
];
