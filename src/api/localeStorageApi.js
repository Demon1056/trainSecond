export const getContactsFromLocaleStorage = () =>
  JSON.parse(localStorage.getItem('contacts')) ?? [];

