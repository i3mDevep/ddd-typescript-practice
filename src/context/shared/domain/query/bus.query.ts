import { Query } from './base.query';
import { Response } from './response.query';

export interface QueryBus {
  ask<R extends Response>(query: Query): Promise<R>;
}