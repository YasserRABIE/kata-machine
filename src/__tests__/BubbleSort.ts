import bubble_sort from "@code/BubbleSort";

test("bubble-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42, 1, 8, 55, 12, 21];

    debugger;
    bubble_sort(arr);
    expect(arr).toEqual([1, 3, 4, 7, 8, 9, 12, 21, 42, 55, 69, 420]);
});
