import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
} from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DispatcherService } from '../../services/dispatcher.service';
import { ToolsService } from 'src/app/services/tools.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  entryComponents: [TaskComponent]
})
export class MainPageComponent implements OnInit {

  constructor(
    private resolver: ComponentFactoryResolver,
    private app: ApplicationRef,
    private injector: Injector,
    private dispatcher: DispatcherService,
    private tools: ToolsService
    ) { }

  taskHTML:any = '';
  alternative:number = 0;
  totalTime:string = '00:00';

  ngOnInit() {
    this.dispatcher.totalTime.subscribe(
      (totalTime) => {
        this.totalTime = this.tools.calculateTime(totalTime);
      });
  }

  addTask(value: string) {
      let factory = this.resolver.resolveComponentFactory(TaskComponent);

      let newNode = document.createElement('div');
      newNode.id = 'placeholder';
      document.getElementById('tasks').appendChild(newNode);
   
      const ref = factory.create(this.injector, [], newNode);
      ref.instance.title = value;
      this.app.attachView(ref.hostView);
  }
}


