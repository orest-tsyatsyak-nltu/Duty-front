import { Testimony } from './testimony';

export class ExecutionFact {
  constructor(
    public readonly id: string ='',
    public readonly startTime: Date = new Date(),
    public readonly finishTime: Date = new Date(),
    public readonly executorFullName: string ='',
    public readonly executorId: string ='',
    public readonly dutyName: string ='',
    public readonly testimonies: Testimony[] = [],
    public readonly description: string ='' 
  ) {}
}