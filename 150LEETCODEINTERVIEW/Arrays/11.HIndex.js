/**
 *  274. H-Index
 * 
 *  Input: citations = [3,0,6,1,5]
    Output: 3
    Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
    Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
 */


function hIndexOp(citations) {
        var map = {};
        var h = citations.length;
        var i = 0;
        var max = 0;
        citations.map(c => map[c] = map[c] ? map[c] + 1 : 1);
        for (; i <= h; i++) {
          max = Math.max(max, h >= i ? i : 0);
          h -= map[i] ? map[i] : 0;
        }
        return max;
}