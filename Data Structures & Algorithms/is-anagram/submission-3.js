class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length){
            return false;
        }

        const [sHash, tHash] = [{}, {}];

        for (const char of s){
            if (sHash[char] === undefined){
                sHash[char] = 1;
            } else {
                sHash[char] += 1;
            }
        }

        for (const char of t){
            if (tHash[char] === undefined){
                tHash[char] = 1;
            } else {
                tHash[char] += 1;
            }
        }

        for (const char of s){
            if (tHash[char] !== sHash[char]){
                return false
            }
        }
        return true;
        

    }
}
