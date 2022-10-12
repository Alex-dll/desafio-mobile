function formatPhone(phoneNumber: string | number): string {
  return phoneNumber
    .toString()
    .replace(/(\d{2})(\d{2})(\d{1})(\d{4})(\d{4})/, '+$1 ($2) $3$4-$5');
}

export default formatPhone;
