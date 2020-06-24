import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { WebsocketService } from 'src/services/websocket.service';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {
  public barChartData: ChartDataSets[] = [{ data: [2, 1, 4, 3], label: 'Ventas' }];
  public barChartLabels: Label[] = ['0', '1', '2', '3'];
  public barChartType: ChartType = 'bar';

  constructor(
    private wsService: WebsocketService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.cargarGrafica();
    this.escucharSocketBarras();
  }
  // REST
  cargarGrafica(){
    this.http.get('http://localhost:5000/grafica/barras').subscribe((data: any) => {
      this.barChartData = data;
      console.log('Data REST', data);
    });
  }
  // SOCKET
  escucharSocketBarras(){
    this.wsService.listen('cambio-data-encuesta').subscribe((data: any) => {
      console.log('socket: ', data);
      this.barChartData = data;
    });
  }

}
