function reverseString(s: string): string {
  return Array.from(s).reverse().join('');
}

// should output tpircSavaJ
console.log(reverseString('JavaScript'));

// should output owT
console.log(reverseString('Two'));

// should output Two
console.log(reverseString(reverseString('Two')));
