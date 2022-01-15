# Alphabet Soup Charity Analysis

## Overview of the analysis

### Purpose:
The purpose of this analysis is using the machine learning networks to preprocess the data for the neural network, compile, train and evaluate the model, then optimizing it.

## Results: 
### Data Preprocessing:  
-- What variable(s) are considered the target(s) for your model?  
IS_SUCCESSFUL Column.  
-- What variable(s) are considered to be the features for your model?  
Every Column except for IS_SUCCESSFUL.  
-- What variable(s) are neither targets nor features, and should be removed from the input data?  
I dropeed EIN, NAME, STATUS and USE_CASE because they will have little impact to our result.

### Compiling, Training, and Evaluating the Model:
-- How many neurons, layers, and activation functions did you select for your neural network model, and why?  
I had 2 hidden layers in my neural network. The first layer had 80 neurons, the second has 30 with an output layer. Both first and second hidden layer were the "relu" and the activation function for the output layer is "sigmoid."   
-- Were you able to achieve the target model performance?  
The model was not able to reach the target 75%. The accuracy for my model was 69%.   
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW19/1.png)  
-- What steps did you take to try and increase model performance?  
Attempt 1: Removed the 'USE_CASE' and 'STATUS' column. Our model can reach to 70% accuracy.
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW19/2.png)  
Attempt 2: Adding additional neurons to hidden. The accuracy is 53.3%.
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW19/3.png)  
Attempt 3: Changing third activation function to "tanh." The accuracy of the model was 58%.
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW19/4.png)  

## Summary:
### Summarize the overall results of the deep learning model. Include a recommendation for how a different model could solve this classification problem, and explain your recommendation.
--  The model ended up with the best accuracy score of 70% after optimization. The initial neural network had a accuracy score of 69%. We could also optimize our neural network by removing more features or simply adding more data to the dataset to increase accuracy.







