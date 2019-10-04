module.exports = function zeros(expression) {
  // your solution
    function numOfZeros(num){
    let numRev=num.split('').reverse();
    let i=0;
  
    res=0;
    while (numRev[i]==='0' && i<numRev.length) {
      i++;
    }
    return i;
  }

  function factorial(num) {
    let res='1';
    for (let i=num; i>0; i--){
        res=multiply(res, i.toString());
    }
    return res;
  }
  
  function factorial2(num) {
    let res='1';
    for(let i=num; i>0; i-=2){
      res=multiply(res, i.toString());
    }
    return res;
  }
  
  function multiply(a, b){
    let arrA=a.split('').reverse();
    let arrB=b.split('').reverse();
    let aLength=arrA.length;
    let bLength=arrB.length;
    let newDigit=0;
    let arrForSum=[];
  
    for (let i=0; i<aLength || newDigit!==0; i++){
      let line=[];
      let numA=arrA.length>i? parseInt(arrA[i], 10): 0;
      for(let j=0; j<bLength || newDigit!==0; j++){        
        let numB=arrB.length>j? parseInt(arrB[j], 10): 0;
        let num=numA*numB+newDigit;
  
        if(num>=10){
          newDigit=Math.floor(num/10);
          num=num%10;
        } else {
          newDigit=0;
        }
        line.push(num);
      }  
      arrForSum[i]='0'.repeat(i)+line.join('');
    }
  
  // sum of strings
    let res=[];
    num=0;
    newDigit=0;
    strA='';
  
    for (let i=0; i<arrForSum.length; i++){
      let strB=arrForSum[i].split('');
  
      for(let j=0; j<strA.length || j<strB.length || newDigit!==0; j++ ){
        let numA=strA.length>j? parseInt(strA[j], 10): 0;
        let numB=strB.length>j? parseInt(strB[j], 10): 0;
        num=numA+numB+newDigit;
        if(num>=10){
          newDigit=Math.floor(num/10);
          num=num%10;
        } else {
          newDigit=0
        };
  
        res.push(num);
      }
      strA=res;
      res=[];
    }
    return strA.reverse().join('');
  
  }

  function cmpl(){
    let multipliers=expression.split('*');
    let factorials=multipliers.filter(elem=>elem.endsWith('!') && elem.charAt(elem.length-2)!=='!');
    let factorials2=multipliers.filter(elem=>elem.endsWith('!!'));
    let nums=multipliers.filter(elem=>!elem.includes('!'));
    
    let resFact='1';
    let resFact2='1';
    let resNum='1';
    let resOfCalc='1';
  
    for (let i=0; i<factorials.length; i++){
      let elemF=factorial(factorials[i].slice(0, factorials[i].length-1).toString());
      resFact=multiply(resFact, elemF);
    }

    
  
    for (let i=0; i<factorials2.length; i++){
      let elemF=factorial2(factorials2[i].slice(0, factorials2[i].length-2).toString());
      resFact2=multiply(resFact2, elemF);
    }

  
  
    for (let i=0; i<nums.length; i++){
      resNum=multiply(resNum, nums[i]);
  
    }

    resOfCalc=multiply(resFact, resFact2);
    resOfCalc=multiply(resOfCalc, resNum);

    return numOfZeros(resOfCalc);

  }


return cmpl(expression);
}
