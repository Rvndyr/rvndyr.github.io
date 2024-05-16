import find from "list-files";

find(
  function (result) {
    console.log("This is a result: ", result);
  },
  {
    dir: "markdownFiles",
    name: "md",
  }
);

export default find;
