import { format } from 'date-fns';

function formatDate(date: Date | string): string {
  var dateFormatted = new Date(date);
  return format(dateFormatted, 'MM/dd/yyyy');
}

export default formatDate;
