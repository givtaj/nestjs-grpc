## Running the app

### docker compose
```bash
$ docker compose up
```

## Testing

### e2e tests
```bash
$ npm run test:e2e app
```

### curl
```bash
$ curl -d '{"echo": "ping"}' -H "Content-Type: application/json" -X POST http://localhost:3000/ping
```
