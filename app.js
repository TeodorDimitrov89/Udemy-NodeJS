const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if(url === '/') {
    // return html with input field and a button ...

    const form = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <form action="/message" method="POST">
        <input type="text" name="message">
        <button type="submit">Send</button>
      </form>
    </body>
    </html>`

    res.setHeader('Content-Type', 'text/html');
    res.write(form);

    return res.end();
    
   
  }

  else if(url === '/message' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      console.log(chunk)
      body.push(chunk);
    })

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync("message.txt", message)
      console.log(parsedBody, "parsedBody")
    })

   
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
   
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<!DOCTYPE html><html lang="en"><head><title>My First Node js Page from Server!</title></head><body><h1>Hello Node</h1></body></html>');
  res.end();
 
});


server.listen(5000)

console.log('Server is running on port 5000')