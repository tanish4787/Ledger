
import app from "./app.js";
import ConnectDB from "./configs/db.js";

const PORT = process.env.PORT || 3000;

try {
    ConnectDB();
  app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT} 🚀`);
  });
} catch (error) {
  console.error("Error Starting Server ");
  process.exit(1);
}
