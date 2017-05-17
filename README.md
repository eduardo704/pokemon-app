# Pokemon - App
# Live version running at [Heroku](https://edu-pokemon-app.herokuapp.com).

This project was generated using angular CLI,  To run it: 

### First download the repo 
### Install the dependencies with npm install
### Run it by using ng serve
### Or test with ng test or npm test for karma test

## Goal - The task given to me

A applicação que você deve desenvolver é uma aplicação para listar todos os pokémons vindos a partir de uma API e deve ser possivel visualizar um pokémon especifico para se obter mais informações sobre ele. Na visualização de um pokémon deve ser possivel adicionar um comentário sobre o mesmo e visualizar os comentários já criados para o pokémon.

## Technologies chosen and why

So at first when I saw this assigment the first technology that came to my mind was angular. First because I am more experienced seccond because I knew how to do all goals required with it (also was in the job description). Also with the help of the CLI it helps to keep the code organized and understable. Also makes it easier for testing. I also used firebase for keeping the comments as it was suggested and seemed the better match indeed.

## Idea of Design and UX

When I saw the jsonI from the request I imediatly though of the card design pattern as it seemed more aproriate to show all the key information.

I thought of using bootstrap 4 for that matter as it seemed to have al visual components I needed. And also works well with sass.

I used flexbox to display the cards I thought it is the perfect use case for it. The card used is the default bootstrap one.

I used Bootstrap grid system to organize the not card components.

The application looks okay in mobile even though it wasn't a requirement.

I used pagination to show the pokemon list as the api forces but also there are too many pokemons anyway so I guess it looks nice.

## Testing

I just made a feel sample tests, I have never done testing in Angular before as in my previous job there is a QA team that does them. But if I had more time I could have done more but without knowing what to test is hard.

## Bumps on the road and if I have more time

 - [x] Probably add some kind of verification on type of pokemon and set colors of the type label according.

 - [x] Search by pokemon or id.

 - [ ] Login via firebase so only logged in users can comment.

 - [x] Go to random pokemon button.

 - [x] Comment form validation.
