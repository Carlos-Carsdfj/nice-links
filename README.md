# NICE_LINKS
A shortlinks api rest 
is a simple URL shortener app. It will convert your boring long URL into nice and simple link with very great
[nice-links.vercel.app](https://nice-links.vercel.app/)

## Install
```shell
  # clone this repository
    git clone https://github.com/Carlos-Carsdfj/nice-links.git

```
necessary to have installed **Nodejs** y **NPM** for the next steps

```shell
  # installed necesary dependency
  npm install
```

```shell
  # run the server
  npm run dev

```
visit the port [http://localhost:3001](http://localhost:3001) (client side)



## API REST

| description | method | route |
| :---: | :---: | :---: |
| create |POST|root/create |
| show short link to original link | GET | root/:shortlink |


