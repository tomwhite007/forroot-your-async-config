import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Config, ConfigService } from './services/config.service';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { SharedUiMyConfigurableComponentModule } from '@injectors-demo/shared/ui-my-configurable-component';
import { ConfigToken } from './tokens/config.token';

const loadAsyncConfigFactory = (buildConfigService: ConfigService) => {
  return (): Promise<Config> => {
    return buildConfigService.loadConfig(environment.configPath);
  };
};

const returnLibraryConfigFactory = (buildConfigService: ConfigService) => {
  return buildConfigService.getLibraryConfig();
};
@NgModule({
  declarations: [AppComponent],
  providers: [
    {
      provide: APP_INITIALIZER, // ensure the application isn't started until the config file has loaded.
      useFactory: loadAsyncConfigFactory,
      deps: [ConfigService],
      multi: true,
    },
    {
      provide: ConfigToken,
      useFactory: returnLibraryConfigFactory,
      deps: [ConfigService],
    },
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedUiMyConfigurableComponentModule.forRoot(ConfigToken),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
