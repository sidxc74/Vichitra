export  const  getTimeDifference = (created_at) =>  {
    const millisecondsPerMinute = 60 * 1000;
    const millisecondsPerHour = millisecondsPerMinute * 60;
    const millisecondsPerDay = millisecondsPerHour * 24;
    const millisecondsPerWeek = millisecondsPerDay * 7;
    const millisecondsPerYear = millisecondsPerDay * 365;

    const currentTime = Date.now();
    const videoTime = Date.parse(created_at);
    
    

    const timeDifference = currentTime - videoTime;

    if (timeDifference < millisecondsPerMinute) {
        const seconds = Math.round(timeDifference / 1000);
        return 'just now'
    } else if (timeDifference < millisecondsPerHour) {
        const minutes = Math.round(timeDifference / millisecondsPerMinute);
        return minutes === 1 ? `${minutes} minute ago` : `${minutes} minutes ago`;
    } else if (timeDifference < millisecondsPerDay) {
        const hours = Math.round(timeDifference / millisecondsPerHour);
        return hours === 1 ? `${hours} hour ago` : `${hours} hours ago`;
    } else if (timeDifference < millisecondsPerWeek) {
        const days = Math.round(timeDifference / millisecondsPerDay);
        return days === 1 ? `${days} day ago` : `${days} days ago`;
    } else if (timeDifference < millisecondsPerYear) {
        const weeks = Math.round(timeDifference / millisecondsPerWeek);
        return weeks === 1 ? `${weeks} week ago` : `${weeks} weeks ago`;
    } else {
        const years = Math.round(timeDifference / millisecondsPerYear);
        return years === 1 ? `${years} year ago` : `${years} years ago`;
    }
}