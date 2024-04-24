import find from "list-files";

find(
  function (result) {
    console.log(result);
  },
  {
    dir: "markdownFiles",
    name: "md",
  }
);

export default find;
