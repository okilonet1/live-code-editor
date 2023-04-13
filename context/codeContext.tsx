// "use client";

import * as React from "react";

// create a context to store the files open in editor

export const codeContext = React.createContext({
  files: Array<object>([
    {
      fileName: "",
      language: "",
      code: ``,
    },
  ]),
  setFiles: (
    files: [
      {
        fileName: string;
        language: string;
        code: string;
      }
    ]
  ) => {},
  activeFile: Object({
    fileName: "",
    language: "",
    code: "",
  }),
  //   activeFile: new File({}),
  setActiveFile: (file: {
    fileName: string;
    language: string;
    code: string;
  }) => {},
});

export interface AuxProps {
  children: React.ReactNode;
}

export const CodeProvider = (props: AuxProps) => {
  const [files, setFiles] = React.useState<Array<object>>([
    {
      fileName: "script.js",
      language: "javascript",
      code: `console.log("Hello World")`,
    },
    {
      fileName: "style.css",
      language: "css",
      code: `body {
                    background-color: #1e1e1e;
                }`,
    },
  ]);
  const [activeFile, setActiveFile] = React.useState<object>({});

  const defaultFiles = [
    {
      fileName: "script.js",
      language: "javascript",
      code: `console.log("Hello World")`,
    },
    {
      fileName: "style.css",
      language: "css",
      code: `body {
                    background-color: #1e1e1e;
                }`,
    },
    {
      fileName: "index.html",
      language: "html",
      code: `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <body>

                </body>
                </html>`,
    },
  ];

  React.useEffect(() => {
    const newFiles = localStorage.getItem("files");
    if (newFiles && newFiles.length > 0) {
      console.log("getting files from local storage");
      setFiles(JSON.parse(newFiles));
      setActiveFile(files[0]);
    } else {
      console.log(
        "no files to get from local storage >>> setting default files"
      );

      setFiles(defaultFiles);
      setActiveFile(files[0]);
    }
  }, []);

  //   store files in local storage

  React.useEffect(() => {
    console.log(files);
    if (files && files.length > 0) {
      console.log("setting files in local storage");
      localStorage.setItem("files", JSON.stringify(files));
    } else {
      console.log("no files to set in local storage");
    }
  }, [files !== defaultFiles]);

  const handleChangeCode = (value: string) => {
    // edit code in file
    setFiles([...files, { ...activeFile, code: value }]);
  };

  const handleAddFile = () => {
    // check if file exists
    // if yes, alert user and create file but add a number to the end of the file name
    // if no, add file

    const fileName = "newFile.json";

    if (fileName in files) {
      alert("File already exists");
      setFiles([
        ...files,
        {
          fileName: fileName + "1",
          language: fileName.split(".")[1],
          code: "",
        },
      ]);
    } else {
      setFiles([
        ...files,
        { fileName: fileName, language: fileName.split(".")[1], code: "" },
      ]);
    }
  };

  return (
    <codeContext.Provider
      value={{
        files,
        setFiles,
        setActiveFile,
        activeFile,
      }}
    >
      {props.children}
    </codeContext.Provider>
  );
};

export const useCode = () => React.useContext(codeContext);
