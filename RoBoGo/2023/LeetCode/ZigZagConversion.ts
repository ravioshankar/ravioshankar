

function zigzagConversion(str: string, rows: number) {

    let strLenght = str.length;
    let stgTbl: any = {};
    let currentRow = 0;
    let direction = 0;


    for(let i = 0; i < strLenght; i++){
        let val = stgTbl[currentRow]?stgTbl[currentRow]:[];
        val.push(str[i]);
        stgTbl[currentRow] = val;

        if(currentRow == 0){
            direction = 0;
        }
        if(currentRow < rows && direction == 0){
            currentRow++;
        } 
        if(currentRow == rows){
            direction = 1;
            currentRow = 2;
        }
        if(direction== 1 && currentRow > 0){
            currentRow--;
        }

    }

    
    console.log(stgTbl);
    console.log(Object.values(stgTbl).toString().replaceAll(',',''));
    let initial = '';
    let output: string[] = Object.values(stgTbl)


   for( let o of output){
       initial = initial.concat(o)
   }


    console.log(initial)


}

zigzagConversion("PAYPALISHIRING", 3);

// expected output - “PAHNAPLSIIGYIR”

zigzagConversion("PAYPALISHIRING", 4);

// "PINALSIGYAHRPI"

/**
 * 
 * function convert(s: string, numRows: number): string {
    
    let currentPosition = 1;
    let i = 0;
    let rowTable = {};
    let direction = true;
    
  
     
    while(i < s.length ){
            
        if(currentPosition == 1) {
            direction = true;
        } 
        
        if( currentPosition == numRows) {
            direction = false;
        }
            if(currentPosition.toString() in rowTable[currentPosition]){
                rowTable[currentPosition] = rowTable[currentPosition].push(s[i]);

            } else {
                   rowTable[currentPosition] = s[i];
            }
            if(currentPosition) currentPosition++;
            if(!currentPosition) currentPosition--;
            
            i++;
        }
        
    
    console.log(rowTable);
    
    return 'rowTable';

};
 */