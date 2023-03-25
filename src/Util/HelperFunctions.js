export const getSQLDateTime = () => {
    const date = new Date();
    var datetime = date.getFullYear()+'-'
    + date.getMonth()+'-'
    + date.getDate()+ ' '
    + date.getHours()+':'
    +date.getMinutes()+':'
    +date.getSeconds()
    return datetime
}

