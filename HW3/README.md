# PyPoll Challenge

## Overview of Election Audit

### Purpose:
The purpose of this analysis is to use the python code to calculate the election polls result, including county vote count, individual candidate's vote count, and deciding the winner. 

## Election-Audit Results:
![GITHUB]( https://https://github.com/seafishleo/HW/blob/master/HW3/1.png)

### 1. How many votes were cast in this congressional election?
369711

### 2. Provide a breakdown of the number of votes and the percentage of total votes for each county in the precinct.
Jefferson: 10.5% (38,855)
Denver: 82.8% (306,055)
Arapahoe: 6.7% (24,801)

### 3. Which county had the largest number of votes?
Largest County Number of Votes: Denver

### 4. Provide a breakdown of the number of votes and the percentage of the total votes each candidate received.
Charles Casper Stockham: 23.0% (85,213)
Diana DeGette: 73.8% (272,892)
Raymon Anthony Doane: 3.1% (11,606)

### 5. Which candidate won the election, what was their vote count, and what was their percentage of the total votes?
Winner: Diana DeGette
Winning Vote Count: 272,892
Winning Percentage: 73.8%

## Election-Audit Summary:
- This script can be used in a Students' Association Director election because this is similar to the congressional election structure. The county is corresponding to the class, and there is also only one winner in the result. We can add a column of "gender" for deeper analysis.
- This script can also be used in a President Election. Each voter can only choose one candidate, so we don't need to modify the script on this. We have to modify on the structure of "county list". To do so, we may use the nested structure on the dictionary to store the "state/province", "city/county", "district", and "zip code" value. With the modification of the dictionary, we can get a more precise result by subdivision the electoral district.





