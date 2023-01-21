import React from "react";

const AddWord = () => {
  const [words, setWords] = React.useState("");

  return (
    <div className="add-word">
      <div className="add-word-header">
        <input placeholder="Sozdi kiritin" type="text" className="word-field" />
        <input type="file" className="file" />
      </div>
      <select className="category-select">
        <option value="0">Atliq</option>
        <option value="0">Atliq</option>
        <option value="0">Atliq</option>
        <option value="0">Atliq</option>
        <option value="0">Atliq</option>
        <option value="0">Atliq</option>
      </select>
      <h3>Túsindirmesi</h3>
      <textarea
        onChange={(e) => setWords(e.target.value)}
        name=""
        id=""
        cols="30"
        rows="10"
        maxLength={500}
      ></textarea>
      <p style={{ textAlign: "right" }}>{words.length}/500</p>
      <button className="btn submit-btn">Kiritiw</button>
    </div>
  );
};

export default AddWord;
