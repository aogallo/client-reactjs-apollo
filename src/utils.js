function timeDifference(current, previous) {
  const milliSecondsPerMinute = 60 * 1000;
  const miliSecondsPerHour = milliSecondsPerMinute * 60;
  const miliSecondsPerDay = miliSecondsPerHour * 24;
  const miliSecondsPerMonth = miliSecondsPerDay * 30;
  const miliSecondsPerYear = miliSecondsPerMonth * 365;

  const elapsed = current - previous;

  if (elapsed < milliSecondsPerMinute / 3) return 'just now';

  if (elapsed < milliSecondsPerMinute) {
    return 'less than 1 min ago';
  } else if (elapsed < miliSecondsPerHour) {
    return Math.round(elapsed / milliSecondsPerMinute) + ' min ago';
  } else if (elapsed < miliSecondsPerDay) {
    return Math.round(elapsed / miliSecondsPerHour) + ' h ago';
  } else if (elapsed < miliSecondsPerMonth) {
    return Math.round(elapsed / miliSecondsPerDay) + ' days ago';
  } else if (elapsed / miliSecondsPerYear) {
    return Math.round(elapsed / miliSecondsPerMonth) + ' mo ago';
  } else {
    return Math.round(elapsed / miliSecondsPerYear) + ' years ago';
  }
}

export function timeDifferenceForDate(date) {
  const now = new Date().getTime();
  const updated = new Date(date).getTime();
  return timeDifference(now, updated);
}
