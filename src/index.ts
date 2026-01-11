import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok", service: "paper" });
});

// Random number endpoint
app.get("/api/random", (req: Request, res: Response) => {
  const startTime = Date.now();
  console.log(`[${new Date().toISOString()}] Received request to /api/random`);

  // Generate random number between 1 and 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const duration = Date.now() - startTime;

  console.log(
    `[${new Date().toISOString()}] Generated random number: ${randomNumber}, Duration: ${duration}ms`
  );

  res.json({
    number: randomNumber,
    service: "paper",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`[${new Date().toISOString()}] Paper service listening on port ${PORT}`);
});
