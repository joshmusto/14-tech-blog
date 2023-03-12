module.exports = {
    format_date: (date) => {
        //format date as MM/DD/YYYY
        //can input [new Date()]
        return date.toLocaleDateString();
    }
}