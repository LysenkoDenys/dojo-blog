import React from "react";

const Create = () => {
  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form>
        <label>Blog title:</label>
        <input type="text" required />
        <label>Blog body:</label>
        <textarea required placeholder="input some text here.."></textarea>
        <label>Blog author:</label>
        <select>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add blog</button>
      </form>
    </div>
  );
};

export default Create;
