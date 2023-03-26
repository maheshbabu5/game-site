'use strict';

/**
 * old service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::old.old');
