# Pull official node LTS image
FROM node:14-alpine AS development

# Set node environment variable
ENV NODE_ENV development

# Add a work directory
WORKDIR /app

ARG REACT_APP_NAME

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

ENV REACT_APP_NAME $REACT_APP_NAME

# Install app dependencies
COPY ./app/package.json .
COPY ./app/package-lock.json .
RUN npm install

# Copy app filesk
COPY ./app .

# Expose port
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]
