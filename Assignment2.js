//Author: Jamie Fernandez
//Assignment 2
//Due: June 4th, 2020
//Course: CSCI 39547


/*
Function Name: myEach
Purpose: A javascript omplementation of the forEach function that
		 iterates through an array and retrieves each element 
		 of the array, its index and uses them as parameters for the cb
		 function.

Parameters: 
	@array: an unmutable array that will be iterated
	@index: a number variable that contains the index of the array
	@cb: callback function 
Return Value: None 
*/
function myEach(array,index,cb) 
{
	var element;
	for (index = 0; index < array.length; index ++)
	{
		element = array[index];
		cb(element,index,array);
	}

}


/*
Function Name: myMap
Purpose: A javascript implementation of the map function that 
         takes in an array of elements and executes a 
         callback function on each of those elements.

Parameters: 
	@cb:callback function
Return Value:
	@new_array: newly mapped array
*/
function myMap(cb)
{
	var curr_value,		// Current array value
		index,
	var	new_array =[];

	for (index=0; index< this.length; index ++) // where this refers to the array being mapped
	{
		curr_value = this[index];
		new_array[index]= cb(curr_value, index, this);
	}

	return new_array;
}


/*
Function Name: myFilter
Purpose: A javascript implementation of the filter function that 
		 takes in an array of elements and executes a callback 
		 function on each of those elements.

Parameters: 
	@cb: callback function
	@f_cond : filtered condition
Return Value:
	new_array: Array that contains elements that meet the filtered condition passed.
*/
function myFilter(cb, f_cond)
{
	var index;
	var	new_array =[];

	for (index = 0; index < this.length; index++)
	{
		if (cb.call(f_cond,this(index),index, this)) 
		{
			new_array[new_array.length]= this[index];
		}
		//Assert: if element at index meets the condition of function called, 
		// 		  push element into new_array

	return new_array;

}


/*
Function Name: mySome
Purpose: A javascript implementation of the some function that 
		 takes in an array of elements and executes a 
		 callback function on each of those elements.

Parameters: 
	@cb: callback function 
	@f_cond : filtered condition
Return Value: 
	found : a boolean variable that specifies whether the array contains any ofthe elements
			that satisfies the condition
*/
function mySome(cb, f_cond)
{
	var index,
		found;

	for (index = 0; index < this.length; index++)
	{
		if (cb.call(f_cond,this(index),index, this)) 
		{
			found = true;
		}
		else 
		{
			found = false;
		}
		//Assert: if element at index meets the condition of function called, 
		// 		  found = true, else found = false

	return found;
}


/*
Function Name: myEvery
Purpose: A javascript implementation of the every function that 
		 that will take in an array of elements and executes a 
		 callback function on each of those elements.

Parameters: 
	@cb: callback function 
	@f_cond : filtered condition
Return Value: 
	found : boolean variable that is set equal to true if every element of the array 
			satisfies the condition 
*/
function myEvery(cb, f_cond)
{
	var index,
		found;

	for (index = 0; index < this.length; index++)
	{
		if (!cb.call(f_cond,this(index),index, this)) 
		{
			found = false;
		}
		else 
		{
			found = true;
		}
		//Assert: if any of the elements in array does not meet the condition of function called, 
		// 		  found = false, else found = true

	return found;
}


/*
Function Name: myIncludes
Purpose: A javascript implementation of the includes function that 
		 will take in an array of elements and indicates whether 
		 or not a target element is contained within the input array. 
Parameters: 
	@array: array of elements
	@target_elem: target element
Return Value: 
	includes : boolean value
*/
function myIncludes(array, target_elem)
{
	var index,
		includes;

	for (index=0; index < array.length; index ++)
	{
		if (array[index] == target_elem)
		{
			includes = true;
		}
		else
		{
			includes = false;
		}	
			

	}

	return includes;

}

/*
Function Name: myIndexOf 
Purpose: A javascript implementation of the indexOf function that
		 that will take in an array of elements and returns the index 
		 of the first encounter of a target element (if it is found) 
		 or -1 if that element does not exist within the input array. 
Parameters: 
	@array: an unmutable array that will be iterated
	@target_elem: target element
Return Value: 
	targ_index : index number of target_elem in the array if exists.
*/
function myIndexOf(array, target_elem)
{
	var index,
		targ_index;

	for (index=0; index < array.length; index ++)
	{
		if (array[index] == target_elem)
		{
			targ_index = index;
		}
		else
		{
			targ_index = -1;
		}	
			
	}

	return targ_index;
}


/*
Function Name: myPush
Purpose: A javascript implementation of the push function that 
         take in an array of elements well as an elementToAdd 
         and append that element to the end of the array.

Parameters: 
	@array: an  array that will be modified
	@elementToAdd: Element to be added to the array
Return Value:
	 : array with newly appended element. 
*/
function myPush(array, elementToAdd)
{

	array[array.length] = elementToAdd;

	return array;


}

/*
Function Name: myUnshift
Purpose: A javascript implementation of the indexOf function that 
         takes in an array of elements and returns the index of 
         the last encounter of a target element (if it is found) or -1 
         if that element does not exist within the input array.

Parameters: 
	@array: an unmutable array that will be iterated
	@target_elem: target element
Return Value: 
	    the index number of the last position of the target element in the array 
	    if found. If not found then target index is -1.
*/
function myUnshift(array, target_elem)
{
	var index,

	for (index=array.length; index < = 0; index --)
	{
		if (array[index] == target_elem)
		{
			return index;
		}
		else
		{
			return -1;
		}	
			
	}
//Assert: Iterates backwards in the array to find the last position of the 
//		  target_elem if found in the array. When position is found index is returned. 

}

/*
Function Name: grabKeys
Purpose: A javascript implementation of the Object.keys() function that
		 takes in an object and returns all of the keys of the 
		 key:value pairs of that object.
Parameter(s): 
 	@obj: object passed. 
Return Value(s): 
	 keys : an array that contains all of the keys of the object passed
*/
function grabKeys(obj)
{
	var keys = [];
	for (var index = 0, index < obj.length, index++)
	{
		keys.push(index); 
	}

	return keys;


}


/*
Function Name: grabValues
Purpose: A javascript implementation of the Object.values() function that
		 takes in an object and returns all of the keys of the 
		 key:value pairs of that object.
Parameters: 
	@obj : object passed.
Return Value:
	values: an array that contains the values of the object
*/
function grabValues(obj)
{
	var values = [];

	for (var index = 0, index < obj.length, index++)
	{
		values.push(obj[index]); 
	}

	return values;
}