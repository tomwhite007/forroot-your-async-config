# forroot-your-async-config

A demonstration of using modules and injectors for specific use cases

- How to load a runtime config?
- Who’s Injector is it anyway?
- Constraints of third party initialisation

## How to load a runtime config?

1. Using Angular core APP_INITIALIZER token we can load data from an external file or api before the app spins up.
2. By using a service in its factory, we can store the result in the service for easy injection later and to pass it to a token to use immediately within the module schema.
3. The token containing library-specific config can be passed into the lib via its forRoot method.

## Who’s Injector is it anyway?

See branch _feature/whos-provider-is-it-anyway_

### Proof that forRoot Providers mingle and override Providers from @NgModule schema in the same module file

See file _libs/shared/ui-my-configurable-component/src/lib/shared-ui-my-configurable-component.module.ts_

### Proof that imported modules can access the same singletons provided by other imported modules into the same parent module

See file _libs/injectors-demo/feature-providers-test/src/lib/injectors-demo-feature-providers-test.module.ts_

## Constraints of third party initialisation

See branch _feature/third-party-module-config-for-dev-and-prod_

### Move everything we can into the feature-shell module

See file _libs/injectors-demo/feature-shell/src/lib/injectors-demo-feature-shell.module.ts_

### Imports that require value of environment.production before load

See file _apps/injectors-demo/src/app/app.module.ts_
