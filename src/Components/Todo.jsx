import React from "react";

function Todo() {
  const [inputvalue, setinputvalue] = React.useState("");
  const [todos, settodos] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);
  const [page, setpage] = React.useState(1);

  React.useEffect(() => {
    gettodos();
  }, [page]);
  function gettodos() {
    setisLoading(true);
    fetch(`http://localhost:3004/todos?_page=${page}&_limit=3`)
      .then((res) => res.json())
      .then((res) => {
        settodos(res);
      })
      .finally(() => setisLoading(false));
  }
  const handleAdd = () => {
    console.log(inputvalue);
    const payload = {
      title: inputvalue,
      status: false,
    };
    const payloadjson = JSON.stringify(payload);
    setisLoading(true);
    fetch("http://localhost:3004/todos", {
      method: "POST",
      body: payloadjson,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {})
      .finally(() => setisLoading(false));
    gettodos();
  };
  return isLoading ? (
    <div>...Loading</div>
  ) : (
    <div>
      <input
        type="text"
        value={inputvalue}
        onChange={(e) => setinputvalue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      {todos.map((el) => {
        return <div>{el.title}</div>;
      })}
      <button onClick={() => setpage(page - 1)}>Prev</button>
      <button onClick={() => setpage(page + 1)}>Next</button>
    </div>
  );
}

export default Todo;
