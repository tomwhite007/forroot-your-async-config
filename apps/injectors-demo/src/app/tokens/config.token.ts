import { InjectionToken } from '@angular/core';
import { Config } from '../services/config.service';

export const ConfigToken = new InjectionToken<Config>(
  'Async Config Environment Vars'
);
