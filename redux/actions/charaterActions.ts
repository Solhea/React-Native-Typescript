import {ApolloClient, NormalizedCacheObject} from '@apollo/client';
import {GET_ALL_CHARACTERS, GET_ALL_LOCATIONS} from '../../graphql/graphql';
import {characterSlice, setCharacters} from '../reducers/characterReducer';
import {setLocations} from '../reducers/locationReducer';
import {addRequest, removeRequest} from '../reducers/sharedReducer';
import {AppDispatch} from '../store';

type characters = {
  data: {
    characters: {
      results: {
        id: number;
        name: string;
        image: string;
      }[];
    };
  };
};

type locations = {
  data: {
    locations: {
      results: {
        id: number;
        name: string;
        type: string;
        dimension: string;
      }[];
    };
  };
};

export const getAllCharacters =
  () =>
  (dispatch: AppDispatch, {}, client: ApolloClient<NormalizedCacheObject>) => {
    dispatch(addRequest('GET_ALL_CHARACTERS'));
    client
      .query({
        query: GET_ALL_CHARACTERS,
      })
      .then((res: characters) => {
        dispatch(setCharacters(res.data.characters.results));
      })
      .catch(() => {})
      .finally(() => {
        dispatch(removeRequest('GET_ALL_CHARACTERS'));
      });
  };

export const GetAllLocations =
  () =>
  (dispatch: AppDispatch, {}, client: ApolloClient<NormalizedCacheObject>) => {
    dispatch(addRequest('GET_ALL_LOCATIONS'));
    client
      .query({
        query: GET_ALL_LOCATIONS,
      })
      .then((res: locations) => {
        dispatch(setLocations(res.data.locations.results));
      })
      .catch(() => {})
      .finally(() => {
        dispatch(removeRequest('GET_ALL_LOCATIONS'));
      });
  };
