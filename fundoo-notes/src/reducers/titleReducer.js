const initialState = {
  title: "Keep",
};

const titleReducer = (state = initialState, action) => {
console.log(action.type);
  switch (action.type) {
    case "Notes":
      return {
        title: "Notes",
      };
    case "Reminders":
      return {
        title: "Reminders",
      };
    case "Edit labels":
      return {
        title: "Edit labels",
      };
    case "Archives":
      return {
        title: "Archives",
      };
    case "Trash":
      return {
        title: "Trash",
      };
    default:
      return state;
  }
}
export default titleReducer;