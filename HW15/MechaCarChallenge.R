#1.Linear Regression to Predict MPG:
mechacar <- read.csv(file='MechaCar_mpg.csv',check.names=F,stringsAsFactors = F)
summary(lm(mpg ~ vehicle_length + vehicle_weight + spoiler_angle + ground_clearance + AWD, data = mechacar))

#2.Create Visualizations for the Trip Analysis:
scoil <- read.csv(file='Suspension_Coil.csv',check.names=F,stringsAsFactors = F)

total_summary <- scoil %>% summarize(Mean=mean(PSI),Median=median(PSI),Variance=var(PSI),SD=sd(PSI),Num_Coil=n(), .groups = 'keep')
total_summary

lot_summary <- scoil %>% group_by(Manufacturing_Lot) %>% summarize(Mean=mean(PSI),Median=median(PSI),Variance=var(PSI),SD=sd(PSI),Num_Coil=n(), .groups = 'keep')
lot_summary

plt <- ggplot(scoil,aes(x=Manufacturing_Lot,y=PSI))
plt + geom_boxplot()

#3.T-Tests on Suspension Coils:
t.test(scoil$PSI,mu=1500)

lot1 <- subset(scoil, Manufacturing_Lot=="Lot1")
lot2 <- subset(scoil, Manufacturing_Lot=="Lot2")
lot3 <- subset(scoil, Manufacturing_Lot=="Lot3")

t.test(lot1$PSI,mu=1500)
t.test(lot2$PSI,mu=1500)
t.test(lot3$PSI,mu=1500)







