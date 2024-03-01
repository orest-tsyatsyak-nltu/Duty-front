import { Component, Input } from '@angular/core';
import { ExecutionFact } from '../../shared/execution-fact';
import { ExecutionFactItemComponent } from '../execution-fact-item/execution-fact-item.component';
import { ExecutionFactService } from '../services/execution-fact.service';
import { RecordExecutionFactComponent } from '../record-execution-fact/record-execution-fact.component';

@Component({
  selector: 'execution-facts-list',
  standalone: true,
  imports: [ExecutionFactItemComponent, RecordExecutionFactComponent],
  templateUrl: './execution-facts-list.component.html',
  styleUrl: './execution-facts-list.component.scss',
})
export class ExecutionFactsListComponent {
  @Input() executionFacts: ExecutionFact[] = new Array<ExecutionFact>();
  constructor(private factService: ExecutionFactService) {
  }
  

  finishExecutionFact(id: string) {
    this.factService.finishExecutionFact(id)
  }
}
