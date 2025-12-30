const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>DevOps Mega Combo</title>
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #0f2027;
          background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
          font-family: Arial, sans-serif;
        }

        .glow-text {
          font-size: 40px;
          color: #00eaff;
          text-align: center;
          text-shadow:
            0 0 5px #00eaff,
            0 0 10px #00eaff,
            0 0 20px #00eaff,
            0 0 40px #00ffea,
            0 0 80px #00ffea;
          animation: glow 1.5s infinite alternate;
        }

        @keyframes glow {
          from {
            text-shadow:
              0 0 5px #00eaff,
              0 0 10px #00eaff,
              0 0 20px #00eaff;
          }
          to {
            text-shadow:
              0 0 20px #00ffea,
              0 0 40px #00ffea,
              0 0 80px #00ffea;
          }
        }
      </style>
    </head>
    <body>
      <div class="glow-text">
        Hello from DevOps Mega Combo Project 🚀
      </div>
    </body>
    </html>
  `);
}).listen(3000);

console.log("Server running on port 3000");
