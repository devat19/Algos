// Selection sort: Find the smallest value , by iterating through and put it
// in initial index.

// First for loop iterates over whole array for swapping; second one iterates to find the min and prepare it for swapping.

// Todo: export this method. Import define functions properly [comment].
// Use readline method to make it comp like
// Set up linter

const randomArray = (length, max) =>
  Array(length)
    .fill()
    .map(() => Math.round(Math.random() * max));

    const swap = (arr, idx1, idx2) => {
      return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    };

let selectionSort = () => {
  let arr = randomArray(50, 1000);

  console.log(arr); // Todo : Learn to use debugger.

  for (let i = 0; i < arr.length; i++) {
 
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      arr[j] < arr[lowest] ? (lowest = j) : null;
    }
    if (lowest !== i) swap(arr, i, lowest);
  }
  console.log(arr, "L30>>soln");
};

selectionSort();
