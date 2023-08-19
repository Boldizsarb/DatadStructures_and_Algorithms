import express from "express";
import chalk from 'chalk';
import 'dotenv/config';  

const app = express();
const port = process.env.PORT ;

app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});


app.listen(port, () => {
    console.log(
      `Example app listening at http://localhost:${port}`,
      chalk.green("✓")
    );
});
