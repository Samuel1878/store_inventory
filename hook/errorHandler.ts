export default function errorHandler(error: any) {
  const message =
    error?.response?.data?.message ||
    JSON.stringify(error?.response?.data) ||
    JSON.stringify(error);
  return message;
}
