const File = require('./File');
const configs = require('./config')

const options = []
const promises = configs.map(conf => {
  return File.read(`/articles/${conf.name}.txt`).then(content => {
    const ret = {
      title: conf.name,
      content
    }

    const finalVal = `article${conf.value}`
    return File.create(`../public/static/kata/${finalVal}.json`, JSON.stringify(ret, null, 2)).then(data => {
      options.push({ "value": finalVal, "label": conf.name, "isRemote": true })
    }).catch(err => {
      console.log(err)
    })
  })
})

Promise.all(promises).then((ret) => {
  const retOptions = configs.map(c => options.find(o => o.label === c.name))
  console.log(JSON.stringify(retOptions, null, 2))
})
