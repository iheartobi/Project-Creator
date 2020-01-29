const initState = {
  projects: [
    { id: 1, title: "Help", content: "I need help with this project" },
    { id: 2, title: "Go Falcons", content: "Help the team win" },
    {
      id: 3,
      title: "Making my Way Home",
      content: "I need with a job to get home."
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("Project not created", action.err);
      return state;
    default:
      return state;
  }
};
export default projectReducer;
