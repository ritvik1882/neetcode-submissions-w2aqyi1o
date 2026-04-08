class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const map = new Map(); // sorted string -> anagram array

        for (const str of strs){
            const key = str.split('').sort().join('');
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
