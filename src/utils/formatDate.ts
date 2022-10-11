function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-br').format(date);
}

export default formatDate;
