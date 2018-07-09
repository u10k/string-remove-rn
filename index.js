'use strict';
/**
 *@desc
 *@author wenzhe
 *@date 2018-07-09
 */
/**
 * 去除\r\n 或者 \r 或者 \n。
 * @param{data String}
 * @param{changeType String}
 * @return{String}
 */

module.exports = function (data,changeType = 'rn') {
    if (typeof data !== 'string') data += '';
    var reg;
    if (changeType == 'r') {
        reg = /(.*)([\r]+)(.*)/g;
    }else if(changeType == 'n'){
        reg = /(.*)([\n]+)(.*)/g;
    }else{
        reg = /(.*)([\r\n]+)(.*)/g;
    }
    return data.replace(reg, (match, $1, $2, $3) => {
        return $1+''+$3;
    })
};

