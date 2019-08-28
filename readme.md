Simple code to use passportjs and it's different authentication strategies 

We use curl commands to test the session 

#v for verbose
 
curl -X GET http://localhost:3000 -v 

#to save the cookie in file 

curl -X GET http://localhost:3000 -b cookie-file.txt

#to sent cookie with file

curl -X GET http://localhost:3000 -b cookie-file.txt -v


#when ever server gets restarted session id gets destoried so we need session store save id 

