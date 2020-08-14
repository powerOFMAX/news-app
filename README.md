# SSR / Offline first - News Page 

This is a simple react page that displays some articles. Was built using React from scratch. Is Server-side rendered and make use of Workbox to manage the service worker.

![Screenshot](https://i.imgur.com/M3TDgSH.jpg)
![Screenshot](https://i.imgur.com/j3Z51ou.jpg)


## Things to know:
- The styles are not being transpiled by Webpack, but, we have the resources offline. If we want, we can inject them through React. The Webpack it's already configured. This decision was made only for performance purposes.

## Requirements
The only requirement is

- Node >= 8.10

## How to set up the project
This app is Offline first. So you can test it without conection.

The basic steps to set up the project are:

- Clone the repo and Open the folder
- Install the dependencies ```yarn install```
- (Optional) copy the .env-example and change the endpoint. If a value is not set in .env it will grab the values from a JSON file under ``/utils`` folder.
  - You can use this command ```cp .env.example .env ```
- Run ```yarn run dev``` (You will probably need to run this command twice to make it work)

That ```"yarn run dev"``` runs several other commands, so at first, you will see some errors related to "files not found". Don't worry. When it detects that the files are not there, it builds them. That's why we need to execute this command twice to make it work. The first one builds everything and the second one sets up the server.

This project also has ESlint configured so, you have two more scripts that you can use:
- ```yarn run lint```
- ```yarn run lint:fix```

Once its done you should be able to see the project up and running on ```http://localhost:3006/```
