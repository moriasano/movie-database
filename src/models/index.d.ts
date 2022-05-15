import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MoviesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Movies {
  readonly id: string;
  readonly name: string;
  readonly director?: string | null;
  readonly genre?: string | null;
  readonly rating?: number | null;
  readonly year: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Movies, MoviesMetaData>);
  static copyOf(source: Movies, mutator: (draft: MutableModel<Movies, MoviesMetaData>) => MutableModel<Movies, MoviesMetaData> | void): Movies;
}