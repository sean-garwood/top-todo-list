import checkIfLocalStorageAvailable from './check';
export default function storeTodoLists(lists) {
  checkIfLocalStorageAvailable();
  function storeTodoList(list) {
    const serializedList = JSON.stringify(list);

    try { localStorage.setItem(list.title, serializedList); }
    catch (e) { console.error('Error storing todo list in local storage', e); }
  }

  lists.forEach(storeTodoList);
}
