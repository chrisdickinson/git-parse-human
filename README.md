# git-parse-human

parse author and committer names from git commit data.

```javascript
var human = require('git-parse-human')
  , committer = 'Chris Dickinson <christopher.s.dickinson@gmail.com> 1363906748 -0700'

human(committer) // {name, email, time, tzoff}

```

## API

#### human(str) -> result object | null

parse a human, returning an object with their name,
their email, the commit timestamp in MS and the commit
timezone offset in MS.

## License

MIT
