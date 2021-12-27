# Credit Risk Analysis

## Overview of the analysis

### Purpose:
The purpose of this analysis is using the algorithms to resample the dataset, view the count of the target classes,  train a logistic regression classifier,  calculate the balanced accuracy score, generate a confusion matrix, and generate a classification report.

## Results:
### Using bulleted lists, describe the balanced accuracy scores and the precision and recall scores of all six machine learning models. Use screenshots of your outputs to support your results:
-- Naive Random Oversampling: Balanced accuracy test it 65%, the precision is at 99%, and the recall is 69%  
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW17/1.png)  

-- SMOTE Oversampling: Balanced accuracy test it 66%, the precision is at 99%, and the recall is 69%  
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW17/2.png)  

-- Undersampling:Balanced accuracy test it 66%, the precision is at 99%, and the recall is 40%  
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW17/3.png)  

-- Combination (Over and Under) Sampling: Balanced accuracy test it 54%, the precision is at 99%, and the recall is 57%  
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW17/4.png)  

-- Balanced Random Forest Classifier: Balanced accuracy test it 78%, the precision is at 99%, and the recall is 88%  
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW17/5.png)  

-- Easy Ensemble AdaBoost Classifier: Balanced accuracy test it 92%, the precision is at 99%, and the recall is 94%  
![GITHUB](https://github.com/seafishleo/HW/blob/master/HW17/6.png)  

## Summary:
### Summarize the results of the machine learning models, and include a recommendation on the model to use, if any. If you do not recommend any of the models, justify your reasoning.
--  In the first four resampling models the accuracy score are not as high as the ensemble classifiers and the recall in the oversampling/undersampling/mixed models is low as well. Ensemble classifiers are better predicting modes for the credit risk analysis since they both have high accuracy and good balance of scores.





