data-props
==========

Extract data props from your props, ready to be passed to DOM elements!

```js
var dataProps = require('data-props')
```

```js
  render () {
    return (
      <div className='MyAwesomeComponent' {...dataProps(this.props)}>
      </div>
    )
  }
```
