const search = document.getElementById("search");
const machList = document.getElementById("mach-list");



//Search states and filter it
const searchStates = async searchText => {
    const res = await fetch('../data/data.json');
    const states = await res.json();

    // console.log(states)

    //matches to curent text input
    let matches = states.filter(state => {
        const regex = new RegExp(`${searchText}`, 'gi')
        return state.name.match(regex) || state.abbr.match(regex);
    });

    console.log(matches);
};

 //search.addEventListener('input', searchStates(search.value))
search.addEventListener('input', () => searchStates(search.value));