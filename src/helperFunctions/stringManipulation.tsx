function capitalizeToLowercase(str: string): string | undefined {
  if (!str) {
    return undefined;
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
export { capitalizeToLowercase };
