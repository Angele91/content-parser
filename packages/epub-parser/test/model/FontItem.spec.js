import { assert, should } from 'chai';

import FontItem from '../../src/model/FontItem';
import Item from '../../src/model/Item';

should(); // Initialize should

describe('Model - FontItem', () => {
  it('Initialize test', () => {
    const item = new FontItem();
    assert(item instanceof Item);
    assert(item.defaultEncoding === undefined);
  });

  it('toRaw test', () => {
    const item = new FontItem({ id: 'default.otf', href: './default.otf', mediaType: 'font/otf', size: 87964 });
    item.toRaw().should.deep.equal({
      id: 'default.otf', href: './default.otf', mediaType: 'font/otf', size: 87964, itemType: 'FontItem'
    });
  });
});
