/**
 * Example 1: Running Profiler to check a counter execution
 */

import createProfiler from './profiler';

const counter = (): void => {
  const profiler = createProfiler('Print 1-50');
  profiler.start();
  for (let count = 1; count <= 50; count++) {
    console.log(count);
  }
  profiler.end();
};

counter();
