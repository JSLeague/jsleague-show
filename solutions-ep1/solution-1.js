const answer = (firstArray, secondArray, needle) => {
  let pairs = []
  for (let i of firstArray) {
    for (let y of secondArray) {
      if (i + y === needle) {
	      pairs.push(`(${i}, ${y})`)
      }	
    }
  }
  return pairs;
}

answer([6, 5, 6], [3, 4, 6], 9)