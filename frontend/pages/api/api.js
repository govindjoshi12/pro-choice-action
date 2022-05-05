const BASE_URL = "https://api.propublica.org/congress/v1/members/"
const POTC_URL = "https://congressforms.eff.org/"
api_key = "VtnX28ugVhFGy6R3Bg00bR9zAHwsKUeuIy1DyPAb"

// Returns name, social media, bio ID
// https://projects.propublica.org/api-docs/congress-api/members/#get-current-members-by-statedistrict
async function getReps(chamber, state) {
    url = `${BASE_URL}/${chamber}/${state}/current.json`;
    data = null;
    await fetch(url, { 
            method: "GET",
            headers: {
                'X-API-KEY': api_key,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.json();
        }).then(response => {
            data = response.data;
        });

    
    return data;
}

// Takes array of bio_id strings
// Returns JSON object with necessary fields
async function getForm(bio_ids) {
    url = `${POTC_URL}/retrieve-form-elements`
    data = null;

    await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bio_ids)
    }).then(response => {
        return response.json();
    }).then(response => {
        data = response.data;
    });

    return data;
}