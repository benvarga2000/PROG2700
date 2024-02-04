function exploreConsecutiveMagic(array) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(array)) {
        reject("Input must be an array");
        return;
      }
  
      let currentStreak = 1;
      let longestStreak = 1;
      let currentSum = array[0];
      let longestSum = array[0];
  
      for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1] + 1) {
          currentStreak++;
          currentSum += array[i];
        } else {
          currentStreak = 1;
          currentSum = array[i];
        }
  
        if (currentStreak > longestStreak) {
          longestStreak = currentStreak;
          longestSum = currentSum;
        }
      }
  
      resolve(longestSum);
    });
  }
  
  // Example usage with the provided arrays:
  const path1 = [1, 2, 3, 6, 9, 34, 2, 6];
  const path2 = [3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3];
  const path3 = [100, 101, 102, 3, 4, 5, 6, 9];
  
  exploreConsecutiveMagic(path1)
    .then(result => console.log(`Path 1: ${result}`)) // Output: Path 1: 6
    .catch(error => console.error(error));
  
  exploreConsecutiveMagic(path2)
    .then(result => console.log(`Path 2: ${result}`)) // Output: Path 2: 27
    .catch(error => console.error(error));
  
  exploreConsecutiveMagic(path3)
    .then(result => console.log(`Path 3: ${result}`)) // Output: Path 3: 18
    .catch(error => console.error(error));
  