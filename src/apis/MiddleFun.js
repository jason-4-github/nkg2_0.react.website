import FakeData from './fakeData.json';

const TIMEOUT = 100

export default {
  DataToTable: (cb, timeout) => setTimeout(() => cb(FakeData), timeout || TIMEOUT)
}
