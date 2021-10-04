export function sortByGeneral(todos,key,by) {
    console.log(todos)
    return by==='desc'? todos.sort((a, b) => a[key] > b[key] ? -1 : 1):  todos.sort((a, b) => a[key] < b[key] ? -1 : 1);
}