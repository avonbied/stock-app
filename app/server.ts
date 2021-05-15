import { opine } from '../deps.ts';
import { preactHydrate } from '../deps.ts';


const app = opine();
app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

app.listen(8080, () => console.log("server has started on http://localhost:8080 🚀"))

// const server = serve({ port: 8080 });

// for await (const request of server) {
//   let bodyContent = "Your user-agent is:\n\n";
//   bodyContent += request.headers.get("user-agent") || "Unknown";

//   request.respond({ status: 200, body: bodyContent });
// }