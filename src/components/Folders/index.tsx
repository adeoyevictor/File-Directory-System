import React from "react";
import Folder from "./Folder";
import FileItem from "../../types";

interface FoldersProps {
  folders: FileItem[];
  name?: string;
}

const Folders: React.FC<FoldersProps> = ({ folders, name }) => {
  return (
    <React.Fragment>
      <h4 className="folders__title">{name}</h4>
      <div className="folders">
        {folders.map((folder) => {
          return <Folder key={folder.id} folder={folder} />;
        })}
        {folders.length === 0 && <div>No Folders</div>}
      </div>
    </React.Fragment>
  );
};

export default Folders;
