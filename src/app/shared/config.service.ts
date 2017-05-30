import {InjectionToken} from '@angular/core';

export interface Config {
  StreetsConfigUrl: string;
  RoutesUrl: string;
  RouteConfig(route: string, time: number): string;
}

export const DevConfig: Config = {
  StreetsConfigUrl: 'https://sf-map-169207.appspot.com/load',
  RoutesUrl: 'http://webservices.nextbus.com/service/publicJSONFeed?command=routeConfig&a=sf-muni',
  RouteConfig(route: string, time: number): string {
    return 'http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni&r=' + route + '&t=' + time;
  }
};

export const ConfigToken = new InjectionToken<Config>('AppConfig');
