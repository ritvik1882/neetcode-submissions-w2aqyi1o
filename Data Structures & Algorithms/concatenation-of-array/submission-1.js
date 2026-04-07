class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const n = nums.length;
        const arr = new Array(n * 2);

        for (let i = 0; i < n; i++){
            arr[i] = nums[i];
            arr[n + i] = nums[i];
        }

        return arr;
    }
}
