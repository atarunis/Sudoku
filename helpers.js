module.exports = 
{
   finding_length(row_or_col)
 {
    var len = row_or_col.length;
    //console.log(len);	
    return len;
 },

   finding_complement(numbers)
 {
    var rem=[];
	console.log('finsing the complement');
	for(var j=0;j<9;j++)
   {		
     var i=0;  
	 while(i<9)
	   {
		if(numbers[i] != j+1)
		{  
           i++;	
		}
		else 
		{
			break;
		}
	    if(i==9) { rem.push(j+1);}
      }
    }

    return rem;
 },

  findindg_empty_indexes(array)
{
	var indexes = [];
	for(let k=0;k<9;k++)
	{
	  if(array[k] == '-')
	  indexes.push(k)
	}
	return indexes;
}



}