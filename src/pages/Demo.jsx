// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

  // Function to change the background color of an item in the list based on the index and new color.
  const changeColor = (index, color) => {
    // Map through the 'demo' array in the global store and update the background color of the specific item.
    const demo = store.demo.map((elm, i) => {
      if (i === index) elm.background = color;  // Change color if the current index matches.
      return elm;
    });
    return demo  // Return the updated array.
  }

  return (
    <div className="container">
      <ul className="list-group">
        {/* Map over the 'demo' array from the store and render each item as a list element */}
        {store && store.demo?.map((item, index) => {
          return (
            <li
              key={index}  // React key for list items.
              className="list-group-item d-flex justify-content-between"
              style={{ background: item.background }}> 
              <Link to={"/single/" + index}>
                <span>Link to: {item.title}</span> {/* Link to the detail page of this item. */}
              </Link>
              {/* Conditional rendering to show a message if the background is orange */}
              {item.background === "orange" ? (
                <p style={{ color: item.initial }}>
                  Open file ./store.js to see the global store that contains and updates the list of colors
                </p>
              ) : null}
              {/* We use the dispatch function to send the new color to the global store reducer */}
              <button className="btn btn-success" onClick={() => dispatch({type: "change_color", nextDemo: changeColor(index, "orange")})}>
                Change Color
              </button>
            </li>
          );
        })}
      </ul>
      <br />

      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
