# assignment_djello

Backend: Postgress


Users Table            One to many => Boards 
					   One to many => Activity
					   One to many => Comments
					   One to many => Lists
					   One to many => Cards
ID			      	
First Name
Lastname
Date Created
Password Hash



Boards Table   One to many => Users
ID
Title 


Lists       One to one => Board
ID
Title


Cards     One to Many => Lists 
          One to Many => Activity
Members   One to Many => Comments
ID
Title
Description





Activity 
ID
Title
Date

Comment  
ID
Author
Date
