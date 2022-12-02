FROM node
WORKDIR /app
COPY . . 
RUN npm install
EXPOSE 9980
CMD ["node","app.js"]
