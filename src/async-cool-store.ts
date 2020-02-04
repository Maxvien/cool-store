import { CoolStore } from "./cool-store";

interface AsyncState<Data, Error> {
  loading: boolean;
  data: Data | null;
  error: Error | null;
}

export class AsyncCoolStore<Data, Error> extends CoolStore<
  AsyncState<Data, Error>
> {
  setLoading() {
    this.set(state => {
      state.loading = true;
      state.error = null;
      return state;
    });
  }

  setData(callback: (data: Data) => Data) {
    this.set(state => {
      state.loading = false;
      state.error = null;
      state.data = callback(state.data);
      return state;
    });
  }

  setError(error: Error) {
    this.set(state => {
      state.loading = false;
      state.error = error;
      return state;
    });
  }
}
