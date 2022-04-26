//Assumes that there should always only be one primary name provided from the API - avoids UI displaying multiple names
//TBD - Handle the situation where no primary name is returned from the API
export function getPrimaryName(names) {
    let name = '';
    names.find(charityName => {
        if (charityName.primary) { name = charityName.value }
    });
    return name;
}