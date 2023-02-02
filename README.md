# Interactive Map

## Project description

This project was part of a job application. It is an application for the display and basic manipulation of spatial data (data on objects of navigation safety). The application consists of two screens (pages):

- Map with basic functionalities
- Tabular presentation of all data.

In this project I used:

- **recoil** - state management library for React
- **react-router** - routing library for the React
- **Leaflet** - JavaScript library for interactive maps
- **Bootstrap** - feature-packed frontend toolkit for styling

## Project result

The base on the map is OpenStreetMap. The display is limited to the area of the Croatia (the user cannot be positioned outside the borders of the Croatia, either by panning on the map or using zoom). Objects on the map are displayed with custom markers (other than the default Leaflet marker). Click on an individual object on the map opens a popup window that displays the basic attributes of the object (the popup can be closed by clicking on the "X" or "Close" button or by clicking anywhere outside the popup).

![interactive-map](/src/assets/interactive-map.gif)

## Install and Run the Project

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000/) to view it in your browser.

The page will reload when you make changes.
