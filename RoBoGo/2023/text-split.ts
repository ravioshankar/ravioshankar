export function splitText(inputString: string): string[] {
    let result: string[] = [];
    const splitString = inputString.split(' ');

    splitString.reduce((accumulator: string, currentValue: string, idx: number) => {
      if (accumulator.length > 20) {
        result.push(accumulator.trim());
        accumulator = '';
      }

      if (idx === splitString.length - 1) {
        result.push(`${accumulator} ${currentValue}`.trim());
      }
      return `${accumulator} ${currentValue}`;
    }, '');
    return result;
  }
