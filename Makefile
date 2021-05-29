install:
	npm ci

test:
	npm test

lint:
	npx eslint .

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

link:
	npm link
