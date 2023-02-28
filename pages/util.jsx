import { pdfjs, Document, Page } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

export function PDF() {

  return (
    <Document file="/StringManipulation.pdf" onLoadSuccess={(e) => console.log(e)}>
      <Page pageNumber={1}/>
    </Document>
  )
}
