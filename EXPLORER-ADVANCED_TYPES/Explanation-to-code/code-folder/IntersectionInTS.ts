type FileData = {
  path: string;
  content: string;
};

type DatabaseData = {
  connectionUrl: string;
  credentials: string;
};

type Status = {
  isOpen: boolean;
  errMessage: string;
};

type accessedFileData = FileData & Status;
type accessedDatabaseData = DatabaseData & Status;
