install:
	npm ci

test:
	npm test

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

link:
	npm link
