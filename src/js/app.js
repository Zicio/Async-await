import GameSavingLoader from './saving';
import GameSaving from './object';

export default (async () => {
  try {
    const obj = await GameSavingLoader.load();
    return new GameSaving(obj);
  } catch (e) {
    return e.name;
  }
})();
