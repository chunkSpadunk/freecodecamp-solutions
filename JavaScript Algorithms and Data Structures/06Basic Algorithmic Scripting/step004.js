function findLongestWordLength(str) {
    let longestLength = 0;
    let currentLength = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            if (currentLength > longestLength) {
                longestLength = currentLength;
            }
            currentLength = 0;
        } else {
            currentLength++;
        }
    }
    if (currentLength > longestLength) {
        longestLength = currentLength;
    }
    return longestLength;
  }
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");


// finding the length of the longest word in the sentence above 
// to get the solution we will have to loop through the string first and see the max length and continously move the position after we compare the length of the adjacent strings and move if they are not the biggest