module.exports = function check(str, bracketsConfig) {
   let arrOpenBrackets = [];

   let arrCloseBrackets = [];

   let stack = [];

   bracketsConfig.forEach(it => it.forEach((it, ind) => { if (ind == 0) { arrOpenBrackets.push(it) } }))
   bracketsConfig.forEach(it => it.forEach((it, ind) => { if (ind == 1) { arrCloseBrackets.push(it) } }))

   for (let i = 0; i < str.length; i++) {
      let currSymb = str[i]
      let topEl = stack[stack.length - 1];

      if (topEl === currSymb && arrCloseBrackets.includes(currSymb)) {
         stack.pop();
      } else {

         if (arrOpenBrackets.includes(currSymb)) {
            stack.push(currSymb);
         }

         else if (arrCloseBrackets.includes(currSymb) && stack.length === 0) {
            return false;
         }

         else {
            if (arrCloseBrackets.includes(currSymb)) {
               stack.pop();
            }

         }
      }
      // console.log(stack);
   }
   return stack.length === 0;
}
