

const usersPage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Users Page</title>
</head>
<body>
  <h1>Users Page</h1>
  <ul>
    <li>User 1</li>
    <li>User 2</li>
    <li>User 3</li>
    <li>User 4</li>
  </ul>
</body>
</html>`;

const homePage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Create User</title>
</head>
<body>
<h1>Welcome to my Node js Server Page</h1>
  <form action="/create-user" method="POST">
    Enter Username: <input type="text" name="username">

    <button type="submit">Create User</button>
  </form>
</body>
</html>`

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if(url === '/') {
    res.setHeader('Content-Type', "text/html");
    res.write(homePage);
    res.end()
  }

  if(url === '/users') {
    res.setHeader('Content-Type', "text/html");
    res.write(usersPage);
    res.end()
  }

  if(url === '/create-user' && method === "POST") {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    })

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split('=')[1];
      console.log(username);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      res.end();
    });
  }
}


module.exports = requestHandler;