Compare app functionality during dev mode and build mode.

## Setup
Run `npm i`

### Dev
1. Run `npm run dev`
2. Visit http://localhost:5173
3. Check console
4. Observe no errors

### Build
1. Run `npm run build && npm run preview`
2. Visit http://localhost:4173
3. Check console
4. Observe error "Uncaught Error: rails-ujs has already been loaded!"
