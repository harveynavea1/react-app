import React from "react";
import { saveAs } from "file-saver";

function PDFDownloadButton() {
  const handleDownload = () => {
    // Specify the path to your PDF file within the public folder
    const pdfFilePath = "../files/NAVEA,JOHN HARVEY.pdf";

    // Trigger the download
    saveAs(pdfFilePath, "NaveaResume.pdf");
  };
  return (
    <div>
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );

}

export default PDFDownloadButton;
