export const isImage = (fileSrc: string) => {
  return (
    fileSrc.includes(".jpg") ||
    fileSrc.includes(".png") ||
    fileSrc.includes(".jpeg")
  );
};
