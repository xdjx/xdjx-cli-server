'use strict';

const Controller = require('egg').Controller;
const mongo = require('../utils/mongo');

class TemplateController extends Controller {
  async getTemplate() {
    const { ctx } = this;
    const templateList = await mongo().collection('cli_template').get();
    ctx.body = templateList.data;
  }
}

module.exports = TemplateController;
