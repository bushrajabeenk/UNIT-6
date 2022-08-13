//reading a file through stream
const stream = createReadStream("test.txt");

stream.on("data", (data) => {
  console.log(data.toString("utf-8"));
});

stream.on("end", () => {
  console.log("finished file reading");
});
