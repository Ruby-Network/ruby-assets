<div align="center">
         
<img src="https://socialify.git.ci/ruby-network/ruby-assets/image?description=1&font=Inter&forks=1&issues=1&language=1&name=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Dark" alt="ruby" width="640" height="320" />

<img alt="repo size" src="https://img.shields.io/github/repo-size/ruby-network/ruby-assets?style=for-the-badge"></img>
<img alt="commit a week" src="https://img.shields.io/github/commit-activity/w/ruby-network/ruby-assets?style=for-the-badge"></img>

[![Ruby Network Discord](https://invidget.switchblade.xyz/bWgw8469VS?theme=dark)](https://discord.gg/bWgw8469VS)
</div>

## Usage

- Using this is super easy!
- I recommend using Docker for this so you don't have to build the server files!
- A docker-compose.yml & Dockerfile are provided.
    - You can either use the prebuilt docker image (docker-compose.yml)
    - Or clone the repository and build yourself with docker (docker-compose.build.yml)

### Using in your frontend
This is super easy!

### Prerequisites
- A server (preferably reverse proxied) or your own way of serving the assets
- A website in need of games
- Some way to render those games

Now, with all of that out of the way let's get started.
- All the games are located in the [games](./games) sub directory
- Some games are subdirectories with tons of different versions; An example would be [Subway Surfers](./games/subway-surfers)
- All you have to do is get the .html file located in each folder and render it. Every game uses relative paths so they shouldn't break. If they do, please open an issue
- Some great examples of websites using this repo & how they render the games:
    - [Incognito](https://github.com/titaniumnetwork-dev/Incognito/tree/main/src/pages/gs)
    - [Ruby](https://github.com/Ruby-Network/ruby/blob/main/src/public/js/games.js)

## Tech Stack

-   [Go](https://golang.org) (The file server)
-   [Docker](https://www.docker.com) (The containerization of the services)
-   [Docker Compose](https://docs.docker.com/compose) (The orchestration of the services)

---


