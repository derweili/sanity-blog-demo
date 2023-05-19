# Sanity demo projects

This repo contains a demo project for Sanity.io. It is a monorepo containing a frontend and a Sanity studio.

## Workspaces
### Frontend
The frontend is a Next.js project. To get started, run `npm i` to install dependencies, then `yarn dev -w frontend` to start the development server.

#### Storybook
The frontend also contains a Storybook project. To get started, run `npm i` to install dependencies, then `yarn storybook` to start the development server.

### Studio
The Sanity studio is a Sanity Content Studio. To get started, run `npm i` to install dependencies, then `yarn dev -w studio` to start the development server.

## Content Types
### Movie
The Movie content type is a simple content type with a title, release date, and a poster image.
On the frontend, the Movie content type is used to display a list of movies, and a detail page for each movie.
The Movie type supports sanity's preview feature, so you can preview changes to the movie before publishing them.

### News
The News content type is a simple content type with a title, and a date.
On the frontend, the News content type is used to display a list of news articles, and a detail page for each article.
The News template uses sanity's live subscription feature, so you can see new articles appear in real time.

### Other content types
The other types mainly come from the Sanity Movie Boilerplate. They are all somehow related to the Movie content type.