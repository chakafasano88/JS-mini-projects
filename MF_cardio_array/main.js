const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    // "Filter" filters through the array and finds the specified request
    const fifteen = inventors.filter(function(inventor){
      if(inventor.year >= 1500 && inventor.year < 1600)
      return true;
    })

    console.table(fifteen)

    // Array.prototype.map()
  // 2. Give us an array of the inventor first and last names
  // Map returns the same amount of items as you give it
  const firstLast = inventors.map(function(inventor){
      return inventor.first + " " + inventor.last
  })

console.log(firstLast)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// "Sort" works with two items sorting them using '1' and '-1'
const ordered = inventors.sort(function(a,b){
  if(a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});

 console.table(ordered);

 // Array.prototype.reduce()
  // 4. How many years did all the inventors live?

   const totalYears = inventors.reduce((total, inventor) => {
     return total + (inventor.passed - inventor.year);
   }, 0);

   console.log(totalYears)

   // 5. Sort the inventors by years lived
   // Sorts  
   const lived = inventors.sort(function(a,b){
     const firstPerson = a.year - a.passed
     const secondPerson = b.year - b.passed
     return firstPerson > secondPerson ? -1 : 1;
  });

console.table(lived);
