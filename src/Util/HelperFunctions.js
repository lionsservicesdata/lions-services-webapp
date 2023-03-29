export const getSQLDateTime = () => {
    const date = new Date();
    var datetime = date.getFullYear()+'-'
    + String(Number(date.getMonth())+Number(1))+'-'
    + date.getDate()+ ' '
    + String(Number(date.getHours())-Number(4))+':'
    +date.getMinutes()+':'
    +date.getSeconds()
    return datetime
}

