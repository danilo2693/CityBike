export const useStations = () => {
  const addStations = (stations) => {
    const stationsHistory = getStations();
    try {
      localStorage.setItem(
        "stationsHistory",
        JSON.stringify([...stationsHistory, { date: new Date(), stations }])
      );
    } catch (error) {
      console.error("Local storage is full");
      localStorage.setItem(
        "stationsHistory",
        JSON.stringify([{ date: new Date(), stations }])
      );
    }
  };

  const getStations = () => {
    return JSON.parse(
      localStorage.getItem("stationsHistory")
        ? localStorage.getItem("stationsHistory")
        : []
    );
  };

  const reset = () => {
    localStorage.setItem(
      "stationsHistory",
      JSON.stringify([])
    );
  };

  return {
    getStations,
    addStations,
    reset,
  };
};
