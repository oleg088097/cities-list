import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';

import cities from '../assets/cities-mini.json';

type CityInfo = {
  country: string;
  geonameid: number;
  name: string;
  subcountry: string | null;
};

type CountryNode = {
  name: string;
  children?: CountryNode[];
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected readonly title = 'cities-list';
  protected readonly treeControl = new NestedTreeControl<CountryNode>((node) => node.children);
  protected readonly hasChild = (_: number, node: CountryNode) => !!node.children && node.children.length > 0;

  public getTree(): CountryNode[] {
    return [];
  }
}
