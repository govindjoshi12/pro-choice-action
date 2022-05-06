const BASE_URL = "https://api.propublica.org/congress/v1/members/";
const POTC_URL = "https://congressforms.eff.org/";
const api_key = "VtnX28ugVhFGy6R3Bg00bR9zAHwsKUeuIy1DyPAb";

// Returns name, social media, bio ID
// https://projects.propublica.org/api-docs/congress-api/members/#get-current-members-by-statedistrict
// Test chamber: "senate", state: "tx"
async function getReps(chamber, state) {
    let url = `${BASE_URL}/${chamber}/${state}/current.json`;
    let data = null;
    await fetch(url, {
        method: "GET",
        headers: {
            'X-API-KEY': api_key,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.json();
    }).then((response) => {
        // Data contained in results
        data = response.results;
    });

    return data;
}

// Takes array of bio_id strings
// Returns JSON object with necessary fields
// Test ID: C000880
async function getForm(bio_ids) {
    let url = `${POTC_URL}/retrieve-form-elements`
    let data = null;

    await fetch(url, {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' 
        },
        body: JSON.stringify(bio_ids)
    }).then(response => {
        return response.json();
    }).then(response => {
        data = response.data;
    });

    return data;
}

export { getReps, getForm };