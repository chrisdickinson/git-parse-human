var test = require('tape')
  , human = require('./index')

test('things work as expected', function(assert) {
  var name = 'Chris Dickinson <christopher.s.dickinson@gmail.com> 1363906748 -0700'

  assert.deepEqual(
      human(name)
    , { name: 'Chris Dickinson'
      , email: 'christopher.s.dickinson@gmail.com'
      , time: 1363906748000
      , tzoff: -7 * 60 * 60 * 1000 })
  assert.end()
})
