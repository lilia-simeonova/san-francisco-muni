import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { Http, JsonpModule, Headers, Response, RequestOptions } from '@angular/http';
import * as d3 from 'd3';
import * as geo from 'd3-geo';
import * as zoom from 'd3-zoom';
import { MapComponent } from './../map/map.component';
import { MapService } from './../shared/map.service';

const IntervalDuration = 15000;

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {
  @Input() scale;
  projection;
  result;
  center;
  routes;
  tags = [];
  restrictedTags = [];
  buses;
  view;
  hash = new Map();
  activeRoutes = new Map();
  constructor(private map: MapService) { }

  ngOnInit() {
    this.view = 'default';
    this.fetchBuses();
  }

  changeView(id) {
    console.log('I trigerred change', id);
    this.restrictedTags.push(id);
    var svg = d3.select('svg').select('svg').select('g');
    svg.selectAll('image').remove();
    this.view = 'none';
    this.hash = new Map();
    this.activeRoutes.set(id, 'active');
    this.fetchBuses();
  }

  reset() {

    let svg = d3.select('svg').select('svg').select('g');
    svg.selectAll('image').remove();
    this.view = 'default';
    this.activeRoutes = new Map();
    this.hash = new Map();
    this.fetchBuses();
  }

  fetchBuses() {
    this.map.getStreets()
      .subscribe((res: Response) => {
        this.result =  res['_body'];
        this.result = JSON.parse(this.result);
        this.center = d3.geoCentroid(this.result);

        const getData = () => {

          this.map.getRoutes()
            .subscribe(res => {
              this.routes = res;
              let restriction;
              if (this.view === 'default') {
                restriction = this.tags;
                if (!this.tags.length) {
                  this.routes.route.map(tag => this.tags.push(tag.tag));
                }
              } else if (this.view === 'none') {
                restriction = this.restrictedTags;
              }

              this.map.getAllRoutes(restriction)
                .then(this.renderRoute.bind(this));
            });
        };
        getData();
        setInterval(getData, IntervalDuration);
      });
  }

  private renderRoute(route) {

    let tag: string;
    const projection = d3.geoMercator().center(this.center)
      .scale(this.scale);
    const g = d3.select('g');
    for (let i = 0; i < route.length; i++) {
      tag = route[i]['tag']
      this.buses = route[i]['result'];

      const arr = this.buses.vehicle || [];

      for (let i = 0; i < arr.length; i++) {
        const cx = projection([arr[i].lon, arr[i].lat])[0];
        const cy = projection([arr[i].lon, arr[i].lat])[1];
          let width = 50;
          let height = 50;
        if (this.hash.get(arr[i]['id']) === undefined) {

          this.hash.set(arr[i]['id'], { coordinates: [arr[i].lon, arr[i].lat] })

          let img = g.append('image')
          .data([cx,cy])
          .attr('width', width)
          .attr('height', height)
          .attr('x', cx)
          .attr('y', cy)
          .attr('id', 'a' + arr[i]['id'])
          .attr('xlink:href', './../assets/bus-side-view (1).svg')
          .append('title').text('Bus #' + arr[i]['id'] + ' Route #' + tag)


        } else {
          d3.select('#a' + arr[i]['id'])
            .data([cx, cy])
            .transition()
            .attr('width', width)
            .attr('height', height)
            .attr('x', cx)
            .attr('y', cy);

          this.hash.set(arr[i]['id'], { coordinates: [arr[i].lon, arr[i].lat] });
        }
      }
    }
  }

}
