// Insertion sort: Gradual build up of sorted part till sorting finishes .
// Detailed procedure: Start from second element of the array; compare with the first value, swap if needed.
// Same for next steps; start with say third , compare with second, if not properly placed, swap by iterating backwards! through sorted array
// Repeat untill the array is sorted.
// Speciality: Good if the data is dynamic



// Todo: export this method. Import define functions properly [comment].
// Use readline method to make it comp like
// Set up linter

const randomArray = (length, max) =>
  Array(length)
    .fill()
    .map(() => Math.round(Math.random() * max));

    // const swap = (array, idx1, idx2) => {
    //   return ([array[idx1], array[idx2]] = [array[idx2], array[idx1]]);
    // };
const insertionSort = ()=>{
    let array = randomArray(50, 1000);
    console.log(array, 'L23>>')
     for (let i=1;i<array.length; i++)
     { 
      
       let currentVal = array[i];   
        let j;
        for( j=i-1; j>=0 && currentVal<array[j]; j-- )
        {

                // if(currentVal<array[j])
                // {
                    array[j+1]=array[j];
                // }
                // else{
                //     continue;   // breaks out of current for loop
                // }
        }

         array[j+1]=currentVal;
     }
     console.log(array,'L42>> ')
    return array;
}
insertionSort();