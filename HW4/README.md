# PyCitySchools Challenge

## Overview of the school district analysis

### Purpose:
The purpose of this analysis is using the pandas to calculate and summarize student scores then find out the relevance between different factors like school spending, school size and school type.

## Results:

### 1. How is the district summary affected?
Before Changes:
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW4/2_1.png)
After Changes:
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW4/2.png)

We can only see the passing percentage slightly decrease. But there is no significant changes on the district summary when we applied the adjusted data set.

### 2. How is the school summary affected?
Before Changes:
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW4/3_1.png)
After Changes:
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW4/3.png)

Only the passing percentages in Thomas High School have difference. After we removed the 9th grade student scores, the passing percentage on all sections slightly decreased.

### 3. How does replacing the ninth graders' math and reading scores affect Thomas High School's performance relative to the other schools?
The performance in Thomas High School has slightly decreased but it's still close to other charter schools which have better performance than district schools.

### 4. How does replacing the ninth-grade scores affect the following
- Math and reading scores by grade: 
Before Changes:
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW4/6_1.png)
After Changes:
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW4/6.png)

No difference after we replaced the ninth-grade score. The only thing is the ninth-grade score is None.

- Scores by school spending: 
After Changes:
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW4/10.png)

If we formatted the number to integer, we won't find out the difference. So I traced back to the pre-formatted data and find out, the "$630-644" group of average scores and passing percentage has slightly decreased.

- Scores by school size: 
After Changes:
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW4/8.png)

Has the same result as "Scores by school spending", so I use the pre-formatted data and then find out the "Medium (1000-2000)" group of average scores and passing percentage has slightly decreased.

- Scores by school type: 
After Changes:
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW4/9.png)

Has the same result as above, so I use the pre-formatted data and then find out the "Charter" group of average scores and passing percentage has slightly decreased.


## Summary:
- Although there is no significant changes on most of the dataset when we applied the adjusted scores, it still has some value for further investigation on the academic dishonesty. If we formatted the data to integer, maybe we won't get the difference, so I think we should stay on the original data with full digits under the decimal. All the data that involved in the Thomas High School's 9th grade has slightly decrease. 


