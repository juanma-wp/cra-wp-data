const {REACT_APP_RESOURCE_ADDRESS} = process.env

export const getResourcePath = id => {
  const root = `${REACT_APP_RESOURCE_ADDRESS}/products/`;
  return id ? `${root}/${id}` : root;
};

const getCurrentTimeFormatted = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const milliseconds = currentTime.getMilliseconds();
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

export const logActions = ( state, action ) => {

  const { type, ...payload } = action

  console.group(`%cAction: %c${type} %cat ${getCurrentTimeFormatted()}`, "background: black; color: lightgreen; font-weight: bold;", "background: black; color: white; font-weight: bold;", "background: black; color: lightblue; font-weight: lighter;");
  console.log("%cPrevious State:", "color: #9E9E9E; font-weight: 700;", state);
  console.log("%cAction Type:", "color: #00A7F7; font-weight: 700;", type);
  console.log("%cAction Payload:", "color: #00A7F7; font-weight: 700;", payload);
  console.groupEnd();

};
