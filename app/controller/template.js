'use strict';

const Controller = require('egg').Controller;
const mongo = require('../utils/mongo');

class TemplateController extends Controller {
  async getTemplate() {
    const { ctx } = this;
    const templateList = await mongo().query('template');
    ctx.body = templateList;
  }
}

module.exports = TemplateController;
