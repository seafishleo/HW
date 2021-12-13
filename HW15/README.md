# MechaCar Challenge

## Deliverable 1: Linear Regression to Predict MPG  

![GITHUB](https://github.com/seafishleo/HW/blob/master/HW15/1.png)  

Result Model: mpg = (6.267)vehicle_length + (0.0012)vehicle_weight + (0.0688)spoiler_angle + (3.546)ground_clearance + (-3.411)AWD + (-104.0)

### Which variables/coefficients provided a non-random amount of variance to the mpg values in the dataset?  
-- Vehicle length, and vehicle ground clearance are statistically non-random amounts of variance of the model. Length and ground clearance have a significant impact on miles per gallon. The vehicle weight, spoiler angle, and AWD have p-Values that indicate a random amount of variance with the dataset.

### Is the slope of the linear model considered to be zero? Why or why not?  
-- p-Value = 5.35e-11, is smaller than the assumed significance level of 0.05%. So there is sufficient evidence to reject our H0, and also demonstrated the slope of this linear model is not zero.

### Does this linear model predict mpg of MechaCar prototypes effectively? Why or why not?  
-- This linear model has an r-squared value of 0.7149, which means more than 71% of all mpg predictions will be determined by this model, so this regression model predict mpg of MechaCar prototypes effectively.


## Deliverable 2: Summary Statistics on Suspension Coils

![GITHUB](https://github.com/seafishleo/HW/blob/master/HW15/2.png)  
All manufacturing lots and each 3 lots  

![GITHUB](https://github.com/seafishleo/HW/blob/master/HW15/3.png)  
The boxplot of different lots

### The design specifications for the MechaCar suspension coils dictate that the variance of the suspension coils must not exceed 100 pounds per square inch. Does the current manufacturing data meet this design specification for all manufacturing lots in total and each lot individually? Why or why not?  
-- The total variance of all coils is 62.29 PSI, which is within the 100 PSI variance requirement.
but in the individual dataset, Lot 3 has the var=170 that is disproportionately causing the variance at the full lot level. We can see clearly in the boxplot that there are many outliers in Lot 3. 


## Deliverable 3: T-Test on Suspension Coils

![GITHUB](https://github.com/seafishleo/HW/blob/master/HW15/4.png)  
All manufacturing lots T-Test  
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW15/5.png)  
3 lots individual T-Test  

### Briefly summarize your interpretation and findings for the t-test results. Include screenshots of the t-test to support your summary.  
-- Lot 1 sample has the sample mean = 1500 and p-Value = 1, so we cannot reject the H0 that there is no statistical difference between the sample mean and the population mean. Lot 2 has essentially the same outcome with a mean = 1500.02, a p-Value = 0.61, so the H0 cannot be rejected. For Lot 3, the mean = 1496.14 and the p-Value = 0.04, which is lower than the common significance level of 0.05. The result to reject the null hypothesis which this sample mean, and the population mean are not statistically different.


## Deliverable 4: Design a Study Comparing the MechaCar to the Competition

### Write a short description of a statistical study that can quantify how the MechaCar performs against the competition. In your study design, think critically about what metrics would be of interest to a consumer: for a few examples, cost, city or highway fuel efficiency, horsepower, maintenance cost, or safety rating. In your description, address the following questions: What metric or metrics are you going to test? What is the null hypothesis or alternative hypothesis? What statistical test would you use to test the hypothesis? And why? What data is needed to run the statistical test?   
-- Safety Rating, current selling price, used car resale value, add-on package, cost (gas consumption and maintenance), engine type (gas, electric or hybrid).   
-- Null Hypothesis (H0): MechaCar has the reasonable price based on the factors we listed before.  
-- Alternative Hypothesis (H1): MechaCar is not priced correctly based on the factors we listed before.   
-- Multiple linear regression will be used to test the factors whether highly correlate with the selling price.

