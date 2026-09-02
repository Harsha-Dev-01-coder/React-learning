type User = {
  id: number;
  name: string;
};

type ApiState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: User[] }
  | { status: "error"; message: string };


function handleApiState(state: ApiState) {
    switch (state.status) {
        case "idle":
            console.log("Nothing Started to yet");
            break;

        case "loading":
            console.log("Loading...");
            break;

        case "success":
            console.log("Users:", state.data);
            break;

        case "error":
            console.log("Error:", state.message);
            break;
    }
}

handleApiState({ status: "idle" });

handleApiState({ status: "loading" });

handleApiState({
  status: "success",
  data: [
    { id: 1, name: "Champ" },
    { id: 2, name: "Alex" }
  ]
});

handleApiState({
  status: "error",
  message: "Failed to fetch users"
});