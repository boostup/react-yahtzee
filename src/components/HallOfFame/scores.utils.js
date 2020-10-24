import { useLocalStorageState } from "@boostup/react-custom-hooks-collection";

const LOCAL_STORAGE_KEY = "yahtzee!::scores";

export function getScores() {
  const [currentDate, setCurrentDate] = useLocalStorageState(
    LOCAL_STORAGE_KEY,
    [{ pseudo: "dummy", date: new Date(), score: 144 }]
  );

  return {};
}

export function saveScore(score) {
  localStorage;
}
