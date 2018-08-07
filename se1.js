var others = require('./helpers')

var array = function(string)
{
	var str=string.length;
//console.log(string);
//console.log(str);
var i;
var j;
var k;
var l;
var row = [];
var column=[];
var subgrid=[];
var rowwise=[];
//var columnwise=[];
temp = 0;
temp1=0;
var sudoku = [];
rowcount = [];


//converting to an array
 for(i=0;i<str;i++)
 {
	sudoku[i]=string.charAt(i);
 }

//prettyboard
 for(j=0;j<9;j++)
 {
   console.log(sudoku.slice(temp,temp+9).join(" "));
   temp=temp+9;

 }

//into rows
 for(k=0;k<9;k++)
 {
   row[k]=sudoku.slice(temp1,temp1+9); 
   temp1=temp1+9;
  } 
  
//calculating no. of digits in a row
console.log("before firstfunction")

calc_digits_row();
   var t=0;
   console.log('to print column');
   
   while(t<9)
   {
     console.log(row[t][3])
     column[t] = row[t][3]
     t++
   }
   console.log("col values " + column);
   

//finding the digits and not '-' characters

function calc_digits_row()
{

  for(l=0;l<9;l++)
 {
   rowwise[l] = [];     //building a 2X2 array
   
  	for(var m=0;m<9;m++)
  {
     if(row[l][m] !== '-')
     {
     	rowwise[l].push(row[l][m]);
     }
  }
 }
  console.log("inside calc_digits_row")
  console.log(rowwise[0]);
}


filling_row_or_column();


function finding_highest()
 {
 	var temp=0;
 	var length;
  for (var i=0;i<9;i++)
  {
   length= others.finding_length(rowwise[i])
   
    if(temp<length)
     { 
     	temp=length ;
     	index=i;
     }
  }
  console.log('temping');
  console.log(index);
 	console.log(temp);
 	return index;
 }

function filling_row_or_column()
{
  let t=0;
   var indexof = finding_highest();
   console.log('yeha');
   
   console.log(row[indexof]);

   var rem_numbers = others.finding_complement(row[indexof]);
   console.log('these r rem nos');
   
   console.log(rem_numbers);
   var rem_places = others.findindg_empty_indexes(row[indexof])
   console.log('these are rem indexes');
   console.log(rem_places);
   
   
   var str_of_rem = rem_numbers.length;


function modifyRowOrCol(numbers,n,ind,acnum)
{
    console.log("came in the first function")
    console.log(numbers +" "+n+ "  with params");
    console.log('*************');
    console.log(indexof);
    console.log(ind);
    
    console.log(row[indexof][ind]);
    row[indexof][ind] = acnum
    console.log(acnum);
    console.log('#######');
    
    for(let k=0;k<9;k++)
   {
     console.log(row[k]);
   } 
}

function aisehi()
{
    console.log('haan toh');
    
}


 for(let r=0;r<rem_numbers.length;r++)
 {  let n;
    let count=0;
   for(let q=0;q<rem_places.length;q++)
   {
     t=0;  
     var columns=[];
     while(t<9)
     {
      columns[t] = row[t][rem_places[q]];
      t++;
     }
     console.log(" q value " + q)
     console.log(' r value ' + r);
     console.log(rem_places[q]);
     
     
     console.log(count + " time ");
     var find_col_com = others.finding_complement(columns)
     
     console.log(columns)
     console.log('with complements');
     console.log(find_col_com);
     console.log('for the remaining nos.');
     
     console.log(rem_numbers[r]);
     console.log('true or false');
     
     if((find_col_com.includes(rem_numbers[r])))
     {
        console.log('for count');
        count++;
        n=q;
        console.log("q value for count is " + n);
        
        console.log(count);
        console.log("index ki value idhar hai  " + rem_places[q]);
        
        
     }
     else if(q!=2)
      {   console.log('yeha aayi');
      
          continue;}
          console.log('&&&&&&&&');
          
       if(q==2)
     {(count == 1) ?  modifyRowOrCol(rem_numbers[r],r,rem_places[n],rem_numbers[r])   :  aisehi(rem_numbers) }

              
   }

}
}

console.log(row[0][3]);

}

array("1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--");



