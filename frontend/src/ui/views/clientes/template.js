// jsPDF generating blank PDF file.
// This template will be used when
// jsPDF works correctly.

export default function Template({ cliente }) {
  return (
    <html>
      <body> 
        <h1>Nome: {cliente.nome}</h1>
        <h2>Razao: {cliente.razao_social}</h2>
      </body>
    </html>
  )
}
