#Use an existing docker image as a base 
FROM node:alpine

#chnage workdirectory

WORKDIR /app

# Download and install a dependencies 
COPY ./package.json ./
RUN npm install
COPY ./ ./


#tell the image what to do when it started
#as a container

CMD ["npm","start"]