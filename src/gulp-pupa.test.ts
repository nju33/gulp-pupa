import File from 'vinyl';
import {gulpPupa} from './gulp-pupa';

test('basis', cb => {
  const fakeFile = new File({
    contents: Buffer.from('i am {name}'),
  });

  const stream = gulpPupa({name: 'nju33'});
  stream.write(fakeFile);

  stream.once('data', file => {
    expect(file.isBuffer()).toBeTruthy();
    expect(file.contents.toString()).toBe('i am nju33');
    cb();
  });
});
