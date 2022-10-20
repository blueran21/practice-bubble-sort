
function bubbleSort(arr) {

  while (true) {
    // Iterate through the array
    let swap = 0;
    for (let i = 0; i < arr.length - 1; i += 1) {
      // If the current value is greater than its neighbor to the right
        // Swap those values
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swap += 1;

        // Do not move this console.log
        console.log(arr.join(","));
      }
    }
    // If you get to the end of the array and no swaps have occurred, return
    if (swap === 0) {
      return
    }
    // Otherwise, repeat from the beginning
  }

}

module.exports = bubbleSort;
