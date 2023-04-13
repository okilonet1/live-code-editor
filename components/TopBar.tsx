const TopBar = () => {
  /*
    1. download code
    2. upload code
    3, run code
    4. select compiler
    5. select theme
    */

  const handleDownload = () => {
    console.log("download");
  };

  const handleOpen = () => {
    console.log("open");
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "5px",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div>
        <button>Run</button>
      </div>
      <div>
        <button onClick={handleDownload}>Download</button>
        <button>Open</button>
      </div>
    </div>
  );
};

export default TopBar;
