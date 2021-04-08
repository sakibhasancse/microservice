#Use an existing docker image as a base 
FROM alpine

# Download and install a dependencies 

RUN apk add --update redis
#tell the image what to do when it started
#as a container

CMD ['redis-server']