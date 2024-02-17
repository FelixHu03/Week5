'use strict';

/**
 * kasir service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kasir.kasir');
