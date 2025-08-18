type FileSource = { type: "file"; path: string };
const fileSource: FileSource = {
  type: "file",
  path: "/some/path/file-source.csv",
};

type DBSource = { type: "db"; connectionUrl: string };
const dbSource: DBSource = {
  type: "db",
  connectionUrl: "some-connection.url",
};
type Source = FileSource | DBSource;

// outsourcing type-guard logic to a function
function isFile(source: Source) {
  return source.type === "file";
}

function loadData(source: Source) {
  // if ("path" in source) {
  //   // source.path; => use that to open the file
  //   return;
  // }
  // // source.connection.url; => to reach out database
  //-------------------------------------------------
  // if (source.type === "file") {
  //   source.path;
  //   return;
  // }
  //----------------------------------------------
  // Using the outsource type-guard function.
  if (isFile(source)) {
    source.path;
    return;
  }
  source.connectionUrl;
}
