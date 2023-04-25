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

export function ExcelDateToJSDate(date) {
    return new Date(Math.round((date - 25569)*86400*1000));
  }