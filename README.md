Welcome to the YS Weather App test brief.

## Getting Started

Firstly, run an install for the components:

```bash
npm install
# or
yarn install
```


Next you'll need an API key from OpenWeather setup as an environment variable:

[https://openweathermap.org/api](https://openweathermap.org/api)


Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Tasks

Please note there are a few critical errors preventing the app from running. You'll need to resolve these first before moving on with the other tasks.

### Bugs

- Currently the search constantly fires in the background. We want this to only fire after 3 or more characters have been entered in the search box.
- Search results are currently limited to 5 results, please increase this to 10.
- 

### Feature Requests

- Add new module as per the design for a 7 day forcast.
- Create and add a favicon to the site based on the provided logo.
- Componantise styles following the provided structure in `/styles`
- Keep search query in search box upon landing on location page.