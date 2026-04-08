class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const map = new Map(); // freq arr -> anagram arr

        for (const str of strs){

            // Get freq array
            let count = new Array(26).fill(0);
            for (let i = 0; i < str.length; i++){
                count[str.charCodeAt(i) - 97] += 1;
            }
            const key = count.join(' ') + ',';

            // enter into hashmap
            const sublist = map.get(key);
            if (sublist === undefined){
                map.set(key, [str]);
            } else {
                sublist.push(str);
            }
        }

        const result = [];
        for (const val of map.values()){
            result.push(val);
        }
        return result;

    }
}
