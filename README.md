# react-perf-test

Simple color tile rendering app that allows the user to compare React's perfomance by using `react-addons-perf` against components using random generated keys vs indexed keys.

## Setup
Clone the repo:
```
git clone git@github.com:mannyreds11/react-perf-test.git
```


Install it and run:

```bash
npm install
npm run dev
```


## How to use
- From the main page, navigate to any of the pages by clicking on links
- Open dev tools console and type:
```
> perf.start()
// click on any of the color tiles to remove it
> perf.stop()
> perf.printOperations()
> perf.printWasted()
```
- Compare results


