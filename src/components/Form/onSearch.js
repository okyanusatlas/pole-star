import screenings from "../../screenings";

const onSearch = (name, severity, sortBy) => {
    console.log("event", name, severity);
    return screenings.results.filter(result => {
        return result.name.includes(name) && result.company_check_severity.includes(severity)
    }).sort((a, b) => a[sortBy] <  b[sortBy] ? -1 : 1);

};
export {onSearch}