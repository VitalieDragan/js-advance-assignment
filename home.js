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

    //console.log(matches);
    outputHtml(matches);
};
//results in HTML
const outputHtml = matches => {
    if(matches.length > 0) {
        const html = matches.map(match => `
        <div class="card card-body mb-1">
            <h4>${match.name} (${match.abbr})
            <span class="text-primary">${match.capital}</span>
            </h4>
            <small>Lat: ${match.lat} / Long: ${match.long}</small>
        </div>
        `);
    }
}

 //search.addEventListener('input', searchStates(search.value))
search.addEventListener('input', () => searchStates(search.value));