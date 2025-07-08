const express = require('express')
const app = express()
const port = 8080

async function connect(){
  if (global.connection && global.connection.state != 'disconnected')
    return global.connection
  
  const mysql = require('mysql2/promise');
  const connection = await mysql.createConnection('mysql://user:people_user@db:3306/peopledb');
  global.connection = connection;
  return connection;
}

app.get('/', async (req, res) => {
  const conn = await connect();
  let sql = "insert into people(name) values('name')";
  await conn.query(sql);
  const [rows] = await conn.query("select * from people");
  let html = '<h1>Full Cycle Rocks</h1>';
  html += "<table><tr><th>Id</th><th>Name</th></tr>";
  rows.forEach(row => {
    html += "<tr><td>" + row.id + "</td><td>" + row.name + "</tr></td>";
  })
  html += "</table>";
  res.send(html)
})

app.listen(port, '0.0.0.0', () => {
  console.log('Rodando na porta ' + port)
})
