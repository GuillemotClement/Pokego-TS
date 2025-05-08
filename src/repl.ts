export function cleanInput(input: string): string[] {
  const trimString = input.trim();
  return trimString.split(" ");
}
