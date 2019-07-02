import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  logos = [];
  baseImagePath = "../../../assets/images/";

  constructor() {}

  ngOnInit() {
    this.logos.push(`${this.baseImagePath}/java_logo.jpg`);
    this.logos.push(`${this.baseImagePath}/C_logo.png`);
    this.logos.push(`${this.baseImagePath}/asp.net.jpg`);
    this.logos.push(`${this.baseImagePath}/spring_logo.png`);
    this.logos.push(`${this.baseImagePath}/angular_logo.png`);
    this.logos.push(`${this.baseImagePath}/react_logo.jpg`);
    this.logos.push(`${this.baseImagePath}/node_logo.png`);
    this.logos.push(`${this.baseImagePath}/and-more.png`);
  }
}
