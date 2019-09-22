export const formatAge = (dob) => {
    const timeDiff = Date.now() - Date.parse(dob)

    const year = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30 * 12));
    const month = Math.floor((timeDiff - year * 1000 * 60 * 60 * 24 * 30 * 12) / (1000 * 60 * 60 * 24 * 30))
    const days = Math.floor((timeDiff - year * 1000 * 60 * 60 * 24 * 30 * 12 - month * 1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24))

    let year_unit;
    let month_unit;
    let days_unit;

    let year_part;
    let month_part;
    let days_part;

    if (year > 1) {
        year_unit = 'years'
    } else {
        year_unit = 'year'
    }

    if (month > 1) {
        month_unit = 'months'
    } else {
        month_unit = 'month'
    }

    if (days > 1) {
        days_unit = 'days'
    } else {
        days_unit = 'day'
    }



    if (year > 0) {
        year_part = ` ${year} ${year_unit},`
    } else {
        year_part = ''
    } 

    if (month > 0) {
        month_part = ` ${month} ${month_unit},`
    } else {
        month_part = ''
    }

    if (days > 0) {
        days_part = ` ${days} ${days_unit}`
    } else {
        days_part = ''
    }

    return `${year_part}${month_part}${days_part}`

}