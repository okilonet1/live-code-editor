"use client";

import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { useCode } from "@/context/codeContext";

const CodeEditor = () => {
  const { files, setFiles, activeFile, setActiveFile } = useCode();

  const handleAddFile = () => {
    // check if file exists
    // if yes, alert user
    // if no, add file
    // const fileName = "newFile.json";
    // if (fileName in files) {
    //   alert("File already exists");
    // } else {
    //   setFiles([...files, fileName]);
    // }
  };

  const handleCloseFile = (file: string) => {
    console.log(file);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "0.5rem",
          backgroundColor: "#1e1e1e",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "#fff",
            overflowX: "auto",
            // width: "100%",
          }}
        >
          {files.map((file) => {
            return (
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#fff",
                  padding: "0.2rem",
                  cursor: "pointer",
                  outline: "none",
                  borderRadius: "0.25rem",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  display: "flex",
                  flexDirection: "row",
                  marginRight: "0.5rem",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                  maxWidth: "20rem",

                  transition: "all 0.2s ease-in-out",
                  ...(activeFile.fileName === file.fileName && {
                    backgroundColor: "#007acc",
                    color: "#fff",
                  }),
                }}
                disabled={activeFile.fileName === file.fileName}
                key={file.fileName}
                onClick={() => setActiveFile(file)}
              >
                <strong
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {file.fileName}
                </strong>
                <div
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    border: "none",
                    color: "#fff",
                    padding: "0.2rem",
                    cursor: "pointer",
                    outline: "none",
                    borderRadius: "0.25rem",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    transition: "all 0.2s ease-in-out",
                  }}
                  onClick={() => handleCloseFile(file)}
                >
                  x
                </div>
              </button>
            );
          })}
        </div>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "#fff",
            padding: "0.5rem",
            cursor: "pointer",
            outline: "none",
            marginRight: "0.5rem",
            borderRadius: "0.25rem",
            fontWeight: "bold",
            fontSize: "1rem",
            transition: "all 0.2s ease-in-out",
          }}
          onClick={handleAddFile}
        >
          +
        </button>
      </div>
      <Editor
        height="80vh"
        theme="vs-dark"
        path={activeFile?.name}
        defaultLanguage={activeFile?.language}
        defaultValue={activeFile?.code}
      />
    </>
  );
};

const AddFileModal = () => {
  // const [fileName, setFileName] = useState<string>("");
  // const [fileType, setFileType] = useState<string>("js");

  return <div></div>;
};

const TabButton = ({}) => {
  return <div>TabButton</div>;
};

export default CodeEditor;
