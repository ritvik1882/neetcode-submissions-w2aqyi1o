class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}; // num -> freq
        for (const num of nums){
            if (count[num] === undefined){
                count[num] = 1;
            } else {
                count[num] += 1;
            }
        }

        const sortedByFreq = Object.entries(count)
        .sort((a, b) => b[1] - a[1])
        .map((arr) => arr[0])
        
        return sortedByFreq.slice(0, k);
    }
}
