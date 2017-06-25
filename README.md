# React Foursquare Search
For this test I have used the React [Create React App](https://github.com/facebookincubator/create-react-app) as a starting point to build upon, I'm currently learning React and I'm keen to develop more using it.

## Getting Started
`npm start`
Runs the app in development mode, [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm test`
Runs the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit.

`npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. By default, it also [includes a service worker](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app) so that your app loads from local cache on future visits.

`npm run deploy`
Deploy's the app to [https://mwhittet.github.io/react-foursquare-search/](https://mwhittet.github.io/react-foursquare-search/) to view it in the browser and makes it easier to view.

## Notes
**2 main components:**
- App - The parent component, imports Search
- Search - The main component that retrieves the query, fetches it and returns a result.

## What I would do differently
- Break the Search component down into more components e.g. maybe a SearchResults component to take care of the results when fetched.
- Introduce more tests.
- Enhance the look and feel to make it more user friendly.
