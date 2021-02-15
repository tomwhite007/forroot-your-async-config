import { InjectionToken } from '@angular/core';
import { LibraryConfig } from '@injectors-demo/shared/ui-my-configurable-component';
interface NotTypeSafe {
  test: 'whoops';
}

export const ConfigToken = new InjectionToken<NotTypeSafe>(
  'Token to pass to my library forRoot'
);
