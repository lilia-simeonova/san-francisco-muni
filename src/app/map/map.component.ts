import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { Http, JsonpModule, Headers, Response, RequestOptions } from '@angular/http';
import { BusesComponent } from './../buses//buses.component';
import { MapService } from './../shared/map.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import * as d3 from 'd3';
import * as geo from 'd3-geo';
import * as zoom from 'd3-zoom';

const Width = 1200;
const Height = 600;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

@Injectable()
export class MapComponent implements OnInit {

  center: any;
  scale;

  constructor (private map: MapService) {}

  // projection$ = this.http.get(this.url)
  //   .map((res: Response) => res.json())
  //   .map((res => d3.geoCentroid(res.result)));

  ngOnInit() {
    this.map.getStreets()
      .subscribe((res: any) => {
        res = res['_body'];
        res = JSON.parse(res)
        this.renderMap(res);
      });
  }

  // Intentionally public in order to be testable
  getScale(bounds: any) {
    let scale = 170;
    const hscale  = scale * Width  / (bounds[1][0] - bounds[0][0]);
    const vscale  = scale * Height / (bounds[1][1] - bounds[0][1]);
    return (hscale < vscale) ? hscale : vscale;
  }

  private renderMap(map: any) {
    this.center = d3.geoCentroid(map);
    let path = d3.geoPath().projection(undefined);
    const bounds  = path.bounds(map);
    this.scale = this.getScale(bounds);
    const projection = d3.geoMercator().center(this.center)
      .scale(this.scale);
    path = path.projection(projection);

   const svg = d3.select('span.sf-map').append('svg')
      .attr('width', Width)
      .attr('height', Height)
      .style('fill', 'white')
      .style('margin-top', '50px')

    const svg2 = svg.append('svg')
      .style('stroke-width', '1.5px')
      .attr('class', 'map2')
      .attr('width', Width)
      .attr('height', Height)
      .append('g');

     const g = svg2.append('g')
      .style('stroke-width', '1.5px')
      .attr('class', 'map2');

    g.selectAll('path')
        .data(map.features)
      .enter().append('path')
        .attr('d', path)
        .attr('stroke', 'black')

      const zoom = d3.zoom()
        .on('zoom', () => {
          svg2.attr('transform', d3.event.transform);
        });

    svg.call(zoom)
        .call(zoom.transform, d3.zoomIdentity);
  }
}
