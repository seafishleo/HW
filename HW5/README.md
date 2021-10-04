# PyBer Challenge

## Overview of the analysis

### Purpose:
The purpose of this analysis is using the pandas to calculate and summarize the usage of ride-sharing in different city type then plot total fares for each city type with Matplotlib.

## Results:
### 1.The formatted "pyber_summary_df": 
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW5/1.png)

The dataframe shows the different ride-sharing usage between urban and rural. The urban total rides is much larger than rural because there are more population in cities. But rural has bigger digits in the "Average Fare per Ride" and "Average Fare per Driver" rural public transportation is not convenient than urban, so they tend to have longer distance ride in their trips.

### 2.DataFrame from the pivot table using loc between 2019-01-01 and 2019-04-29:
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW5/2.png)

### 3.Using the "resample()" function by week 'W' and get the sum of the fares for each week:
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW5/3.png)

### 4.Using the object-oriented interface method, plot the resample DataFrame using the df.plot() function and "fivethirtyeight" style:
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW5/4.png)


## Summary:
- Based on the results, there are more users in the urban area, so I think the ride sharing company should increase the vehicles in each spot in the urban area.
- The suburban and rural rides are relatively longer then in urban cities, so the company should put more sturdy vehicles in rural to deal with this situation.
- Based on the results, although rural has higher "Average Fare per Ride" and "Average Fare per Driver", the urban areas still bring much profits than rural, so I think the ride sharing company should open more service locations in the urban area.








