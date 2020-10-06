export default function FormValidator(form) {
  let response = { name: true, email: true, message: true };
  if (form.name === null || form.name.length <= 2) {
    response.name = false;
  }
  if (
    form.email === null ||
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      form.email
    )
  ) {
    response.email = false;
  }
  if (form.message === null || form.message.length <= 3) {
    response.message = false;
  }
  return response;
}
