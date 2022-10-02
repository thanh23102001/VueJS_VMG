import system from './modules/system/module'
Store.registerModule('system', system.store)
Router.addRoutes(system.router)
Store.dispatch('system/initialize', null, { root: true })