'use strict';

const Controller = require('egg').Controller;
const { db } = require('../utils/tcb');

class TemplateController extends Controller {
  async getTemplate() {
    const { ctx } = this;
    const templateList = await db.collection('cli_template').get();
    ctx.body = templateList.data;
  }
}

module.exports = TemplateController;
