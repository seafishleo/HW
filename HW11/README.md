# UFO challenge

## Overview of the analysis
### Purpose:
The purpose of this analysis is using Javascript, HTML, and CSS to build a table in web page for filtering the UFO sighting records.

## Results:
###  Describe to Dana how someone might use the new webpage by walking her through the process of using the search criteria. Use images of your webpage during the filtering process to support your explanation:
-- Use the "Filter Search" fields to filter specific date, city, state, country, or shape of the object.  
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW11/1.png)  
-- Filter by "State"
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW11/2.png)


## Summary:
### In a summary statement, describe one drawback of this new design and two recommendations for further development.
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW11/3.png)
-- The searching filter is case sensative so it can only recognize "ca" but not "CA" or "Ca". We need to use "toUpperCase()" or "toLowerCase()" method to compare the reference and the target string. We can also enchance our code by replacing "onchange" to "input" and "startsWith()", so that the filter will work whenever you enter any partial letter of words.