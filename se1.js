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
  //console.log(row);
  } 
  //console.log(row + " row values");
  
//calculating no. of digits in a row
console.log("before firstfunction")

calc_digits_row();
   //count=0;
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
   //console.log(rowwise[l]);
   
  	for(var m=0;m<9;m++)
  {
     if(row[l][m] !== '-')
     {
     	rowwise[l].push(row[l][m]);
       //console.log("!==");
     }
  }
 }
  console.log("inside calc_digits_row")
  console.log(rowwise[0]);
}



 //finding_length(rowwise[0])

//finding_highest();


filling_row_or_column();


 //calc_digits_col(3);


//finding the row in which there are highest numbers
function finding_highest()
 {
 	var temp=0;
 	var length;
 	//var index;
 for (var i=0;i<9;i++)
  {
   length= others.finding_length(rowwise[i])
   //console.log(rowwise[i]);
   
    if(temp<length)
     { 
     	temp=length ;
     	index=i;
        //console.log("here the temp is"+ temp);
    }

  }
  console.log('temping');
  console.log(index);
  
 	console.log(temp);
 	//console.log(rowwise[index]);
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
//    var columns = [];
//    while(t<9)
//      {
//       columns[t] = row[t][3];
//       t++
                    
//      }

//      console.log("Col values")
//      console.log(columns)

//      var find_col_com = others.finding_complement(columns)
//      console.log("col values");
//      console.log(find_col_com);


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
//    row[k]=sudoku.slice(temp1,temp1+9); 
//    temp1=temp1+9;
  console.log(row[k]);
  } 
    

}

function aisehi()
{
    console.log('haan toh');
    
}


 for(let r=0;r<rem_numbers.length;r++)
 {
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
     //console.log(find_col_com.includes(1))
     
     console.log(columns)
     console.log('with complements');
     console.log(find_col_com);
     console.log('for the remaining nos.');
     
     console.log(rem_numbers[r]);
     console.log('true or false');
     
     //console.log(find_col_com.includes(rem_numbers[r]))
     if((find_col_com.includes(rem_numbers[r])))
     {
        console.log('for count');
        count++;
        console.log(count);
        console.log("index ki value idhar hai  " + rem_places[q]);
        
        
     }
     else
      {
          continue;}
          console.log('&&&&&&&&');
          
     //console.log(rem_places.length-1);
       if(q==2)
     {(count == 1) ?  modifyRowOrCol(rem_numbers[r],r,rem_places[q],rem_numbers[r])   :  aisehi(rem_numbers) }


   }

}
   //var col_rem_num = others.finding_complement(columns)

   //corr_col_numbers=[];
}

console.log(row[0][3]);

}

array("1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--");



