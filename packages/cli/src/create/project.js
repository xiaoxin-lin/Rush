const Creator = require('./creator')

class Project extends Creator {
  constructor (options) {
    super()
  }

  async create () {
    return this.fetchTemplates()
  }
}

module.exports = Project
