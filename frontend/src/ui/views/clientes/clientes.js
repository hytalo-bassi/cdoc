import { useEffect, useState } from "react"
import { renderToString } from "react-dom/server"
import { jsPDF } from "jspdf"
import Template from "./template"

export default function Clientes() {
  const pdf = new jsPDF()
  const [data, setData] = useState([])
  
  function onClick(cliente) {
    const html = renderToString(<Template cliente={cliente} />)
    
    pdf.html(html).then(() => pdf.output("dataurlnewwindow"))
  }
  
  useEffect(() => {
      fetch("http://localhost:3001/api/clientes")
        .then(res => res.json())
        .then(obj => setData(obj))
  }, [])
    
  const clientes = data.map(cliente => {
    return (<li onClick={() => onClick(cliente)}>{cliente.nome}</li>)
  })
  
  return (
    <ul>{clientes.length !== 0 ? clientes : "Carregando..."}</ul>
  )
}
