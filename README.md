# Lambda Local Development

## Setup ENV

```sh
cp .env.example .env
```

## Install Dependcies

```sh
npm i
```

## Up Docker Container

```sh
docker-compose up -d --build
```

## Deploy for local

```sh
npm run deploy
```

## Routing Table

```bash
   ┌────────────────────────────────────────────────────────────────────────────┐
   │                                                                            │
   │   POST   | http://localhost:3000/dev/api/insert                            │
   │   PUT    | http://localhost:3000/dev/api/update                            │
   │   DELETE | http://localhost:3000/dev/api/delete                            │
   │   GET    | http://localhost:3000/dev/api/select                            │
   │   GET    | http://localhost:3000/dev/api/dbtest                            │
   │                                                                            │
   └────────────────────────────────────────────────────────────────────────────┘
```
