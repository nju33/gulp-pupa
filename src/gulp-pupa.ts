import through from 'through2';
import PluginError from 'plugin-error';
import pupa from 'pupa';

const PLUGIN_NAME = 'gulp-pupa';

export const gulpPupa = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[] | Record<string | number | symbol, any> = {},
) => {
  return through.obj(function(file, _enc, cb) {
    if (file.isNull()) {
      return cb(null, file);
    }

    if (file.isStream()) {
      this.emit(
        'error',
        new PluginError(PLUGIN_NAME, 'Streams not supported!'),
      );
    } else if (file.isBuffer()) {
      const content = file.contents.toString();
      const formatted = pupa(content, data);

      file.contents = Buffer.from(formatted);
      return cb(null, file);
    }
  });
};
