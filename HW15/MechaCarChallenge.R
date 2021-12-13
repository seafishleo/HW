#1.Linear Regression to Predict MPG:
mechacar <- read.csv(file='MechaCar_mpg.csv',check.names=F,stringsAsFactors = F)
summary(lm(mpg ~ vehicle_length + vehicle_weight + spoiler_angle + ground_clearance + AWD, data = mechacar))

#2.Create Visualizations for the Trip Analysis:
scoil <- read.csv(file='Suspension_Coil.csv',check.names=F,stringsAsFactors = F)

total_summary <- scoil %>% summarize(Mean=mean(PSI),Median=median(PSI),Variance=var(PSI),SD=sd(PSI), .groups = 'keep')
total_summary

lot_summary <- scoil %>% group_by(Manufacturing_Lot) %>% summarize(Mean=mean(PSI),Median=median(PSI),Variance=var(PSI),SD=sd(PSI), .groups = 'keep')
lot_summary

#3.T-Tests on Suspension Coils:
t.test(log10(scoil$PSI), mu=mean(log10(scoil$PSI)))








