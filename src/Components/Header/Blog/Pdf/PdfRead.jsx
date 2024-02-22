import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";

const PdfRead = () => {

  const exportPDF = () => {
    let element = (
      <div style={{ display: "flex", flexWrap: "wrap" }}>In this blog site there is 4 question answers.If u collapse the content then you can see the answers of the questions.All this blogs questions are very important part of the react.</div>
    );
    const doc = new jsPDF("p", "pt", "letter");
    doc.html(ReactDOMServer.renderToString(element), {
      callback: function (doc) {
        doc.save('sample.pdf');
      }
    });
  };

  return (
    <div>
      <button onClick={exportPDF} className="btn btn-warning">Pdf Download</button>
    </div>
  );
}
export default PdfRead;