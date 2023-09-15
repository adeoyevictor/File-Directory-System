export const detectBlobType = (fileSrc: string) => {
    if (fileSrc.includes(".pdf")) {
      return "application/pdf";
    } else if (fileSrc.includes(".xlsx")) {
      return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    } else {
      return "";
    }
  };