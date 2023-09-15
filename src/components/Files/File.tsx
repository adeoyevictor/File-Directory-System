import moment from "moment";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import FileItem from "../../types";

import ImageSvg from "../../assets/Image";
import PdfSvg from "../../assets/Pdf";
import ExcelSvg from "../../assets/Excel";
import Fav from "../../assets/Fav";
import Download from "../../assets/Download";
import Print from "../../assets/Print";
import ExcelLarge from "../../assets/ExcelLarge";
import PdfLarge from "../../assets/PdfLarge";
import closeSvg from "../../assets/close.svg";
import { isImage } from "../../helpers/isImage";
import { isExcel, isFile, isPdf } from "../../helpers/isFile";

interface FileProps {
  file: FileItem;
  downloadDocument: (file: FileItem) => void;
}

export default function File({ file, downloadDocument }: FileProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        size={"lg"}
      >
        <div className="preview__modal">
          <div className="top">
            <Download />
            <button onClick={close}>
              <img src={closeSvg} alt="" />
              Close
            </button>
          </div>
          <div className="bottom">
            <div className="file__img">
              {file.favourite && <Fav />}
              <img src={file.src} alt="" />
            </div>
            <div className="caption">
              <ImageSvg />
              <div>
                <h4>{file.name}</h4>
                <p>Added {moment(file.created_at).format("Do MMMM, YYYY")}</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <section
        className="file"
        onDoubleClick={(event) => {
          event.stopPropagation();
          if (isImage(file.src)) {
            open();
          } else if (isFile(file.src)) {
            downloadDocument(file);
          }
        }}
      >
        <div className="file__img">
          {file.favourite && <Fav />}
          {isFile(file.src) ? <Download /> : null}
          {isFile(file.src) ? <Print /> : null}

          {isImage(file.src) ? (
            <img src={file.src} alt="" />
          ) : isPdf(file.src) ? (
            <PdfLarge />
          ) : isExcel(file.src) ? (
            <ExcelLarge />
          ) : null}
        </div>
        <div className="caption">
          {isImage(file.src) ? (
            <ImageSvg />
          ) : isPdf(file.src) ? (
            <PdfSvg />
          ) : isExcel(file.src) ? (
            <ExcelSvg />
          ) : null}
          <div>
            <h4>{file.name}</h4>
            <p>Added {moment(file.created_at).format("Do MMMM, YYYY")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
