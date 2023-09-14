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

app.get("/problemSolving", (req, res) => {
  res.render("problemSolving", { title: "part4" });
});

app.get("/patterns", (req, res) => {
  res.render("patterns", { title: "part5" });
});

app.get("/recursion", (req, res) => {
  res.render("recursion", { title: "part5" });
});

app.get("/search", (req, res) => {
  res.render("search", { title: "part10" });
});

app.get("/sorting", (req, res) => {
  res.render("sorting", { title: "part11" });
});

app.get("/dataS", (req, res) => {
  res.render("dataS", { title: "part11" });
});

app.get("/doubly_linked_list", (req, res) => {
  res.render("doubley", { title: "part11" });
});

app.get("/stacks", (req, res) => {
  res.render("stacks", { title: "part11" });
});

app.get("/binary_tree", (req, res) => {
  res.render("binary_tree", { title: "part11" });
});

app.get("/heaps", (req, res) => {
  res.render("heaps", { title: "part11" });
});

app.get("/hash_tables", (req, res) => {
  res.render("hash_tables", { title: "part11" });
});

app.listen(port, () => {
    console.log(
      `Example app listening at http://localhost:${port}`,
      chalk.green("✓")
    );
});
