const RESOURCE_ADDRESS = import.meta.env.VITE_RESOURCE_ADDRESS;

if (!RESOURCE_ADDRESS) {
  console.error(
    "Resource address not found in environment variables. Check your .env file and make sure VITE_RESOURCE_ADDRESS is set."
  );
  console.log("Available environment variables:", import.meta.env);
}

export const getResourcePath = (action = "get") => {
  const baseUrl = import.meta.env.VITE_RESOURCE_ADDRESS;
  if (!baseUrl) {
    console.error("VITE_RESOURCE_ADDRESS is not set");
    return "";
  }

  // Add specific endpoints based on action
  switch (action) {
    case "add":
      return `${baseUrl}/add`;
    case "get":
    default:
      return baseUrl;
  }
};

const getCurrentTimeFormatted = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const milliseconds = currentTime.getMilliseconds();
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
};

export const logActions = (state, action) => {
  const { type, ...payload } = action;

  console.group(
    `%cAction: %c${type} %cat ${getCurrentTimeFormatted()}`,
    "background: black; color: lightgreen; font-weight: bold;",
    "background: black; color: white; font-weight: bold;",
    "background: black; color: lightblue; font-weight: lighter;"
  );
  console.log("%cPrevious State:", "color: #9E9E9E; font-weight: 700;", state);
  console.log("%cAction Type:", "color: #00A7F7; font-weight: 700;", type);
  console.log(
    "%cAction Payload:",
    "color: #00A7F7; font-weight: 700;",
    payload
  );
  console.groupEnd();
};
