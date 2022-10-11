function formatDate(date: Date | string): string {
  var dateFormatted = new Date(date);
  return new Intl.DateTimeFormat('pt-br').format(dateFormatted);
}

export default formatDate;
